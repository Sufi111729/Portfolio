import { aboutHighlights, aboutSummary } from '../data/portfolio.js';
import { createSectionHeading } from './SectionHeading.js';

export function createAboutSection() {
  const summaryItems = aboutSummary
    .map((line) => `<p class="text-slate-700 leading-7">${line}</p>`)
    .join('');
  const highlightCards = aboutHighlights
    .map(
      (item) => `
        <article class="mini-card">
          <h3 class="text-base font-semibold text-slate-900">${item.title}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">${item.text}</p>
        </article>
      `
    )
    .join('');

  return `
    <section id="about" data-spy-section class="section-container border-t border-slate-200 reveal-on-scroll" aria-labelledby="about-title">
      ${createSectionHeading(
        'about-title',
        'About',
        'Java Full Stack Developer focused on practical, maintainable web applications.'
      )}
      <div class="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
        <div class="card section-copy">
          ${summaryItems}
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          ${highlightCards}
        </div>
      </div>
    </section>
  `;
}
