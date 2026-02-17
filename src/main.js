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
    applySlideIn()
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
    applySlideIn()
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
    applySlideIn()
  }
}

// Navigasjonsrekkefølge: info → dag 1–18 → topp10, med slide-animasjon
let navDirection = null
let isAnimating = false

function getTargetHash(direction) {
  const route = getRoute()
  if (route.view === 'info' && direction === 1) return '#/dag/1'
  if (route.view === 'top10' && direction === -1) return `#/dag/${days.length}`
  if (route.view === 'day') {
    const target = route.dayNum + direction
    if (target < 1) return '#/info'
    if (target > days.length) return '#/topp10'
    return `#/dag/${target}`
  }
  return null
}

function navigateStep(direction) {
  if (isAnimating) return
  const targetHash = getTargetHash(direction)
  if (!targetHash) return

  const content = document.getElementById('day-content')
  if (!content) {
    window.location.hash = targetHash
    return
  }

  isAnimating = true
  navDirection = direction
  const cls = direction === 1 ? 'nav-out-left' : 'nav-out-right'
  content.classList.add(cls)
  content.addEventListener('animationend', () => {
    content.classList.remove(cls)
    window.location.hash = targetHash
  }, { once: true })
}

function applySlideIn() {
  if (!navDirection) return
  const content = document.getElementById('day-content')
  if (!content) { navDirection = null; isAnimating = false; return }
  const cls = navDirection === 1 ? 'nav-in-right' : 'nav-in-left'
  content.classList.add(cls)
  content.addEventListener('animationend', () => {
    content.classList.remove(cls)
    isAnimating = false
  }, { once: true })
  navDirection = null
}

// Piltast-navigasjon
window.addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
  const route = getRoute()
  if (route.view === 'overview') return

  const targetHash = getTargetHash(e.key === 'ArrowLeft' ? -1 : 1)
  if (targetHash) window.location.hash = targetHash
})

// Sveip-navigasjon (mobil) — smart håndtering av horisontalt scrollbare elementer
let touchStartX = 0
let touchStartY = 0
let touchScroller = null

function findHorizontalScroller(el) {
  while (el && el !== document.body) {
    if (el.scrollWidth > el.clientWidth) return el
    el = el.parentElement
  }
  return null
}

window.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX
  touchStartY = e.changedTouches[0].screenY
  touchScroller = findHorizontalScroller(e.target)
}, { passive: true })

window.addEventListener('touchend', (e) => {
  const route = getRoute()
  if (route.view === 'overview') return

  const dx = e.changedTouches[0].screenX - touchStartX
  const dy = e.changedTouches[0].screenY - touchStartY

  // Kun horisontal sveip (minst 80px, og mer horisontalt enn vertikalt)
  if (Math.abs(dx) < 80 || Math.abs(dx) < Math.abs(dy) * 1.5) return

  // Inne i horisontal scroller: kun navigér hvis scrollet til kanten i sveiperetningen
  if (touchScroller) {
    const atLeft = touchScroller.scrollLeft <= 0
    const atRight = touchScroller.scrollLeft + touchScroller.clientWidth >= touchScroller.scrollWidth - 1
    const swipingRight = dx > 0  // sveiper høyre → navigér bakover
    const swipingLeft = dx < 0   // sveiper venstre → navigér fremover
    if (swipingRight && !atLeft) return
    if (swipingLeft && !atRight) return
  }

  navigateStep(dx > 0 ? -1 : 1)
}, { passive: true })

// Initialiser
window.addEventListener('hashchange', render)
render()
bindThemeToggle()
