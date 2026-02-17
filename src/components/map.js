import L from 'leaflet'
import { days } from '../data/days.js'

let map = null

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

  // Rutepolyline
  const routeCoords = days.map(d => [d.coords.lat, d.coords.lng])
  L.polyline(routeCoords, {
    color: '#1e40af',
    weight: 3,
    opacity: 0.7,
    dashArray: '8, 8',
  }).addTo(map)

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
        <small>${d.km > 0 ? `Ca. ${d.km} km` : 'Ingen kjøring'} · ${d.subtitle}</small><br>
        <a href="#/dag/${d.day}" style="color:#1e40af;font-weight:600;text-decoration:underline">Se detaljer →</a>
      </div>
    `)

    marker.on('click', () => {
      marker.openPopup()
    })

    // Stopp-markører for denne dagen
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
              <a href="#/dag/${d.day}" style="color:#1e40af;text-decoration:underline">Se detaljer →</a>
            </div>
          `)
      })
    }
  })

  // Tilpass visning til alle markører
  const allCoords = days.map(d => [d.coords.lat, d.coords.lng])
  map.fitBounds(L.latLngBounds(allCoords).pad(0.1))

  // Leaflet trenger resize-trigger etter DOM-endring
  setTimeout(() => map.invalidateSize(), 100)

  return map
}

export function destroyMap() {
  if (map) {
    map.remove()
    map = null
  }
}
