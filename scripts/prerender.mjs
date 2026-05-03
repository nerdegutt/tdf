import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { days } from '../src/data/days.js'

const SITE_URL = 'https://tdf.offline.no'
const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = join(ROOT, 'dist')
const TEMPLATE_PATH = join(DIST, 'index.html')

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function ogImageFor(day) {
  // Bygg en 1200x630-variant fra hero-URL-en
  if (!day.image) return null
  return day.image.hero.replace(/w=\d+&h=\d+/, 'w=1200&h=630')
}

function applyMeta(template, { title, description, url, image }) {
  let html = template

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  )
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${escapeHtml(description)}"`
  )
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${escapeHtml(url)}"`
  )
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${escapeHtml(title)}"`
  )
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${escapeHtml(description)}"`
  )
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${escapeHtml(url)}"`
  )
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${escapeHtml(title)}"`
  )
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${escapeHtml(description)}"`
  )

  if (image) {
    const imageMeta =
      `  <meta property="og:image" content="${escapeHtml(image)}" />\n` +
      `  <meta property="og:image:width" content="1200" />\n` +
      `  <meta property="og:image:height" content="630" />\n` +
      `  <meta name="twitter:image" content="${escapeHtml(image)}" />\n`
    html = html.replace('</head>', imageMeta + '</head>')
  }

  return html
}

async function writePage(path, html) {
  const target = path === '/' ? DIST : join(DIST, path)
  await mkdir(target, { recursive: true })
  await writeFile(join(target, 'index.html'), html)
}

async function main() {
  const template = await readFile(TEMPLATE_PATH, 'utf-8')
  const pages = []

  // Default OG-bilde for sider uten spesifikk: Mont Saint-Michel (dag 6) — ikonisk og gjenkjennelig
  const defaultImage = ogImageFor(days.find(d => d.day === 6))

  pages.push({
    path: '/',
    title: 'Tour de France 2026 – Reiseguide',
    description: 'Reiseguide for en 18-dagers biltur gjennom Europa: Norge → Tyskland → Belgia → Frankrike → Spania og hjem. 7 land, 6200 km, mai 2026.',
    url: `${SITE_URL}/`,
    image: defaultImage,
  })

  pages.push({
    path: '/info',
    title: 'Reiseinfo · Tour de France 2026',
    description: 'Komplett ruteoversikt, kjøreinfo for Tesla og booking-oversikt for de viktigste opplevelsene på 18-dagers turen gjennom Europa.',
    url: `${SITE_URL}/info`,
    image: defaultImage,
  })

  pages.push({
    path: '/topp10',
    title: 'Topp 10 · Tour de France 2026',
    description: 'Personlige favoritter rangert i tre kategorier: historie og severdigheter, fotomuligheter, og mat og drikke fra hele turen.',
    url: `${SITE_URL}/topp10`,
    image: defaultImage,
  })

  for (const d of days) {
    const canonicalUrl = `${SITE_URL}/dag/${d.day}/${d.slug}`
    const meta = {
      title: `Dag ${d.day}: ${d.from} → ${d.to} · Tour de France 2026`,
      description: d.description || `Dag ${d.day} av reisen, ${d.date}: ${d.from} til ${d.to}. ${d.subtitle}.`,
      url: canonicalUrl,
      image: ogImageFor(d),
    }
    // Kanonisk URL med slug
    pages.push({ path: `/dag/${d.day}/${d.slug}`, ...meta })
    // Backward-compat: /dag/N peker også på samme innhold, med canonical til slug-versjonen
    pages.push({ path: `/dag/${d.day}`, ...meta })
  }

  for (const p of pages) {
    await writePage(p.path, applyMeta(template, p))
  }

  // Sitemap — kun kanoniske URL-er (unike etter url, første forekomst beholdes)
  const seen = new Set()
  const canonical = pages.filter(p => {
    if (seen.has(p.url)) return false
    seen.add(p.url)
    return true
  })
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${canonical.map(p => `  <url><loc>${p.url}</loc></url>`).join('\n')}
</urlset>
`
  await writeFile(join(DIST, 'sitemap.xml'), sitemap)

  // robots.txt
  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
  await writeFile(join(DIST, 'robots.txt'), robots)

  console.log(`Pre-rendret ${pages.length} sider + sitemap.xml + robots.txt`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
