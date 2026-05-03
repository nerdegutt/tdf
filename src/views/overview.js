import { days } from '../data/days.js'
import { initMap, destroyMap } from '../components/map.js'

export function renderOverview() {
  // Kart
  initMap('map-container')

  // Dag-kort
  const container = document.getElementById('day-cards')
  if (!container) return

  container.innerHTML = days.map(d => {
    const kmText = d.km > 0
      ? `${d.km} km${d.hours ? ` · ~${d.hours} t` : ''}`
      : 'Ingen kjøring'
    const flagEmoji = d.day === 5 ? ' 🇳🇴' : d.day === 18 ? ' 🏠' : ''
    const thumbImg = d.image
      ? `<div class="relative h-36 overflow-hidden">
           <img src="${d.image.thumb}" alt="Dag ${d.day}: ${d.from} til ${d.to}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
           <span class="absolute bottom-1 right-1.5 text-[10px] text-white/70 drop-shadow-sm">${d.image.credit} / Unsplash</span>
         </div>`
      : ''

    return `
      <a href="/dag/${d.day}/${d.slug}" class="block bg-white rounded-xl overflow-hidden group hover:bg-stone-50 transition-colors">
        ${thumbImg}
        <div class="p-4">
          <div class="flex items-center justify-between mb-2">
            <span class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-900 text-white text-sm font-bold">${d.day}</span>
            <span class="text-xs text-stone-400">${d.weekday} ${d.date}${flagEmoji}</span>
          </div>
          <h3 class="font-semibold text-stone-900 mb-1 group-hover:text-blue-800 transition-colors">
            ${d.to}
          </h3>
          <p class="text-sm text-stone-500">${d.from} → ${d.to}</p>
          <div class="flex items-center gap-1.5 mt-3 text-xs text-stone-400">
            <span><span aria-hidden="true">🚗</span> ${kmText}</span>
            <span>· ${d.subtitle}</span>
          </div>
        </div>
      </a>
    `
  }).join('')
}

export function destroyOverview() {
  destroyMap()
}
