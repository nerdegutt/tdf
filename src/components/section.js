const SECTION_CONFIG = {
  sights: { icon: '🏛️', label: 'Severdigheter', color: 'blue' },
  history: { icon: '🧠', label: 'Historisk trivia', color: 'purple' },
  photo: { icon: '📷', label: 'Fotomuligheter', color: 'green' },
  accommodation: { icon: '🏨', label: 'Overnatting', color: 'amber' },
  food: { icon: '🍽️', label: 'Mat & drikke', color: 'red' },
  practical: { icon: '💡', label: 'Praktisk', color: 'slate' },
}

export function renderSection(section) {
  const config = SECTION_CONFIG[section.type] || SECTION_CONFIG.practical

  const bookingHtml = section.bookingWarning
    ? `<div class="booking-callout rounded-lg px-4 py-3 mb-4 flex items-start gap-2">
        <span class="text-lg shrink-0">🎟️</span>
        <div class="text-sm">
          <strong>Book på forhånd:</strong> ${section.bookingWarning}
          ${section.bookingUrl ? ` <a href="${section.bookingUrl}" target="_blank" rel="noopener" class="text-cyan-700 underline">Bestill her →</a>` : ''}
        </div>
      </div>`
    : ''

  return `
    <div class="section-${section.type} border-l-4 rounded-lg shadow-sm mb-4 overflow-hidden">
      <div class="px-5 py-4">
        <h3 class="flex items-center gap-2 text-lg font-semibold mb-3">
          <span>${config.icon}</span>
          <span>${section.title}</span>
        </h3>
        ${bookingHtml}
        <div class="section-content text-stone-700">
          ${section.content}
        </div>
      </div>
    </div>
  `
}
