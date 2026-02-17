import { days } from '../data/days.js'

export function populateSidebar(activeRoute) {
  const container = document.getElementById('sidebar-days')
  if (!container) return

  const infoActive = activeRoute.view === 'info'
  const top10Active = activeRoute.view === 'top10'

  const infoClass = infoActive
    ? 'bg-blue-50 text-blue-900 border-blue-600 font-semibold'
    : 'text-stone-600 border-transparent hover:bg-stone-50 hover:text-stone-900'

  const top10Class = top10Active
    ? 'bg-blue-50 text-blue-900 border-blue-600 font-semibold'
    : 'text-stone-600 border-transparent hover:bg-stone-50 hover:text-stone-900'

  const dayItems = days.map(d => {
    const isActive = activeRoute.view === 'day' && d.day === activeRoute.dayNum
    const activeClass = isActive
      ? 'bg-blue-50 text-blue-900 border-blue-600 font-semibold'
      : 'text-stone-600 border-transparent hover:bg-stone-50 hover:text-stone-900'

    return `
      <li>
        <a href="#/dag/${d.day}"
           class="block px-3 py-2 rounded-lg border-l-3 text-sm transition-colors ${activeClass}">
          <span class="font-medium">Dag ${d.day}</span>
          <span class="text-stone-400 mx-1">·</span>
          <span>${d.to}</span>
        </a>
      </li>
    `
  }).join('')

  container.innerHTML = `
    <li>
      <a href="#/info"
         class="block px-3 py-2 rounded-lg border-l-3 text-sm transition-colors ${infoClass}">
        <span>ℹ️</span>
        <span class="ml-1">Reiseinfo</span>
      </a>
    </li>
    <li class="my-2 border-b border-stone-200"></li>
    ${dayItems}
    <li class="my-2 border-b border-stone-200"></li>
    <li>
      <a href="#/topp10"
         class="block px-3 py-2 rounded-lg border-l-3 text-sm transition-colors ${top10Class}">
        <span>🏆</span>
        <span class="ml-1">Topp 10</span>
      </a>
    </li>
  `
}

export function populateMobileNav(activeRoute) {
  const select = document.getElementById('day-select')
  if (!select) return

  // Bare populer én gang, oppdater selected etterpå
  if (select.options.length === 0) {
    const overviewOpt = document.createElement('option')
    overviewOpt.value = '#/'
    overviewOpt.textContent = 'Kartoversikt'
    select.appendChild(overviewOpt)

    const infoOpt = document.createElement('option')
    infoOpt.value = '#/info'
    infoOpt.textContent = 'ℹ️ Reiseinfo'
    select.appendChild(infoOpt)

    days.forEach(d => {
      const opt = document.createElement('option')
      opt.value = `#/dag/${d.day}`
      opt.textContent = `Dag ${d.day} – ${d.to}`
      select.appendChild(opt)
    })

    const top10Opt = document.createElement('option')
    top10Opt.value = '#/topp10'
    top10Opt.textContent = '🏆 Topp 10'
    select.appendChild(top10Opt)

    select.addEventListener('change', () => {
      window.location.hash = select.value
    })
  }

  if (activeRoute.view === 'overview') {
    select.value = '#/'
  } else if (activeRoute.view === 'info') {
    select.value = '#/info'
  } else if (activeRoute.view === 'top10') {
    select.value = '#/topp10'
  } else {
    select.value = `#/dag/${activeRoute.dayNum}`
  }
}
