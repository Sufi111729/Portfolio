import { highlights } from '../data/portfolio.js';

export function createHighlightsSection() {
  const cards = highlights
    .map(
      (item) => `
        <article class="card reveal-on-scroll p-5 md:p-6">
          <p class="caption-label">${item.label}</p>
          <p class="mt-2 text-2xl font-semibold tracking-tight text-slate-900">${item.value}</p>
        </article>
      `
    )
    .join('');

  return `
    <section class="section-container pt-0 pb-14 md:pb-16" aria-label="Highlights">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        ${cards}
      </div>
    </section>
  `;
}
