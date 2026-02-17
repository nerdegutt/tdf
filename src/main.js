import './style.css'
import { days } from './data/days.js'
import { renderOverview, destroyOverview } from './views/overview.js'
import { renderDay, destroyDay } from './views/day.js'
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

  const overviewEl = document.getElementById('view-overview')
  const dayEl = document.getElementById('view-day')
  const mobileNav = document.getElementById('mobile-nav')

  if (route.view === 'overview') {
    overviewEl.classList.remove('hidden')
    dayEl.classList.add('hidden')
    mobileNav.classList.add('hidden')
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

    populateSidebar(route.dayNum)
    populateMobileNav(route.dayNum)
    renderDay(day)
    bindMapToggle()

    // Dagkart — init alltid, wrapperen styrer synlighet
    initDayMap('day-map-container', day)
    updateDayMapUI(getDayMapVisible())

    currentView = 'day'
    window.scrollTo(0, 0)
  }
}

// Piltast-navigasjon mellom dager
window.addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
  const route = getRoute()
  if (route.view !== 'day') return

  const targetDay = e.key === 'ArrowLeft' ? route.dayNum - 1 : route.dayNum + 1
  if (targetDay >= 1 && targetDay <= days.length) {
    window.location.hash = `#/dag/${targetDay}`
  }
})

// Initialiser
window.addEventListener('hashchange', render)
render()
bindThemeToggle()
