import { aboutSummary } from '../data/portfolio.js';
import { createSectionHeading } from './SectionHeading.js';

export function createAboutSection() {
  const items = aboutSummary
    .map((line) => `<li class="text-slate-700 leading-7">${line}</li>`)
    .join('');

  return `
    <section id="about" data-spy-section class="section-container border-t border-slate-200 reveal-on-scroll" aria-labelledby="about-title">
      ${createSectionHeading(
        'about-title',
        'About',
        'I focus on building maintainable systems with clear architecture and practical performance improvements.'
      )}
      <ul class="mt-8 max-w-3xl space-y-4">
        ${items}
      </ul>
    </section>
  `;
}
