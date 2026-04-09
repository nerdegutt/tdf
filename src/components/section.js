const SECTION_CONFIG = {
  sights: { icon: '🏛️', label: 'Severdigheter', color: 'blue' },
  history: { icon: '🧠', label: 'Historisk trivia', color: 'purple' },
  photo: { icon: '📷', label: 'Fotomuligheter', color: 'green' },
  accommodation: { icon: '🏨', label: 'Overnatting', color: 'amber' },
  food: { icon: '🍽️', label: 'Mat & drikke', color: 'red' },
  practical: { icon: '💡', label: 'Praktisk', color: 'slate' },
  gem: { icon: '💎', label: 'Skjult perle', color: 'emerald' },
}

function renderBooking(section) {
  if (!section.bookingWarning) return ''
  return `<div class="booking-banner flex items-center gap-3 rounded-lg px-4 py-2.5 mb-4">
    <span class="text-lg shrink-0" aria-hidden="true">🎟️</span>
    <div class="text-sm flex-1">
      <strong>Book på forhånd:</strong> ${section.bookingWarning}
    </div>
    ${section.bookingUrl ? `<a href="${section.bookingUrl}" target="_blank" rel="noopener" class="shrink-0 inline-flex items-center gap-1 text-xs font-medium bg-amber-500 text-white px-3 py-1.5 rounded-full hover:bg-amber-600 transition-colors">Bestill her →</a>` : ''}
  </div>`
}

let _refId = 0

function renderReferences(section) {
  if (!section.references || section.references.length === 0) return ''
  const baseId = _refId++
  const tags = section.references.map((ref, i) => {
    const icon = ref.type === 'film' ? '🎬' : '📖'
    const label = ref.author ? `${ref.title} (${ref.author})` : `${ref.title} (${ref.year})`
    const id = `ref-${baseId}-${i}`
    if (ref.relevance) {
      return `<button type="button" class="ref-pill inline-flex items-center gap-1.5 text-xs rounded-full px-2.5 py-1 bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer" aria-expanded="false" aria-controls="${id}"><span class="text-sm" aria-hidden="true">${icon}</span> ${label}</button>`
    }
    return `<span class="inline-flex items-center gap-1.5 text-xs rounded-full px-2.5 py-1 bg-stone-100 text-stone-600"><span class="text-sm" aria-hidden="true">${icon}</span> ${label}</span>`
  }).join('')

  const tooltips = section.references.map((ref, i) => {
    if (!ref.relevance) return ''
    const icon = ref.type === 'film' ? '🎬' : '📖'
    const title = ref.author ? `${ref.title} (${ref.author})` : `${ref.title} (${ref.year})`
    const id = `ref-${baseId}-${i}`
    return `<div id="${id}" class="ref-tooltip hidden rounded-lg px-3.5 py-2.5 text-sm text-stone-600 bg-stone-100" role="tooltip"><strong class="text-stone-700">${icon} ${title}:</strong> ${ref.relevance}</div>`
  }).join('')

  return `<div class="ref-group mb-4"><div class="flex flex-wrap gap-2">${tags}</div>${tooltips}</div>`
}

/** Nivå 1: Høydepunkter — stort, luftig, ren typografi */
export function renderHighlight(section) {
  const config = SECTION_CONFIG[section.type] || SECTION_CONFIG.practical
  const summary = section.summary
    ? `<p class="text-base text-stone-500 mt-2 mb-4 max-w-prose leading-relaxed">${section.summary}</p>`
    : ''

  return `
    <div class="highlight-section mb-10">
      <h3 class="text-xl font-bold text-stone-900 mb-1">${section.title}</h3>
      ${summary}
      ${renderReferences(section)}
      ${renderBooking(section)}
      <div class="section-content text-stone-600 max-w-prose">
        ${section.content}
      </div>
    </div>
  `
}

/** Nivå 2: Kompakte kort */
export function renderCompact(section) {
  const config = SECTION_CONFIG[section.type] || SECTION_CONFIG.practical

  return `
    <div class="section-${section.type} rounded-lg">
      <div class="px-4 py-3">
        <h3 class="flex items-center gap-2 text-base font-semibold mb-2">
          <span aria-hidden="true">${config.icon}</span>
          <span>${section.title}</span>
        </h3>
        ${renderBooking(section)}
        <div class="section-content text-sm text-stone-600">
          ${section.content}
        </div>
      </div>
    </div>
  `
}

/** Nivå 3: Dypdykk — kollapserbar accordion */
export function renderAccordion(section) {
  const config = SECTION_CONFIG[section.type] || SECTION_CONFIG.practical

  return `
    <details class="accordion-section border-b border-stone-200 group">
      <summary class="flex items-center gap-2 py-3.5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true">${config.icon}</span>
        <span class="text-sm font-medium text-stone-700 flex-1">${section.title}</span>
        <svg class="w-4 h-4 text-stone-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </summary>
      <div class="section-content text-sm text-stone-600 pb-4 pl-7">
        ${renderBooking(section)}
        ${renderReferences(section)}
        ${section.content}
      </div>
    </details>
  `
}

/** Trivia — kompakt faktaboks */
export function renderTrivia(trivia) {
  return `
    <div class="trivia-bubble rounded-lg px-4 py-3 mt-3">
      <p class="text-sm text-stone-600">${trivia}</p>
    </div>
  `
}

/** Skjult perle — spesialbehandling */
export function renderGem(section) {
  const meta = []
  if (section.detour) meta.push(`<span class="inline-flex items-center gap-1"><span aria-hidden="true">📍</span> ${section.detour}</span>`)
  if (section.duration) meta.push(`<span class="inline-flex items-center gap-1"><span aria-hidden="true">⏱️</span> ${section.duration}</span>`)
  if (section.cost) meta.push(`<span class="inline-flex items-center gap-1"><span aria-hidden="true">💰</span> ${section.cost}</span>`)
  const metaHtml = meta.length > 0
    ? `<div class="flex flex-wrap gap-4 mt-3 pt-3 text-xs text-stone-500">${meta.join('')}</div>`
    : ''

  return `
    <div class="gem-section mb-8">
      <div class="flex items-center gap-2 mb-2">
        <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-800 text-white">
          <span aria-hidden="true">💎</span>
          Skjult perle
        </span>
      </div>
      <h3 class="text-lg font-semibold text-stone-900 mb-2">${section.title}</h3>
      <div class="section-content text-sm text-stone-600 max-w-prose">
        ${section.content}
      </div>
      ${metaHtml}
    </div>
  `
}

/** Bakoverkompatibel: rendrer seksjon i gammel stil (fallback) */
export function renderSection(section) {
  if (section.type === 'gem') return renderGem(section)
  if (section.highlight) return renderHighlight(section)
  // Default: gammel stil (kompakt boks)
  return renderCompact(section)
}
