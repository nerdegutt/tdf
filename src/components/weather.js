// Værvarsel fra MET Norway (yr.no) – locationforecast 2.0/compact
// API-en er gratis og uten nøkkel. Resultatet caches i localStorage i 1 time per koordinat.

const CACHE_PREFIX = 'tdf-weather-v1-'
const CACHE_TTL_MS = 60 * 60 * 1000
const FORECAST_HORIZON_DAYS = 10
const TRIP_YEAR = 2026

const MONTHS_NO = {
  jan: 0, feb: 1, mar: 2, apr: 3, mai: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, okt: 9, nov: 10, des: 11,
}

const WEEKDAYS_NO = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
const MONTHS_NAMES_NO = ['januar', 'februar', 'mars', 'april', 'mai', 'juni',
  'juli', 'august', 'september', 'oktober', 'november', 'desember']

const SYMBOL_EMOJI = {
  clearsky_day: '☀️', clearsky_night: '🌙', clearsky_polartwilight: '🌙',
  fair_day: '🌤️', fair_night: '🌙', fair_polartwilight: '🌙',
  partlycloudy_day: '⛅', partlycloudy_night: '☁️', partlycloudy_polartwilight: '☁️',
  cloudy: '☁️',
  fog: '🌫️',
  lightrain: '🌦️', rain: '🌧️', heavyrain: '🌧️',
  lightrainshowers_day: '🌦️', rainshowers_day: '🌦️', heavyrainshowers_day: '🌧️',
  lightrainshowers_night: '🌧️', rainshowers_night: '🌧️', heavyrainshowers_night: '🌧️',
  lightrainandthunder: '⛈️', rainandthunder: '⛈️', heavyrainandthunder: '⛈️',
  rainshowersandthunder_day: '⛈️', rainshowersandthunder_night: '⛈️',
  thunderstorm: '⛈️',
  sleet: '🌨️', lightsleet: '🌨️', heavysleet: '🌨️',
  sleetshowers_day: '🌨️', sleetshowers_night: '🌨️',
  snow: '❄️', lightsnow: '🌨️', heavysnow: '❄️',
  snowshowers_day: '🌨️', snowshowers_night: '🌨️',
}

const SYMBOL_TEXT = {
  clearsky: 'klart', fair: 'lettskyet', partlycloudy: 'delvis skyet', cloudy: 'overskyet',
  fog: 'tåke',
  lightrain: 'lett regn', rain: 'regn', heavyrain: 'kraftig regn',
  lightrainshowers: 'lette regnbyger', rainshowers: 'regnbyger', heavyrainshowers: 'kraftige regnbyger',
  lightrainandthunder: 'lett regn og torden', rainandthunder: 'regn og torden',
  heavyrainandthunder: 'kraftig regn og torden',
  rainshowersandthunder: 'regnbyger og torden',
  thunderstorm: 'tordenvær',
  sleet: 'sludd', lightsleet: 'lett sludd', heavysleet: 'kraftig sludd',
  sleetshowers: 'sluddbyger',
  snow: 'snø', lightsnow: 'lett snø', heavysnow: 'kraftig snø',
  snowshowers: 'snøbyger',
}

function symbolBase(code) {
  if (!code) return null
  return code.replace(/_(day|night|polartwilight)$/, '')
}

function symbolEmoji(code) {
  if (!code) return '🌡️'
  return SYMBOL_EMOJI[code] || SYMBOL_EMOJI[`${symbolBase(code)}_day`] || '🌡️'
}

function symbolText(code) {
  if (!code) return 'Ukjent'
  return SYMBOL_TEXT[symbolBase(code)] || symbolBase(code).replace(/_/g, ' ')
}

function parseDayDate(dateStr, year = TRIP_YEAR) {
  const m = String(dateStr || '').match(/(\d+)\.\s+([a-zæøå]+)/i)
  if (!m) return null
  const day = parseInt(m[1], 10)
  const monthKey = m[2].toLowerCase().slice(0, 3)
  const month = MONTHS_NO[monthKey]
  if (month === undefined) return null
  return new Date(Date.UTC(year, month, day))
}

function isoDate(d) {
  return d.toISOString().slice(0, 10)
}

function fmtDateLabel(d, weekday) {
  const wd = weekday || WEEKDAYS_NO[d.getUTCDay()]
  return `${wd} ${d.getUTCDate()}. ${MONTHS_NAMES_NO[d.getUTCMonth()]}`
}

function readCache(key) {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key)
    if (!raw) return null
    const obj = JSON.parse(raw)
    if (!obj || Date.now() - obj.t > CACHE_TTL_MS) return null
    return obj.data
  } catch {
    return null
  }
}

function writeCache(key, data) {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ t: Date.now(), data }))
  } catch {
    /* localStorage kan være full eller deaktivert – ignorer */
  }
}

const inflight = new Map()

