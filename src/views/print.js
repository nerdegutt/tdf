import L from 'leaflet'
import { days, tripMeta, bookingOverview, top10 } from '../data/days.js'
import { routes } from '../data/routes.js'
import { renderCompact, renderHighlight, renderTrivia, renderGem } from '../components/section.js'

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

function dayHero(day) {
  if (!day.image) return ''
  const hq = new URLSearchParams(location.search).get('hq') === '1'
  // HQ: 1000x333 q=75 — kompakt: 800x267 q=65
  const w = hq ? 1000 : 800
  const h = hq ? 333 : 267
  const q = hq ? 75 : 65
  const printSrc = day.image.hero
    .replace(/w=\d+/, `w=${w}`)
    .replace(/h=\d+/, `h=${h}`)
    .replace(/q=\d+/, `q=${q}`)
  return `
    <div class="print-hero">
      <img src="${printSrc}" alt="Dag ${day.day}: ${day.from} til ${day.to}" />
      <p class="print-hero-credit">Foto: ${day.image.credit} · Unsplash</p>
    </div>
  `
}

function renderDayContent(day) {
  const kmText = day.km > 0
    ? `Ca. ${day.km} km${day.hours ? ` · ~${day.hours} t kjøring` : ''}`
    : 'Ingen kjøring'
  const flagEmoji = day.day === 5 ? ' 🇳🇴' : ''

  // Grupper seksjoner som i day.js
  const highlights = []
  const fullWidth = []
  const paired = []
  const customs = []
  const gems = []

  for (const s of day.sections) {
    if (s.type === 'gem') gems.push(s)
    else if (s.highlight || s.type === 'sights') highlights.push(s)
    else if (s.type === 'food' || s.type === 'accommodation') paired.push(s)
    else if (s.type === 'customs') customs.push(s)
    else fullWidth.push(s)
  }

  const triviaHtml = day.trivia
    ? day.trivia.map(t => renderTrivia(t)).join('')
    : ''

  let sectionsHtml = ''
  if (highlights.length > 0) sectionsHtml += highlights.map(s => renderHighlight(s)).join('')
  if (fullWidth.length > 0) sectionsHtml += fullWidth.map(s => renderCompact(s)).join('')
  if (paired.length > 0) sectionsHtml += paired.map(s => renderCompact(s)).join('')
  if (customs.length > 0) sectionsHtml += customs.map(s => renderCompact(s)).join('')
  if (gems.length > 0) sectionsHtml += gems.map(s => renderGem(s)).join('')

  return `
    <section class="print-day" data-day="${day.day}">
      ${dayHero(day)}
      <div class="print-day-header">
        <div class="print-day-num">${day.day}</div>
        <div>
          <p class="print-day-meta">${day.weekday} ${day.date}${flagEmoji}</p>
          <h2 class="print-day-title">${day.from} → ${day.to}</h2>
        </div>
      </div>
      <p class="print-day-stats">🚗 ${kmText} · ${day.subtitle}</p>
      ${day.alert ? (Array.isArray(day.alert) ? day.alert : [day.alert]).map(a => `<div class="print-alert">⚠️ ${a}</div>`).join('') : ''}
      ${day.intro ? `<p class="print-intro">${day.intro}</p>` : ''}
      ${triviaHtml}

      <div class="print-day-map" id="print-map-day-${day.day}" role="img" aria-label="Kart for dag ${day.day}"></div>

      ${sectionsHtml}
    </section>
  `
}

