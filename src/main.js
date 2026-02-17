import './style.css'
import { days } from './data/days.js'
import { renderOverview, destroyOverview } from './views/overview.js'
import { renderDay, destroyDay } from './views/day.js'
import { renderInfo, destroyInfo } from './views/info.js'
import { renderTop10, destroyTop10 } from './views/top10.js'
import { populateMobileNav, populateSidebar } from './components/sidebar.js'
import { initDayMap, destroyDayMap, invalidateDayMap } from './components/map.js'

let currentView = null

// ---- Tema-håndtering ----
function getTheme() {
  return localStorage.getItem('tdf-theme') || 'dark'
}

function setTheme(theme) {
  localStorage.setItem('tdf-theme', theme)
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function bindThemeToggle() {
  const toggle = document.getElementById('theme-toggle')
  if (!toggle) return

  toggle.checked = getTheme() === 'dark'

  toggle.addEventListener('change', () => {
    setTheme(toggle.checked ? 'dark' : 'light')
  })
}

function getRoute() {
  const hash = window.location.hash || '#/'
  if (hash === '#/info') return { view: 'info' }
  if (hash === '#/topp10') return { view: 'top10' }
  const match = hash.match(/^#\/dag\/(\d+)$/)
  if (match) {
    return { view: 'day', dayNum: parseInt(match[1], 10) }
  }
  return { view: 'overview' }
}

function getDayMapVisible() {
  const stored = localStorage.getItem('tdf-day-map-visible')
  return stored === null ? true : stored === 'true'
}

function setDayMapVisible(visible) {
  localStorage.setItem('tdf-day-map-visible', String(visible))
}

function updateDayMapUI(visible) {
  const wrapper = document.getElementById('day-map-wrapper')
  const toggleBtn = document.getElementById('day-map-toggle')
  if (!wrapper) return

  if (visible) {
    wrapper.classList.remove('map-hidden')
    wrapper.classList.add('map-visible')
    setTimeout(() => invalidateDayMap(), 310)
  } else {
    wrapper.classList.remove('map-visible')
    wrapper.classList.add('map-hidden')
  }
}

function bindMapToggle() {
  const toggleBtn = document.getElementById('day-map-toggle')
  if (!toggleBtn) return

  toggleBtn.addEventListener('click', () => {
    const visible = !getDayMapVisible()
    setDayMapVisible(visible)
    updateDayMapUI(visible)
  })

  // Sett initial opacity
  updateDayMapUI(getDayMapVisible())
}

function render() {
  const route = getRoute()

  // Rydd opp forrige view
  if (currentView === 'overview') destroyOverview()
  if (currentView === 'day') {
    destroyDay()
    destroyDayMap()
  }
  if (currentView === 'info') destroyInfo()
  if (currentView === 'top10') destroyTop10()

  const overviewEl = document.getElementById('view-overview')
  const dayEl = document.getElementById('view-day')
  const mobileNav = document.getElementById('mobile-nav')
  const dayMapWrapper = document.getElementById('day-map-wrapper')

  if (route.view === 'overview') {
    overviewEl.classList.remove('hidden')
    dayEl.classList.add('hidden')
    mobileNav.classList.remove('hidden')
    populateMobileNav(route)
    renderOverview()
    currentView = 'overview'
  } else if (route.view === 'day') {
    const day = days.find(d => d.day === route.dayNum)
    if (!day) {
      window.location.hash = '#/'
      return
    }
    overviewEl.classList.add('hidden')
    dayEl.classList.remove('hidden')
    mobileNav.classList.remove('hidden')
    dayMapWrapper.style.display = ''
    dayMapWrapper.classList.remove('map-hidden')
    dayMapWrapper.classList.add('map-visible')

    populateSidebar(route)
    populateMobileNav(route)
    renderDay(day)
    bindMapToggle()

    // Dagkart — init alltid, wrapperen styrer synlighet
    initDayMap('day-map-container', day)
    updateDayMapUI(getDayMapVisible())

    currentView = 'day'
    window.scrollTo(0, 0)
  } else if (route.view === 'info') {
    overviewEl.classList.add('hidden')
    dayEl.classList.remove('hidden')
    mobileNav.classList.remove('hidden')
    dayMapWrapper.style.display = 'none'

    populateSidebar(route)
    populateMobileNav(route)
    renderInfo()

    currentView = 'info'
    window.scrollTo(0, 0)
  } else if (route.view === 'top10') {
    overviewEl.classList.add('hidden')
    dayEl.classList.remove('hidden')
    mobileNav.classList.remove('hidden')
    dayMapWrapper.style.display = 'none'

    populateSidebar(route)
    populateMobileNav(route)
    renderTop10()

    currentView = 'top10'
    window.scrollTo(0, 0)
  }
}

// Navigasjonsrekkefølge: info → dag 1–18 → topp10
function navigateStep(direction) {
  const route = getRoute()

  if (route.view === 'info') {
    if (direction === 1) window.location.hash = '#/dag/1'
  } else if (route.view === 'day') {
    const target = route.dayNum + direction
    if (target < 1) window.location.hash = '#/info'
    else if (target > days.length) window.location.hash = '#/topp10'
    else window.location.hash = `#/dag/${target}`
  } else if (route.view === 'top10') {
    if (direction === -1) window.location.hash = `#/dag/${days.length}`
  }
}

// Piltast-navigasjon
window.addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
  const route = getRoute()
  if (route.view === 'overview') return

  navigateStep(e.key === 'ArrowLeft' ? -1 : 1)
})

// Sveip-navigasjon mellom dager (mobil)
let touchStartX = 0
let touchStartY = 0

window.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX
  touchStartY = e.changedTouches[0].screenY
}, { passive: true })

window.addEventListener('touchend', (e) => {
  const route = getRoute()
  if (route.view === 'overview') return

  const dx = e.changedTouches[0].screenX - touchStartX
  const dy = e.changedTouches[0].screenY - touchStartY

  // Kun horisontal sveip (minst 80px, og mer horisontalt enn vertikalt)
  if (Math.abs(dx) < 80 || Math.abs(dx) < Math.abs(dy) * 1.5) return

  navigateStep(dx > 0 ? -1 : 1)
}, { passive: true })

// Initialiser
window.addEventListener('hashchange', render)
render()
bindThemeToggle()
