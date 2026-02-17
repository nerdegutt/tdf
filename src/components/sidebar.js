import { days } from '../data/days.js'

export function populateSidebar(activeDayNum) {
  const container = document.getElementById('sidebar-days')
  if (!container) return

  container.innerHTML = days.map(d => {
    const isActive = d.day === activeDayNum
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
}

export function populateMobileNav(activeDayNum) {
  const select = document.getElementById('day-select')
  if (!select) return

  // Bare populer én gang, oppdater selected etterpå
  if (select.options.length === 0) {
    const overviewOpt = document.createElement('option')
    overviewOpt.value = '#/'
    overviewOpt.textContent = '← Kartoversikt'
    select.appendChild(overviewOpt)

    days.forEach(d => {
      const opt = document.createElement('option')
      opt.value = `#/dag/${d.day}`
      opt.textContent = `Dag ${d.day} – ${d.to}`
      select.appendChild(opt)
    })

    select.addEventListener('change', () => {
      window.location.hash = select.value
    })
  }

  select.value = `#/dag/${activeDayNum}`
}
