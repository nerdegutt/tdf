import rawMd from '../../research/anbefalinger.md?raw'

function parseMd(md) {
  // Split into lines and process
  const lines = md.split('\n')
  let html = ''
  let inList = false  // ordered list
  let inUl = false    // unordered list
  let inBlockquote = false
  let listCounter = 0

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]

    // Horizontal rule
    if (/^---\s*$/.test(line)) {
      if (inList) { html += '</ol>'; inList = false }
      if (inUl) { html += '</ul>'; inUl = false }
      if (inBlockquote) { html += '</div>'; inBlockquote = false }
      html += '<hr class="my-6 border-stone-200">'
      continue
    }

    // H1
    if (line.startsWith('# ') && !line.startsWith('## ')) {
      if (inList) { html += '</ol>'; inList = false }
      if (inUl) { html += '</ul>'; inUl = false }
      if (inBlockquote) { html += '</div>'; inBlockquote = false }
      html += `<h1 class="text-2xl font-bold text-stone-900 mb-2">${inline(line.slice(2))}</h1>`
      continue
    }

    // H2 — day headers
    if (line.startsWith('## ')) {
      if (inList) { html += '</ol>'; inList = false }
      if (inUl) { html += '</ul>'; inUl = false }
      if (inBlockquote) { html += '</div>'; inBlockquote = false }
      html += `<h2 class="text-xl font-bold text-stone-900 mt-8 mb-3 pb-2 border-b border-stone-200">${inline(line.slice(3))}</h2>`
      continue
    }

    // H3 — section headers (Middag, Overnatting)
    if (line.startsWith('### ')) {
      if (inList) { html += '</ol>'; inList = false }
      if (inUl) { html += '</ul>'; inUl = false }
      if (inBlockquote) { html += '</div>'; inBlockquote = false }
      html += `<h3 class="text-lg font-semibold text-stone-800 mt-5 mb-2">${inline(line.slice(4))}</h3>`
      continue
    }

    // Blockquote lines
    if (line.startsWith('> ')) {
      if (inList) { html += '</ol>'; inList = false }
      if (inUl) { html += '</ul>'; inUl = false }
      if (!inBlockquote) {
        html += '<div class="anbefalinger-callout border-l-4 border-amber-400 rounded-r-lg px-4 py-3 my-3 text-sm space-y-1">'
        inBlockquote = true
      }
      html += `<p>${inline(line.slice(2))}</p>`
      continue
    } else if (inBlockquote) {
      html += '</div>'
      inBlockquote = false
    }

    // Ordered list items (1. **Name** – desc)
    const olMatch = line.match(/^\d+\.\s+(.*)/)
    if (olMatch) {
      if (inUl) { html += '</ul>'; inUl = false }
      if (!inList) {
        html += '<ol class="list-decimal list-inside space-y-3 my-3">'
        inList = true
        listCounter = 0
      }
      listCounter++
      html += `<li class="text-stone-700 leading-relaxed">${inline(olMatch[1])}</li>`
      continue
    }

    // Unordered list items
    if (line.startsWith('- ')) {
      if (inList) { html += '</ol>'; inList = false }
      if (!inUl) {
        html += '<ul class="list-disc list-inside space-y-1 my-2">'
        inUl = true
      }
      html += `<li class="text-stone-700">${inline(line.slice(2))}</li>`
      continue
    }

    // Indented continuation (url lines under list items)
    if (/^\s{2,}\S/.test(line) && (inList || inUl)) {
      const trimmed = line.trim()
      // URL line — render as small link
      if (trimmed.startsWith('[') || trimmed.startsWith('http')) {
        html += `<div class="ml-7 text-sm text-stone-500">${inline(trimmed)}</div>`
      } else {
        html += `<div class="ml-7 text-sm text-stone-600">${inline(trimmed)}</div>`
      }
      continue
    }

    // Table
    if (line.startsWith('|')) {
      if (inList) { html += '</ol>'; inList = false }
      if (inUl) { html += '</ul>'; inUl = false }
      if (inBlockquote) { html += '</div>'; inBlockquote = false }

      // Collect all table lines
      const tableLines = []
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      i-- // back up one

      if (tableLines.length >= 2) {
        html += renderTable(tableLines)
      }
      continue
    }

    // Empty line
    if (line.trim() === '') {
      if (inList) { html += '</ol>'; inList = false }
      if (inUl) { html += '</ul>'; inUl = false }
      continue
    }

    // Italic paragraph (*text*)
    if (line.startsWith('*') && !line.startsWith('**')) {
      if (inList) { html += '</ol>'; inList = false }
      if (inUl) { html += '</ul>'; inUl = false }
      html += `<p class="text-sm text-stone-500 italic my-2">${inline(line)}</p>`
      continue
    }

    // Regular paragraph
    if (inList) { html += '</ol>'; inList = false }
    if (inUl) { html += '</ul>'; inUl = false }
    html += `<p class="text-stone-700 my-2">${inline(line)}</p>`
  }

  if (inList) html += '</ol>'
  if (inUl) html += '</ul>'
  if (inBlockquote) html += '</div>'

  return html
}

function renderTable(tableLines) {
  const headers = tableLines[0].split('|').filter(c => c.trim() !== '').map(c => c.trim())
  // Skip separator line (index 1)
  const rows = tableLines.slice(2).map(l =>
    l.split('|').filter(c => c.trim() !== '').map(c => c.trim())
  )

  const thHtml = headers.map(h => `<th scope="col" class="py-2 px-3 text-left text-xs uppercase text-stone-400">${inline(h)}</th>`).join('')
  const trHtml = rows.map(r =>
    `<tr class="border-b border-stone-100 hover:bg-stone-50">${r.map(c => `<td class="py-2 px-3 text-sm text-stone-700">${inline(c)}</td>`).join('')}</tr>`
  ).join('')

  return `
    <div class="overflow-x-auto my-4">
      <table class="w-full text-left">
        <thead><tr class="border-b-2 border-stone-200">${thHtml}</tr></thead>
        <tbody>${trHtml}</tbody>
      </table>
    </div>
  `
}

function inline(text) {
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  // Italic
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>')
  // Strikethrough
  text = text.replace(/~~(.+?)~~/g, '<del class="text-stone-400">$1</del>')
  // Markdown links [text](url)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" class="text-blue-700 hover:text-blue-900 underline">$1</a>')
  // Bare URLs that aren't already in href
  text = text.replace(/(?<!href="|">)(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener" class="text-blue-700 hover:text-blue-900 underline">$1</a>')
  return text
}

export function renderAnbefalinger() {
  const container = document.getElementById('day-content')
  if (!container) return

  const contentHtml = parseMd(rawMd)

  container.innerHTML = `
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-2">
        <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 text-white text-xl" aria-hidden="true">🍽️</span>
        <div>
          <p class="text-sm text-stone-400">Mat & overnatting</p>
          <h2 class="text-2xl font-bold text-stone-900">Anbefalinger</h2>
        </div>
      </div>
      <p class="text-sm text-stone-500 mt-2">Verifiserte restaurant- og overnattingsanbefalinger for hele turen.</p>
    </div>

    <!-- Content -->
    <div class="section-food border-l-4 rounded-lg shadow-sm mb-4 overflow-hidden">
      <div class="px-5 py-4">
        <div class="section-content">
          ${contentHtml}
        </div>
      </div>
    </div>
  `
}

export function destroyAnbefalinger() {
  // Nothing to clean up
}