function renderInfoSection() {
  const routeRows = days.map(d => {
    const flagEmoji = d.day === 5 ? ' 🇳🇴' : d.day === 18 ? ' 🏠' : ''
    const kmText = d.km > 0 ? `${d.km}` : '0'
    const hoursText = d.hours ? `~${d.hours} t` : '–'
    return `
      <tr>
        <td class="text-center">${d.day}</td>
        <td>${d.date}${flagEmoji}</td>
        <td>${d.from}</td>
        <td><strong>${d.to}</strong></td>
        <td class="text-center">${d.nights || '–'}</td>
        <td class="text-right">${kmText}</td>
        <td class="text-right">${hoursText}</td>
      </tr>
    `
  }).join('')

  const bookingRows = bookingOverview.map(b => `
    <tr>
      <td><strong>${b.what}</strong></td>
      <td>${b.where}</td>
      <td>${b.why}</td>
    </tr>
  `).join('')

  return `
    <section class="print-info">
      <div class="print-section-header">
        <h2>ℹ️ Reiseinfo</h2>
        <p class="print-trip-meta">📅 ${tripMeta.dates} · 👥 ${tripMeta.travelers} · 🚗 ca. ${tripMeta.totalKm.toLocaleString('nb-NO')} km · 📍 ${tripMeta.countries} land · 🗓️ ${tripMeta.totalDays} dager</p>
      </div>

      <h3>📋 Ruteoversikt</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Dag</th>
            <th>Dato</th>
            <th>Fra</th>
            <th>Til</th>
            <th>Netter</th>
            <th class="text-right">Km</th>
            <th class="text-right">Tid</th>
          </tr>
        </thead>
        <tbody>${routeRows}</tbody>
      </table>

      <h3>⚡ Praktisk: Tesla & kjøring</h3>
      <ul>
        <li>Total: ca. ${tripMeta.totalKm.toLocaleString('nb-NO')} km. Daglig lading på lange kjøredager.</li>
        <li><strong>Frankrike:</strong> Supercharger + Ionity. Motorveier har bompenger (ca. 50–80 EUR totalt). Strenge fartskontroller.</li>
        <li><strong>Spania:</strong> Gratis motorveier i Baskerland.</li>
        <li><strong>Tyskland/Belgia:</strong> Ingen motorveibompenger.</li>
        <li>Planlegg lading via Tesla-appen eller A Better Route Planner.</li>
      </ul>

      <h3>🎟️ Booking-oversikt</h3>
      <table class="print-table">
        <thead>
          <tr>
            <th>Hva</th>
            <th>Hvor</th>
            <th>Hvorfor</th>
          </tr>
        </thead>
        <tbody>${bookingRows}</tbody>
      </table>
    </section>
  `
}

function renderTop10Section() {
  const list = (items, withPhotoLinks = false) => `<ol>${items.map(item => {
    const link = withPhotoLinks && photoSearchUrls[item]
      ? ` <span class="print-photo-link">(google: ${item})</span>`
      : ''
    return `<li>${item}${link}</li>`
  }).join('')}</ol>`

  return `
    <section class="print-top10">
      <div class="print-section-header">
        <h2>🏆 Topp 10 — personlige favoritter</h2>
      </div>
      <h3>🏛️ For Bjørn Erik — Historie & severdigheter</h3>
      ${list(top10.history)}
      <h3>📷 For Erlend — Fotomuligheter</h3>
      ${list(top10.photo, true)}
      <h3>🍽️ For Erlend & Bjørn Erik — Mat & drikke</h3>
      ${list(top10.food)}
    </section>
  `
}

function renderCover() {
  return `
    <section class="print-cover">
      <h1>Tour de France 2026</h1>
      <p class="print-subtitle">En reiseguide for 18 dager gjennom Europa</p>
      <p class="print-cover-meta">${tripMeta.dates}<br>${tripMeta.travelers}</p>
      <div class="print-overview-map" id="print-overview-map" role="img" aria-label="Oversiktskart over hele ruten"></div>
      <p class="print-stats">${tripMeta.totalKm.toLocaleString('nb-NO')} km · ${tripMeta.countries} land · ${tripMeta.totalDays} dager</p>
      <p class="print-route-text">Rakkestad → Tyskland → Belgia → Normandie → Bretagne → Atlanterhavskysten → Baskerland → Languedoc → Provence → Burgund → Alsace → Mosel → Hjem</p>
    </section>
  `
}

