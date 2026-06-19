import { stackGroups } from '../data/portfolio.js';
import { createSectionHeading } from './SectionHeading.js';

export function createTechStackSection() {
  const groups = stackGroups
    .map(
      (group) => `
        <article class="card">
          <div class="card-kicker">Skill Group</div>
          <h3 class="mt-2 text-base font-semibold text-slate-900">${group.title}</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            ${group.items.map((item) => `<span class="chip">${item}</span>`).join('')}
          </div>
        </article>
      `
    )
    .join('');

  return `
    <section id="tech-stack" data-spy-section class="section-container border-t border-slate-200 reveal-on-scroll" aria-labelledby="tech-stack-title">
      ${createSectionHeading('tech-stack-title', 'Tech Stack', 'Technologies and concepts practiced through training and hands-on projects.')}
      <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        ${groups}
      </div>
    </section>
  `;
}