async function fetchForecast(lat, lng) {
  const key = `${lat.toFixed(3)},${lng.toFixed(3)}`
  const cached = readCache(key)
  if (cached) return cached
  if (inflight.has(key)) return inflight.get(key)

  const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat.toFixed(4)}&lon=${lng.toFixed(4)}`
  const promise = fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`MET API ${res.status}`)
      return res.json()
    })
    .then((json) => {
      writeCache(key, json)
      return json
    })
    .finally(() => inflight.delete(key))

  inflight.set(key, promise)
  return promise
}

function extractDayWeather(forecast, targetIsoDate) {
  const ts = forecast?.properties?.timeseries
  if (!Array.isArray(ts) || ts.length === 0) return null

  const entries = ts.filter((t) => typeof t.time === 'string' && t.time.startsWith(targetIsoDate))
  if (entries.length === 0) return null

  let minT = Infinity
  let maxT = -Infinity
  for (const e of entries) {
    const t = e.data?.instant?.details?.air_temperature
    if (typeof t === 'number') {
      if (t < minT) minT = t
      if (t > maxT) maxT = t
    }
  }

  // Entry nærmest kl. 12 UTC for hoved-symbol + vind
  let mid = entries[0]
  let bestDelta = Infinity
  for (const e of entries) {
    const hour = parseInt(e.time.slice(11, 13), 10)
    const delta = Math.abs(hour - 12)
    if (delta < bestDelta) {
      mid = e
      bestDelta = delta
    }
  }

  const symbolCode = mid?.data?.next_6_hours?.summary?.symbol_code
    || mid?.data?.next_1_hours?.summary?.symbol_code
    || mid?.data?.next_12_hours?.summary?.symbol_code

  const wind = mid?.data?.instant?.details?.wind_speed

  // Sum nedbør fra 6-timersblokker som starter denne dagen (00, 06, 12, 18)
  let precip = 0
  let precipKnown = false
  for (const e of entries) {
    const hour = parseInt(e.time.slice(11, 13), 10)
    if (hour % 6 !== 0) continue
    const p = e.data?.next_6_hours?.details?.precipitation_amount
    if (typeof p === 'number') {
      precip += p
      precipKnown = true
    }
  }

  return {
    symbolCode,
    midTemp: mid?.data?.instant?.details?.air_temperature,
    minTemp: Number.isFinite(minT) ? minT : null,
    maxTemp: Number.isFinite(maxT) ? maxT : null,
    wind,
    precip: precipKnown ? precip : null,
  }
}

function fmtPrecip(mm) {
  if (mm == null) return null
  if (mm < 0.1) return '0 mm'
  return `${mm.toFixed(1).replace('.', ',')} mm`
}

function renderForecastHtml(w) {
  const emoji = symbolEmoji(w.symbolCode)
  const text = symbolText(w.symbolCode)
  const temp = w.midTemp != null ? `${Math.round(w.midTemp)}°` : '–'
  const range = (w.minTemp != null && w.maxTemp != null)
    ? `${Math.round(w.minTemp)}–${Math.round(w.maxTemp)}°`
    : ''
  const wind = w.wind != null ? `${w.wind.toFixed(1).replace('.', ',')} m/s` : ''
  const precip = fmtPrecip(w.precip)

  const parts = [
    `<span class="text-xl leading-none" aria-hidden="true">${emoji}</span>`,
    `<span class="font-semibold text-stone-900">${temp}</span>`,
  ]
  if (range) parts.push(`<span class="text-stone-400">${range}</span>`)
  parts.push(`<span class="text-stone-400" aria-hidden="true">·</span>`)
  parts.push(`<span>${text}</span>`)
  if (wind) {
    parts.push(`<span class="text-stone-400" aria-hidden="true">·</span>`)
    parts.push(`<span>vind ${wind}</span>`)
  }
  if (precip) {
    parts.push(`<span class="text-stone-400" aria-hidden="true">·</span>`)
    parts.push(`<span>${precip} nedbør</span>`)
  }
  return parts.join(' ')
}

function renderPlaceholder(label, body, extraClass = '') {
  return `
    <div class="weather-date inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-900/10 text-blue-900 text-xs font-medium">
      <span aria-hidden="true">📅</span>
      <span>Varsel for ${label}</span>
    </div>
    <div class="weather-body flex items-center gap-2 flex-wrap text-stone-600 ${extraClass}">
      ${body}
    </div>
  `
}

export async function mountWeather(containerId, day) {
  const el = document.getElementById(containerId)
  if (!el) return
  if (!day?.coords || typeof day.coords.lat !== 'number' || typeof day.coords.lng !== 'number') {
    el.remove()
    return
  }

  const targetDate = parseDayDate(day.date)
  if (!targetDate) {
    el.remove()
    return
  }

  const label = fmtDateLabel(targetDate, day.weekday)
  const today = new Date()
  const todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  const daysAhead = (targetDate.getTime() - todayUtc) / (1000 * 60 * 60 * 24)

  if (daysAhead < -1) {
    el.remove()
    return
  }

  if (daysAhead > FORECAST_HORIZON_DAYS) {
    const daysUntilForecast = Math.ceil(daysAhead - FORECAST_HORIZON_DAYS)
    el.innerHTML = renderPlaceholder(
      label,
      `<span class="text-base" aria-hidden="true">🌡️</span><span class="text-stone-500">Varsel klart om ca. ${daysUntilForecast} ${daysUntilForecast === 1 ? 'dag' : 'dager'}</span>`,
    )
    return
  }

  try {
    const forecast = await fetchForecast(day.coords.lat, day.coords.lng)
    const w = extractDayWeather(forecast, isoDate(targetDate))
    if (!w) {
      el.innerHTML = renderPlaceholder(
        label,
        `<span class="text-base" aria-hidden="true">🌡️</span><span class="text-stone-500">Ingen data for denne dagen</span>`,
      )
      return
    }
    el.innerHTML = renderPlaceholder(label, renderForecastHtml(w))
    el.setAttribute('data-state', 'ready')

    const credit = document.createElement('div')
    credit.className = 'text-xs text-stone-400 w-full mt-1'
    credit.innerHTML = `Data: <a href="https://www.met.no/" target="_blank" rel="noopener" class="hover:underline">MET Norway</a> / <a href="https://www.yr.no/" target="_blank" rel="noopener" class="hover:underline">yr.no</a>`
    el.appendChild(credit)
  } catch (err) {
    el.innerHTML = renderPlaceholder(
      label,
      `<span class="text-base" aria-hidden="true">🌡️</span><span class="text-stone-500">Kunne ikke hente vær</span>`,
    )
  }
}
