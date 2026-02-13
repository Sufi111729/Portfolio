import { experienceItems } from '../data/portfolio.js';
import { createSectionHeading } from './SectionHeading.js';

export function createExperienceSection() {
  const items = experienceItems
    .map(
      (item) => `
        <article class="card">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h3 class="text-lg font-semibold text-slate-900">${item.role}</h3>
            <p class="text-sm text-slate-500">${item.period}</p>
          </div>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');

  return `
    <section id="experience" data-spy-section class="section-container border-t border-slate-200 reveal-on-scroll" aria-labelledby="experience-title">
      ${createSectionHeading('experience-title', 'Experience', 'Recent contributions focused on reliability, speed, and maintainability.')}
      <div class="mt-8">
        ${items}
      </div>
    </section>
  `;
}
