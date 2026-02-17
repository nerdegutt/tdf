import './style.css'
import { days } from './data/days.js'
import { renderOverview, destroyOverview } from './views/overview.js'
import { renderDay, destroyDay } from './views/day.js'
import { populateMobileNav, populateSidebar } from './components/sidebar.js'

let currentView = null

function getRoute() {
  const hash = window.location.hash || '#/'
  const match = hash.match(/^#\/dag\/(\d+)$/)
  if (match) {
    return { view: 'day', dayNum: parseInt(match[1], 10) }
  }
  return { view: 'overview' }
}

function render() {
  const route = getRoute()

  // Rydd opp forrige view
  if (currentView === 'overview') destroyOverview()
  if (currentView === 'day') destroyDay()

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
    currentView = 'day'
    window.scrollTo(0, 0)
  }
}

// Initialiser
window.addEventListener('hashchange', render)
render()
