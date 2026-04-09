import { days } from '../data/days.js'
import { renderHighlight, renderCompact, renderTrivia, renderGem } from '../components/section.js'

export function renderDay(day) {
  const container = document.getElementById('day-content')
  if (!container) return

  const kmText = day.km > 0 ? `Ca. ${day.km} km` : 'Ingen kjøring'
  const flagEmoji = day.day === 5 ? ' 🇳🇴' : day.day === 18 ? ' 🏠' : ''

  // Prev/next-navigering
  const prevDay = days.find(d => d.day === day.day - 1)
  const nextDay = days.find(d => d.day === day.day + 1)

  const prevLink = prevDay
    ? `<a href="#/dag/${prevDay.day}" class="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 transition-colors">← Dag ${prevDay.day}: ${prevDay.to}</a>`
    : `<a href="#/" class="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 transition-colors">← Kartoversikt</a>`

  const nextLink = nextDay
    ? `<a href="#/dag/${nextDay.day}" class="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 transition-colors">Dag ${nextDay.day}: ${nextDay.to} →</a>`
    : `<a href="#/" class="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 transition-colors">Tilbake til oversikt →</a>`

  // Grupper seksjoner i tre grupper
  const highlights = []  // sights — fullbredde, ren typografi
  const fullWidth = []   // history, photo, practical — fullbredde kort
  const paired = []      // food, accommodation — side om side
  const gems = []

  for (const s of day.sections) {
    if (s.type === 'gem') {
      gems.push(s)
    } else if (s.highlight || s.type === 'sights') {
      highlights.push(s)
    } else if (s.type === 'food' || s.type === 'accommodation') {
      paired.push(s)
    } else {
      fullWidth.push(s)
    }
  }

  const triviaHtml = day.trivia
    ? day.trivia.map(t => renderTrivia(t)).join('')
    : ''

  let sectionsHtml = ''

  // Høydepunkter (sights + eksplisitt highlight)
  if (highlights.length > 0) {
    sectionsHtml += highlights.map(s => renderHighlight(s)).join('')
  }

  // Fullbredde kort (historie, foto, praktisk)
  if (fullWidth.length > 0) {
    sectionsHtml += `<div class="flex flex-col gap-4 mb-6">`
    sectionsHtml += fullWidth.map(s => renderCompact(s)).join('')
    sectionsHtml += `</div>`
  }

  // Mat + overnatting side om side
  if (paired.length > 0) {
    sectionsHtml += `<div class="compact-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">`
    sectionsHtml += paired.map(s => renderCompact(s)).join('')
    sectionsHtml += `</div>`
  }

  // Skjulte perler
  if (gems.length > 0) {
    sectionsHtml += gems.map(s => renderGem(s)).join('')
  }

  const heroImage = day.image
    ? `<div class="hero-image -mx-4 lg:-mx-8 -mt-6 mb-6">
         <div class="relative h-48 md:h-64 overflow-hidden">
           <img src="${day.image.hero}" alt="Dag ${day.day}: ${day.from} til ${day.to}" class="w-full h-full object-cover">
           <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
           <div class="absolute bottom-3 right-3 text-xs text-white/80">
             Foto: <a href="${day.image.creditUrl}" target="_blank" rel="noopener" class="underline hover:text-white">${day.image.credit}</a>
             · <a href="${day.image.photoUrl}" target="_blank" rel="noopener" class="underline hover:text-white">Unsplash</a>
           </div>
         </div>
       </div>`
    : ''

  container.innerHTML = `
    <!-- Navigasjon topp -->
    <div class="flex items-center mb-6 pb-3">
      <div class="flex-1 text-left">${prevLink}</div>
      <button id="day-map-toggle" class="shrink-0 p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors" aria-label="Vis eller skjul kartet">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
      </button>
      <div class="flex-1 text-right">${nextLink}</div>
    </div>

    <!-- Hero-bilde -->
    ${heroImage}

    <!-- Dag-header -->
    <div class="mb-6">
      <div class="flex items-center gap-3 mb-2">
        <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 text-white text-xl font-bold">${day.day}</span>
        <div>
          <p class="text-sm text-stone-400">${day.weekday} ${day.date}${flagEmoji}</p>
          <h2 class="text-2xl font-bold text-stone-900">${day.from} → ${day.to}</h2>
        </div>
      </div>
      <div class="flex items-center gap-4 text-sm text-stone-500 mt-2">
        <span><span aria-hidden="true">🚗</span> ${kmText}</span>
        <span>· ${day.subtitle}</span>
      </div>
      ${day.alert ? (Array.isArray(day.alert) ? day.alert : [day.alert]).map(a => `<div class="day-alert flex items-start gap-2 rounded-lg px-4 py-3 mt-3 text-sm"><span class="shrink-0 text-base" aria-hidden="true">⚠️</span><span>${a}</span></div>`).join('') : ''}
      ${day.intro ? `<p class="text-base text-stone-600 leading-relaxed mt-4 max-w-prose">${day.intro}</p>` : ''}
      ${triviaHtml}
    </div>

    <!-- Seksjoner -->
    ${sectionsHtml}

    <!-- Navigasjon bunn -->
    <div class="flex items-center justify-between mt-10 pt-6">
      <div>${prevLink}</div>
      <div>${nextLink}</div>
    </div>
  `
}

export function destroyDay() {
  const container = document.getElementById('day-content')
  if (container) container.innerHTML = ''
}