// Render alle kart og vent på at tiles er lastet
async function renderAllMaps() {
  const mapInstances = []

  // Oversiktskart
  const overviewEl = document.getElementById('print-overview-map')
  if (overviewEl) {
    const overviewMap = L.map(overviewEl, {
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: false,
      fadeAnimation: false,
      zoomAnimation: false,
    })
    const overviewTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(overviewMap)

    for (const day of days) {
      const route = routes[day.day]
      if (!route) continue
      L.polyline(route.points, { color: '#1e40af', weight: 2, opacity: 0.7 }).addTo(overviewMap)
    }
    days.forEach(d => {
      const icon = L.divIcon({
        className: '',
        html: `<div class="day-marker">${d.day}</div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      })
      L.marker([d.coords.lat, d.coords.lng], { icon }).addTo(overviewMap)
    })

    const allCoords = days.map(d => [d.coords.lat, d.coords.lng])
    overviewMap.fitBounds(L.latLngBounds(allCoords).pad(0.05))
    mapInstances.push({ map: overviewMap, tiles: overviewTiles })
  }

  // Dagskart
  for (const day of days) {
    const el = document.getElementById(`print-map-day-${day.day}`)
    if (!el) continue

    const dayMap = L.map(el, {
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: false,
      fadeAnimation: false,
      zoomAnimation: false,
    })
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(dayMap)

    const allPoints = []
    const prevDay = days.find(d => d.day === day.day - 1)
    const route = routes[day.day]

    if (day.km > 0) {
      if (route) {
        L.polyline(route.points, { color: '#1e40af', weight: 3, opacity: 0.8 }).addTo(dayMap)
        allPoints.push(route.points[0], route.points[route.points.length - 1])
      } else if (prevDay) {
        const waypoints = [
          [prevDay.coords.lat, prevDay.coords.lng],
          ...day.stops.map(s => [s.lat, s.lng]),
          [day.coords.lat, day.coords.lng],
        ]
        L.polyline(waypoints, { color: '#1e40af', weight: 3, opacity: 0.8, dashArray: '8, 4' }).addTo(dayMap)
      }

      if (prevDay) {
        const startIcon = L.divIcon({
          className: '',
          html: `<div class="day-marker" style="background:#64748b;width:22px;height:22px;font-size:10px">${prevDay.day}</div>`,
          iconSize: [22, 22],
          iconAnchor: [11, 11],
        })
        L.marker([prevDay.coords.lat, prevDay.coords.lng], { icon: startIcon }).addTo(dayMap)
        allPoints.push([prevDay.coords.lat, prevDay.coords.lng])
      }
    }

    const destIcon = L.divIcon({
      className: '',
      html: `<div class="day-marker">${day.day}</div>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
    })
    L.marker([day.coords.lat, day.coords.lng], { icon: destIcon }).addTo(dayMap)
    allPoints.push([day.coords.lat, day.coords.lng])

    if (day.stops && day.stops.length > 0) {
      day.stops.forEach(stop => {
        const stopIcon = L.divIcon({
          className: '',
          html: `<div class="stop-marker">●</div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9],
        })
        L.marker([stop.lat, stop.lng], { icon: stopIcon }).addTo(dayMap)
        allPoints.push([stop.lat, stop.lng])
      })
    }

    if (allPoints.length === 1) {
      dayMap.setView(allPoints[0], 11)
    } else {
      dayMap.fitBounds(L.latLngBounds(allPoints).pad(0.15))
    }
    mapInstances.push({ map: dayMap, tiles })
  }

  // Vent på at alle kart har ferdig-lastede tiles
  await Promise.all(mapInstances.map(({ map, tiles }) => {
    return new Promise(resolve => {
      // Sjekk om allerede ferdig
      let pending = 0
      let loaded = false
      const check = () => {
        if (pending === 0 && loaded) {
          resolve()
        }
      }
      tiles.on('tileloadstart', () => { pending++ })
      tiles.on('tileload', () => { pending--; check() })
      tiles.on('tileerror', () => { pending--; check() })
      tiles.on('load', () => { loaded = true; check() })
      // Fallback i tilfelle ingen tiles trengs
      setTimeout(() => { loaded = true; check() }, 100)
      // Hard fallback etter 30 sekunder
      setTimeout(() => resolve(), 30000)
    })
  }))

  // Vent på at alle img-tags er lastet
  const images = Array.from(document.querySelectorAll('img'))
  await Promise.all(images.map(img => {
    if (img.complete) return Promise.resolve()
    return new Promise(resolve => {
      img.addEventListener('load', resolve)
      img.addEventListener('error', resolve)
      setTimeout(resolve, 15000)
    })
  }))
}

export async function renderPrint() {
  // Tving lyst tema for utskrift
  document.documentElement.classList.remove('dark')
  document.documentElement.classList.add('print-mode')

  const main = document.getElementById('app')
  if (!main) return

  // Skjul eksisterende views
  const existing = main.querySelectorAll('#view-overview, #view-day')
  existing.forEach(el => el.classList.add('hidden'))

  // Opprett print-container hvis den ikke finnes
  let container = document.getElementById('view-print')
  if (!container) {
    container = document.createElement('div')
    container.id = 'view-print'
    main.appendChild(container)
  }
  container.classList.remove('hidden')

  // Skjul header/footer/mobile-nav for print
  document.querySelectorAll('header, footer, #mobile-nav, #day-map-wrapper').forEach(el => {
    el.classList.add('print-hide')
  })

  container.innerHTML = `
    ${renderCover()}
    ${renderInfoSection()}
    ${days.map(d => renderDayContent(d)).join('')}
    ${renderTop10Section()}
  `

  await renderAllMaps()

  // Signal til Puppeteer at vi er klare
  window.__printReady = true
  document.body.setAttribute('data-print-ready', 'true')
}

export function destroyPrint() {
  document.documentElement.classList.remove('print-mode')
  document.querySelectorAll('.print-hide').forEach(el => el.classList.remove('print-hide'))
  const container = document.getElementById('view-print')
  if (container) container.remove()
}
