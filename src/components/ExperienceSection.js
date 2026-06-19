import { educationItems, experienceItems } from '../data/portfolio.js';
import { createSectionHeading } from './SectionHeading.js';

export function createExperienceSection() {
  const items = experienceItems
    .map((item) => {
      const highlights = item.highlights.length
        ? `
          <ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}
          </ul>
        `
        : '';

      return `
        <article class="timeline-card">
          <div class="timeline-dot" aria-hidden="true"></div>
          <div>
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p class="caption-label">Training</p>
                <h3 class="mt-2 text-lg font-semibold text-slate-900">${item.role}</h3>
              </div>
              <p class="timeline-period">${item.period}</p>
            </div>
            <p class="mt-2 text-sm leading-6 text-slate-700">${item.organization}</p>
            ${highlights}
          </div>
        </article>
      `;
    })
    .join('');
  const educationCards = educationItems
    .map(
      (item) => `
        <article class="mini-card">
          <p class="caption-label">Education</p>
          <h3 class="mt-2 text-base font-semibold text-slate-900">${item.role}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">${item.organization}</p>
          <p class="mt-4 text-sm font-medium text-slate-800">${item.period}</p>
        </article>
      `
    )
    .join('');

  return `
    <section id="experience" data-spy-section class="section-container border-t border-slate-200 reveal-on-scroll" aria-labelledby="experience-title">
      ${createSectionHeading('experience-title', 'Training & Practical Experience', 'Training, education, and project-based full-stack development practice.')}
      <div class="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
        <div class="timeline-list">
          ${items}
        </div>
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Education</h2>
          <div class="mt-4 grid gap-4">
            ${educationCards}
          </div>
        </div>
      </div>
    </section>
  `;
}
