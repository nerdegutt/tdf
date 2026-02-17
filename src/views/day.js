import { days } from '../data/days.js'
import { renderSection } from '../components/section.js'

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

  const sectionsHtml = day.sections.map(s => renderSection(s)).join('')

  container.innerHTML = `
    <!-- Mobil tilbake-lenke -->
    <a href="#/" class="lg:hidden inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 mb-4">
      ← Tilbake til kart
    </a>

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
        <span>🚗 ${kmText}</span>
        <span>· ${day.subtitle}</span>
      </div>
    </div>

    <!-- Seksjoner -->
    ${sectionsHtml}

    <!-- Navigasjon bunn -->
    <div class="flex items-center justify-between mt-8 pt-6 border-t border-stone-200">
      <div>${prevLink}</div>
      <div>${nextLink}</div>
    </div>
  `
}

export function destroyDay() {
  const container = document.getElementById('day-content')
  if (container) container.innerHTML = ''
}
