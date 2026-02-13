export function createSectionHeading(titleId, title, subtitle) {
  return `
    <header>
      <p class="caption-label">Section</p>
      <h2 id="${titleId}" class="section-title mt-2">${title}</h2>
      ${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}
    </header>
  `;
}
