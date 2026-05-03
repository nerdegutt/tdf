import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
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
  console.log('Starter lokal HTTP-server for PDF-generering...')
  const server = await serveDist()

  console.log('Starter Puppeteer...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 1 })

    console.log('Laster /print...')
    await page.goto(`http://localhost:${PORT}/print`, { waitUntil: 'networkidle0', timeout: 60000 })

    console.log('Venter på at alle kart og bilder er ferdig lastet...')
    await page.waitForFunction(() => window.__printReady === true, { timeout: 90000 })

    // Ekstra buffer for å sikre at alt er rendret
    await new Promise(r => setTimeout(r, 2000))

    console.log('Genererer PDF...')
    const pdfPath = join(DIST, 'tdf-reise.pdf')
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
    })

    const stats = await stat(pdfPath)
    console.log(`PDF generert: tdf-reise.pdf (${(stats.size / 1024 / 1024).toFixed(1)} MB)`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch(err => {
  console.error('Feil:', err)
  process.exit(1)
})
