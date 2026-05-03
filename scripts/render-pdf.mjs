import { createServer } from 'node:http'
import { readFile, stat, rename, copyFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import puppeteer from 'puppeteer'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = join(ROOT, 'dist')
const PORT = 4173

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff2': 'font/woff2',
}

async function serveDist() {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://localhost:${PORT}`)
      let filePath = join(DIST, decodeURIComponent(url.pathname))

      // SPA fallback: hvis stien ikke har en fil-endelse og ikke finnes, server index.html
      try {
        const s = await stat(filePath)
        if (s.isDirectory()) filePath = join(filePath, 'index.html')
      } catch {
        if (!extname(filePath)) {
          filePath = join(DIST, 'index.html')
        } else {
          res.statusCode = 404
          res.end('Not found')
          return
        }
      }

      const data = await readFile(filePath)
      res.setHeader('Content-Type', MIME[extname(filePath)] || 'application/octet-stream')
      res.end(data)
    } catch (err) {
      res.statusCode = 500
      res.end(`Server error: ${err.message}`)
    }
  })

  await new Promise(resolve => server.listen(PORT, resolve))
  return server
}

async function main() {
  // Høy kvalitet: 2x screenshots, høyere JPEG-kvalitet, hopp over Ghostscript
  const HQ = process.env.PDF_HQ === '1'
  const screenshotQuality = HQ ? 92 : 78
  const deviceScaleFactor = HQ ? 2 : 1
  const skipGs = HQ || process.env.SKIP_GS === '1'

  console.log(`Modus: ${HQ ? 'HØY KVALITET (større fil)' : 'KOMPRIMERT (mindre fil)'}`)
  console.log('Starter lokal HTTP-server for PDF-generering...')
  const server = await serveDist()

  console.log('Starter Puppeteer...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor })

    const printUrl = HQ ? `http://localhost:${PORT}/print?hq=1` : `http://localhost:${PORT}/print`
    console.log(`Laster ${printUrl}...`)
    await page.goto(printUrl, { waitUntil: 'networkidle0', timeout: 60000 })

    console.log('Venter på at alle kart og bilder er ferdig lastet...')
    await page.waitForFunction(() => window.__printReady === true, { timeout: 90000 })

    // Ekstra buffer for å sikre at alt er rendret
    await new Promise(r => setTimeout(r, 2000))

    // Flat hvert kart til ett enkelt JPEG i stedet for hundrevis av separate tiles.
    // Det reduserer PDF-størrelsen dramatisk (mange tiles → ett bilde per kart).
    console.log('Konverterer kart til komprimerte bilder...')
    const mapIds = await page.evaluate(() => {
      const ids = ['print-overview-map']
      for (let i = 1; i <= 18; i++) ids.push(`print-map-day-${i}`)
      return ids.filter(id => document.getElementById(id))
    })

    // Skriv screenshots til fil og refer til dem via HTTP-serveren —
    // mer pålitelig enn data: URL-er i Puppeteer's PDF-renderer.
    const tmpDir = join(DIST, '__print_tmp__')
    await mkdir(tmpDir, { recursive: true })

    for (const id of mapIds) {
      const handle = await page.$(`#${id}`)
      if (!handle) continue
      const buf = await handle.screenshot({ type: 'jpeg', quality: screenshotQuality })
      const fileName = `${id}.jpg`
      await writeFile(join(tmpDir, fileName), buf)
      console.log(`  ${id}: ${(buf.length / 1024).toFixed(0)} KB`)
      await page.evaluate((id, src) => {
        const el = document.getElementById(id)
        if (!el) return
        while (el.firstChild) el.removeChild(el.firstChild)
        const img = document.createElement('img')
        img.src = src
        img.style.width = '100%'
        img.style.height = '100%'
        img.style.objectFit = 'cover'
        img.style.display = 'block'
        el.appendChild(img)
      }, id, `/__print_tmp__/${fileName}`)
    }

    // Vent på at alle de nye img-elementene er ferdig dekodet
    await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('.print-day-map img, .print-overview-map img'))
      await Promise.all(imgs.map(img => img.decode().catch(() => {})))
    })

    // Vent kort så alle nye img-tags er rendret
    await new Promise(r => setTimeout(r, 500))

    console.log('Genererer PDF...')
    const distPdf = join(DIST, 'tdf-reise.pdf')
    const publicPdf = join(ROOT, 'public', 'tdf-reise.pdf')
    await page.pdf({
      path: distPdf,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
    })

    const rawSize = (await stat(distPdf)).size

    // Komprimer med Ghostscript hvis tilgjengelig (gir typisk 80–90 % reduksjon)
    const which = spawnSync('which', ['gs'])
    if (which.status === 0 && !skipGs) {
      console.log('Komprimerer PDF med Ghostscript...')
      const tmpPdf = distPdf + '.tmp'
      const gs = spawnSync('gs', [
        '-sDEVICE=pdfwrite',
        '-dCompatibilityLevel=1.5',
        '-dPDFSETTINGS=/ebook',
        '-dNOPAUSE',
        '-dQUIET',
        '-dBATCH',
        '-dDetectDuplicateImages=true',
        '-dCompressFonts=true',
        '-dSubsetFonts=true',
        `-sOutputFile=${tmpPdf}`,
        distPdf,
      ])
      if (gs.status === 0) {
        await rename(tmpPdf, distPdf)
      } else {
        console.warn('Ghostscript-komprimering feilet, beholder ukomprimert PDF.')
      }
    } else if (skipGs) {
      console.log('(HQ-modus — hopper over Ghostscript-komprimering)')
    } else {
      console.log('(Ghostscript ikke installert — hopper over komprimering)')
    }

    // Sørg for at public/ finnes (fjernet fra repo, finnes ikke i CI)
    await mkdir(join(ROOT, 'public'), { recursive: true })
    await copyFile(distPdf, publicPdf)

    // Rydd opp midlertidige screenshot-filer
    try { await rm(tmpDir, { recursive: true, force: true }) } catch {}

    const finalSize = (await stat(distPdf)).size
    const mb = (n) => (n / 1024 / 1024).toFixed(1)
    console.log(`PDF generert: ${mb(finalSize)} MB (før komprimering: ${mb(rawSize)} MB)`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch(err => {
  console.error('Feil:', err)
  process.exit(1)
})
