import './style.css'
import { days } from './data/days.js'
import { renderOverview, destroyOverview } from './views/overview.js'
import { renderDay, destroyDay } from './views/day.js'
import { renderInfo, destroyInfo } from './views/info.js'
import { renderTop10, destroyTop10 } from './views/top10.js'
import { renderPrint, destroyPrint } from './views/print.js'
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
  // Legacy hash-redirect: #/dag/5 → /dag/5
  if (window.location.hash.startsWith('#/')) {
    const path = window.location.hash.slice(1)
    history.replaceState(null, '', path + window.location.search)
  }

  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/info') return { view: 'info' }
  if (path === '/topp10') return { view: 'top10' }
  if (path === '/print') return { view: 'print' }
  const match = path.match(/^\/dag\/(\d+)(?:\/[a-z0-9-]+)?$/)
  if (match) {
    return { view: 'day', dayNum: parseInt(match[1], 10) }
  }
  return { view: 'overview' }
}

function navigate(path) {
  if (window.location.pathname === path) return
  history.pushState(null, '', path)
  render()
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

function announce(message) {
  const el = document.getElementById('nav-announcement')
  if (el) el.textContent = message
}

const SITE_URL = 'https://tdf.offline.no'
const DEFAULT_IMAGE = (() => {
  const d6 = days.find(d => d.day === 6)
  return d6?.image ? d6.image.hero.replace(/w=\d+&h=\d+/, 'w=1200&h=630') : null
})()

function ogImageFor(day) {
  if (!day?.image) return null
  return day.image.hero.replace(/w=\d+&h=\d+/, 'w=1200&h=630')
}

function setMetaAttr(selector, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute('content', value)
}

function setMeta({ title, description, url, image }) {
  document.title = title
  setMetaAttr('meta[name="description"]', description)
  setMetaAttr('meta[property="og:title"]', title)
  setMetaAttr('meta[property="og:description"]', description)
  setMetaAttr('meta[property="og:url"]', url)
  setMetaAttr('meta[name="twitter:title"]', title)
  setMetaAttr('meta[name="twitter:description"]', description)

  const canonical = document.head.querySelector('link[rel="canonical"]')
  if (canonical) canonical.setAttribute('href', url)

  if (image) {
    let ogImg = document.head.querySelector('meta[property="og:image"]')
    if (!ogImg) {
      ogImg = document.createElement('meta')
      ogImg.setAttribute('property', 'og:image')
      document.head.appendChild(ogImg)
    }
    ogImg.setAttribute('content', image)

    let twImg = document.head.querySelector('meta[name="twitter:image"]')
    if (!twImg) {
      twImg = document.createElement('meta')
      twImg.setAttribute('name', 'twitter:image')
      document.head.appendChild(twImg)
    }
    twImg.setAttribute('content', image)
  }
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
  if (currentView === 'print') destroyPrint()

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
    setMeta({
      title: 'Tour de France 2026 – Reiseguide',
      description: 'Reiseguide for en 18-dagers biltur gjennom Europa: Norge → Tyskland → Belgia → Frankrike → Spania og hjem. 7 land, 6200 km, mai 2026.',
      url: `${SITE_URL}/`,
      image: DEFAULT_IMAGE,
    })
    announce('Kartoversikt')
  } else if (route.view === 'day') {
    const day = days.find(d => d.day === route.dayNum)
    if (!day) {
      navigate('/')
      return
    }
    // Normaliser URL til /dag/N/slug så delte lenker alltid har slug
    const expectedPath = `/dag/${day.day}/${day.slug}`
    if (window.location.pathname !== expectedPath) {
      history.replaceState(null, '', expectedPath)
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
    setMeta({
      title: `Dag ${day.day}: ${day.from} → ${day.to} · Tour de France 2026`,
      description: day.description || `Dag ${day.day} av reisen, ${day.date}: ${day.from} til ${day.to}. ${day.subtitle}.`,
      url: `${SITE_URL}/dag/${day.day}/${day.slug}`,
      image: ogImageFor(day),
    })
    announce(`Dag ${day.day}: ${day.from} til ${day.to}`)
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
    setMeta({
      title: 'Reiseinfo · Tour de France 2026',
      description: 'Komplett ruteoversikt, kjøreinfo for Tesla og booking-oversikt for de viktigste opplevelsene på 18-dagers turen gjennom Europa.',
      url: `${SITE_URL}/info`,
      image: DEFAULT_IMAGE,
    })
    announce('Reiseinfo')
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
    setMeta({
      title: 'Topp 10 · Tour de France 2026',
      description: 'Personlige favoritter rangert i tre kategorier: historie og severdigheter, fotomuligheter, og mat og drikke fra hele turen.',
      url: `${SITE_URL}/topp10`,
      image: DEFAULT_IMAGE,
    })
    announce('Topp 10')
  } else if (route.view === 'print') {
    overviewEl.classList.add('hidden')
    dayEl.classList.add('hidden')
    mobileNav.classList.add('hidden')
    dayMapWrapper.style.display = 'none'

    renderPrint()

    currentView = 'print'
    window.scrollTo(0, 0)
    setMeta({
      title: 'Utskriftsversjon · Tour de France 2026',
      description: 'Utskriftsversjon av hele reiseguiden.',
      url: `${SITE_URL}/print`,
      image: DEFAULT_IMAGE,
    })
    announce('Utskriftsversjon')
  }
}

// Navigasjonsrekkefølge: info → dag 1–18 → topp10
function navigateStep(direction) {
  const route = getRoute()

  const dayPath = (n) => {
    const d = days.find(x => x.day === n)
    return d ? `/dag/${d.day}/${d.slug}` : `/dag/${n}`
  }

  if (route.view === 'info') {
    if (direction === 1) navigate(dayPath(1))
  } else if (route.view === 'day') {
    const target = route.dayNum + direction
    if (target < 1) navigate('/info')
    else if (target > days.length) navigate('/topp10')
    else navigate(dayPath(target))
  } else if (route.view === 'top10') {
    if (direction === -1) navigate(dayPath(days.length))
  }
}

// Piltast-navigasjon
window.addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
  const route = getRoute()
  if (route.view === 'overview') return

  navigateStep(e.key === 'ArrowLeft' ? -1 : 1)
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

// Referanse-tooltip toggle (event delegation)
document.addEventListener('click', (e) => {
  const pill = e.target.closest('.ref-pill')
  if (!pill) {
    // Klikk utenfor — lukk alle åpne tooltips
    document.querySelectorAll('.ref-tooltip:not(.hidden)').forEach(t => {
      t.classList.add('hidden')
    })
    document.querySelectorAll('.ref-pill[aria-expanded="true"]').forEach(p => {
      p.setAttribute('aria-expanded', 'false')
      p.classList.remove('ref-pill-active')
    })
    return
  }

  const id = pill.getAttribute('aria-controls')
  const tooltip = document.getElementById(id)
  if (!tooltip) return

  const wasOpen = !tooltip.classList.contains('hidden')

  // Lukk alle tooltips i samme gruppe
  const group = pill.closest('.ref-group')
  if (group) {
    group.querySelectorAll('.ref-tooltip').forEach(t => t.classList.add('hidden'))
    group.querySelectorAll('.ref-pill').forEach(p => {
      p.setAttribute('aria-expanded', 'false')
      p.classList.remove('ref-pill-active')
    })
  }

  if (!wasOpen) {
    tooltip.classList.remove('hidden')
    pill.setAttribute('aria-expanded', 'true')
    pill.classList.add('ref-pill-active')
  }
})

// Fang alle interne lenker og bruk pushState
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]')
  if (!link) return
  const href = link.getAttribute('href')
  // Kun interne paths (starter med /, ikke // eller mailto: osv.)
  if (!href || !href.startsWith('/') || href.startsWith('//')) return
  // Modifier-keys, target=_blank, midt-klikk osv. skal beholde standard
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  if (link.target === '_blank') return
  if (e.button !== undefined && e.button !== 0) return
  // Last ned-lenker og fil-ressurser skal gå til nettleseren, ikke routeren
  if (link.hasAttribute('download')) return
  if (/\.[a-z0-9]{2,5}$/i.test(href)) return

  e.preventDefault()
  navigate(href)
})

// Initialiser
window.addEventListener('popstate', render)
render()
bindThemeToggle()
