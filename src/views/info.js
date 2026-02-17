import { days, tripMeta, bookingOverview } from '../data/days.js'

export function renderInfo() {
  const container = document.getElementById('day-content')
  if (!container) return

  const routeRows = days.map(d => {
    const flagEmoji = d.day === 5 ? ' 🇳🇴' : d.day === 18 ? ' 🏠' : ''
    const kmText = d.km > 0 ? `${d.km}` : '0'

    return `
      <tr class="border-b border-stone-100 hover:bg-stone-50">
        <td class="py-2 px-3 text-center">
          <a href="#/dag/${d.day}" class="text-blue-700 hover:text-blue-900 font-medium">${d.day}</a>
        </td>
        <td class="py-2 px-3 text-sm">${d.date}${flagEmoji}</td>
        <td class="py-2 px-3 text-sm">${d.from}</td>
        <td class="py-2 px-3 text-sm font-medium">${d.to}</td>
        <td class="py-2 px-3 text-sm text-center">${d.nights || '–'}</td>
        <td class="py-2 px-3 text-sm text-right">${kmText}</td>
      </tr>
    `
  }).join('')

  const bookingRows = bookingOverview.map(b => {
    const link = b.url
      ? `<a href="${b.url}" target="_blank" rel="noopener" class="text-blue-700 hover:text-blue-900 underline">Bestill →</a>`
      : '<span class="text-stone-400 text-xs">Oppmøte</span>'

    return `
      <tr class="border-b border-stone-100 hover:bg-stone-50">
        <td class="py-2 px-3 text-sm font-medium">${b.what}</td>
        <td class="py-2 px-3 text-sm">${b.where}</td>
        <td class="py-2 px-3 text-sm">${b.why}</td>
        <td class="py-2 px-3 text-sm text-center">${link}</td>
      </tr>
    `
  }).join('')

  container.innerHTML = `
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-2">
        <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 text-white text-xl">ℹ️</span>
        <div>
          <p class="text-sm text-stone-400">Reiseguide</p>
          <h2 class="text-2xl font-bold text-stone-900">${tripMeta.title}</h2>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-4 text-sm text-stone-500 mt-3">
        <span>📅 ${tripMeta.dates}</span>
        <span>👥 ${tripMeta.travelers}</span>
        <span>🚗 ca. ${tripMeta.totalKm.toLocaleString('nb-NO')} km</span>
        <span>📍 ${tripMeta.countries} land</span>
        <span>🗓️ ${tripMeta.totalDays} dager</span>
      </div>
    </div>

    <!-- Ruteoversikt -->
    <div class="section-sights border-l-4 rounded-lg shadow-sm mb-4 overflow-hidden">
      <div class="px-5 py-4">
        <h3 class="flex items-center gap-2 text-lg font-semibold mb-3">
          <span>📋</span>
          <span>Ruteoversikt</span>
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b-2 border-stone-200 text-xs uppercase text-stone-400">
                <th class="py-2 px-3 text-center">Dag</th>
                <th class="py-2 px-3">Dato</th>
                <th class="py-2 px-3">Fra</th>
                <th class="py-2 px-3">Til</th>
                <th class="py-2 px-3 text-center">Netter</th>
                <th class="py-2 px-3 text-right">Km</th>
              </tr>
            </thead>
            <tbody>
              ${routeRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Praktisk: Tesla & Kjøring -->
    <div class="section-practical border-l-4 rounded-lg shadow-sm mb-4 overflow-hidden">
      <div class="px-5 py-4">
        <h3 class="flex items-center gap-2 text-lg font-semibold mb-3">
          <span>⚡</span>
          <span>Praktisk: Tesla & kjøring</span>
        </h3>
        <div class="section-content text-stone-700">
          <ul>
            <li>Total: ca. 5 500 km. Daglig lading på lange kjøredager.</li>
            <li><strong>Frankrike:</strong> Supercharger + Ionity. Motorveier har bompenger (ca. 50–80 EUR totalt). <strong>Strenge fartskontroller!</strong></li>
            <li><strong>Spania:</strong> Gratis motorveier i Baskerland.</li>
            <li><strong>Tyskland/Belgia:</strong> Ingen motorveibompenger.</li>
            <li>Planlegg lading via Tesla-appen eller <a href="https://abetterrouteplanner.com/" target="_blank" rel="noopener">A Better Route Planner</a>.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Booking-oversikt -->
    <div class="section-booking border-l-4 rounded-lg shadow-sm mb-4 overflow-hidden">
      <div class="px-5 py-4">
        <h3 class="flex items-center gap-2 text-lg font-semibold mb-3">
          <span>🎟️</span>
          <span>Booking-oversikt</span>
        </h3>
        <div class="booking-callout rounded-lg px-4 py-3 mb-4 flex items-start gap-2">
          <span class="text-lg shrink-0">💡</span>
          <div class="text-sm">
            <strong>Mai-tips:</strong> Dere reiser før den store ferierushen (juni), men Bayeux-tapetet, Mont Saint-Michel og Palais des Papes er populære hele året. Bestill disse!
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b-2 border-stone-200 text-xs uppercase text-stone-400">
                <th class="py-2 px-3">Hva</th>
                <th class="py-2 px-3">Hvor</th>
                <th class="py-2 px-3">Hvorfor</th>
                <th class="py-2 px-3 text-center">Bestill</th>
              </tr>
            </thead>
            <tbody>
              ${bookingRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
}

export function destroyInfo() {
  const container = document.getElementById('day-content')
  if (container) container.innerHTML = ''
}
