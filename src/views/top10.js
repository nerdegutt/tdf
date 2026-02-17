import { top10 } from '../data/days.js'

const photoSearchUrls = {
  'Mont Saint-Michel': 'https://www.google.com/search?tbm=isch&q=mont+saint-michel+photography',
  'Gordes/Luberon': 'https://www.google.com/search?tbm=isch&q=gordes+luberon+provence+photography',
  'Pont du Gard': 'https://www.google.com/search?tbm=isch&q=pont+du+gard+photography',
  'Riquewihr': 'https://www.google.com/search?tbm=isch&q=riquewihr+alsace+photography',
  'San Sebastián fra Monte Igueldo': 'https://www.google.com/search?tbm=isch&q=san+sebastian+monte+igueldo+photography',
  'American Cemetery, Omaha Beach': 'https://www.google.com/search?tbm=isch&q=american+cemetery+omaha+beach+photography',
  'Carcassonne': 'https://www.google.com/search?tbm=isch&q=carcassonne+photography',
  'Roussillon': 'https://www.google.com/search?tbm=isch&q=roussillon+provence+photography',
  'Speicherstadt, Hamburg': 'https://www.google.com/search?tbm=isch&q=speicherstadt+hamburg+photography',
  'Rouen by night': 'https://www.google.com/search?tbm=isch&q=rouen+night+photography',
}

function renderList(items, withPhotoLinks = false) {
  return `<ol class="list-decimal list-inside space-y-2">
    ${items.map(item => {
      const photoLink = withPhotoLinks && photoSearchUrls[item]
        ? ` <a href="${photoSearchUrls[item]}" target="_blank" rel="noopener" class="photo-search-link">🔍 Bilder</a>`
        : ''
      return `<li class="text-stone-700">${item}${photoLink}</li>`
    }).join('')}
  </ol>`
}

export function renderTop10() {
  const container = document.getElementById('day-content')
  if (!container) return

  container.innerHTML = `
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-2">
        <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 text-white text-xl" aria-hidden="true">🏆</span>
        <div>
          <p class="text-sm text-stone-400">Personlige favoritter</p>
          <h2 class="text-2xl font-bold text-stone-900">Topp 10</h2>
        </div>
      </div>
      <p class="text-sm text-stone-500 mt-2">Turens beste opplevelser rangert etter kategori.</p>
    </div>

    <!-- Topp 10: Historie -->
    <div class="section-sights border-l-4 rounded-lg shadow-sm mb-4 overflow-hidden">
      <div class="px-5 py-4">
        <h3 class="flex items-center gap-2 text-lg font-semibold mb-3">
          <span aria-hidden="true">🏛️</span>
          <span>For Bjørn Erik – Historie & severdigheter</span>
        </h3>
        <div class="section-content text-stone-700">
          ${renderList(top10.history)}
        </div>
      </div>
    </div>

    <!-- Topp 10: Foto -->
    <div class="section-photo border-l-4 rounded-lg shadow-sm mb-4 overflow-hidden">
      <div class="px-5 py-4">
        <h3 class="flex items-center gap-2 text-lg font-semibold mb-3">
          <span aria-hidden="true">📷</span>
          <span>For Erlend – Fotomuligheter</span>
        </h3>
        <div class="section-content text-stone-700">
          ${renderList(top10.photo, true)}
        </div>
      </div>
    </div>

    <!-- Topp 10: Mat -->
    <div class="section-food border-l-4 rounded-lg shadow-sm mb-4 overflow-hidden">
      <div class="px-5 py-4">
        <h3 class="flex items-center gap-2 text-lg font-semibold mb-3">
          <span aria-hidden="true">🍽️</span>
          <span>For Erlend & Bjørn Erik – Mat & drikke</span>
        </h3>
        <div class="section-content text-stone-700">
          ${renderList(top10.food)}
        </div>
      </div>
    </div>
  `
}

export function destroyTop10() {
  const container = document.getElementById('day-content')
  if (container) container.innerHTML = ''
}
