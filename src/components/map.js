import L from 'leaflet'
import { days } from '../data/days.js'
import { routes } from '../data/routes.js'

let map = null
let dayMap = null

// --- Oversiktskart ---

export function initMap(containerId) {
  if (map) {
    map.remove()
    map = null
  }

  map = L.map(containerId, {
    scrollWheelZoom: true,
    zoomControl: true,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map)

  // Kjøreruter fra OSRM-data
  for (const day of days) {
    const route = routes[day.day]
    if (!route) continue
    L.polyline(route.points, {
      color: '#1e40af',
      weight: 3,
      opacity: 0.7,
    }).addTo(map)
  }

  // Dag-markører
  days.forEach(d => {
    const icon = L.divIcon({
      className: '',
      html: `<div class="day-marker">${d.day}</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    })

    const marker = L.marker([d.coords.lat, d.coords.lng], { icon })
      .addTo(map)

    marker.bindPopup(`
      <div style="min-width:160px">
        <strong>Dag ${d.day} – ${d.weekday} ${d.date}</strong><br>
        ${d.from} → ${d.to}<br>
        <small>${d.km > 0 ? `Ca. ${d.km} km${d.hours ? ` · ~${d.hours} t` : ''}` : 'Ingen kjøring'} · ${d.subtitle}</small><br>
        <a href="#/dag/${d.day}" style="color:#1e40af;font-weight:600;text-decoration:underline">Se dag ${d.day}: ${d.to} →</a>
      </div>
    `)

    marker.on('click', () => {
      marker.openPopup()
    })

    // Stopp-markører
    if (d.stops && d.stops.length > 0) {
      d.stops.forEach(stop => {
        const stopIcon = L.divIcon({
          className: '',
          html: `<div class="stop-marker">●</div>`,
          iconSize: [22, 22],
          iconAnchor: [11, 11],
        })

        L.marker([stop.lat, stop.lng], { icon: stopIcon })
          .addTo(map)
          .bindPopup(`
            <div>
              <strong>${stop.name}</strong><br>
              <small>Stopp på dag ${d.day}</small><br>
              <a href="#/dag/${d.day}" style="color:#1e40af;text-decoration:underline">Se dag ${d.day}: ${d.to} →</a>
            </div>
          `)
      })
    }
  })

  // Tilpass visning
  const allCoords = days.map(d => [d.coords.lat, d.coords.lng])
  map.fitBounds(L.latLngBounds(allCoords).pad(0.1))

  setTimeout(() => map.invalidateSize(), 100)

  return map
}

export function destroyMap() {
  if (map) {
    map.remove()
    map = null
  }
}

// --- Dagkart ---

export function initDayMap(containerId, day) {
  if (dayMap) {
    dayMap.remove()
    dayMap = null
  }

  dayMap = L.map(containerId, {
    scrollWheelZoom: true,
    zoomControl: true,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(dayMap)

  const allPoints = []
  const prevDay = days.find(d => d.day === day.day - 1)
  const route = routes[day.day]

  if (day.km > 0) {
    if (route) {
      // Bruk lagret kjørerute
      L.polyline(route.points, {
        color: '#1e40af',
        weight: 4,
        opacity: 0.8,
      }).addTo(dayMap)
      // Legg til rutens ytterpunkter for zoom
      allPoints.push(route.points[0], route.points[route.points.length - 1])
    } else if (prevDay) {
      // Fallback til rett linje
      const waypoints = [
        [prevDay.coords.lat, prevDay.coords.lng],
        ...day.stops.map(s => [s.lat, s.lng]),
        [day.coords.lat, day.coords.lng],
      ]
      L.polyline(waypoints, {
        color: '#1e40af',
        weight: 4,
        opacity: 0.8,
        dashArray: '10, 6',
      }).addTo(dayMap)
    }

    if (prevDay) {
      // Startpunkt-markør
      const startIcon = L.divIcon({
        className: '',
        html: `<div class="day-marker" style="background:#64748b;width:28px;height:28px;font-size:11px">${prevDay.day}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      })
      L.marker([prevDay.coords.lat, prevDay.coords.lng], { icon: startIcon })
        .addTo(dayMap)
        .bindPopup(`<strong>${prevDay.to}</strong><br><small>Startpunkt dag ${day.day}</small>`)

      allPoints.push([prevDay.coords.lat, prevDay.coords.lng])
    }
  }

  // Dagens destinasjon
  const destIcon = L.divIcon({
    className: '',
    html: `<div class="day-marker">${day.day}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  })
  L.marker([day.coords.lat, day.coords.lng], { icon: destIcon })
    .addTo(dayMap)
    .bindPopup(`<strong>${day.to}</strong><br><small>Dag ${day.day} – ${day.subtitle}</small>`)
  allPoints.push([day.coords.lat, day.coords.lng])

  // Stopp-markører
  if (day.stops && day.stops.length > 0) {
    day.stops.forEach(stop => {
      const stopIcon = L.divIcon({
        className: '',
        html: `<div class="stop-marker" style="width:26px;height:26px;font-size:11px">●</div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
      })
      L.marker([stop.lat, stop.lng], { icon: stopIcon })
        .addTo(dayMap)
        .bindPopup(`<strong>${stop.name}</strong>`)
      allPoints.push([stop.lat, stop.lng])
    })
  }

  // Tilpass visning
  if (allPoints.length === 1) {
    dayMap.setView(allPoints[0], 13)
  } else {
    dayMap.fitBounds(L.latLngBounds(allPoints).pad(0.15))
  }

  setTimeout(() => dayMap.invalidateSize(), 100)

  return dayMap
}

export function destroyDayMap() {
  if (dayMap) {
    dayMap.remove()
    dayMap = null
  }
}

export function invalidateDayMap() {
  if (dayMap) {
    dayMap.invalidateSize()
  }
}
