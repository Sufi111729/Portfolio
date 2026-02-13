import { projects } from '../data/portfolio.js';
import { createSectionHeading } from './SectionHeading.js';

function createFeatureList(items) {
  return `
    <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      ${items.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `;
}

export function createProjectsSection() {
  const projectCards = projects
    .map(
      (project) => `
        <article class="card reveal-on-scroll">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <h3 class="text-xl font-semibold tracking-tight text-slate-900">${project.name}</h3>
            <div class="flex items-center gap-3">
              <a href="${project.githubUrl}" class="link-accent text-sm">GitHub</a>
              <a href="${project.liveDemoUrl}" class="link-accent text-sm">Live Demo</a>
            </div>
          </div>
          <div class="mt-5 grid gap-3 rounded-md border border-slate-200 bg-slate-50/60 p-4">
            <p class="text-sm leading-6 text-slate-700"><span class="font-semibold text-slate-900">Problem:</span> ${project.problem}</p>
            <p class="text-sm leading-6 text-slate-700"><span class="font-semibold text-slate-900">Solution:</span> ${project.solution}</p>
            <p class="text-sm leading-6 text-slate-700"><span class="font-semibold text-slate-900">Outcome:</span> ${project.outcome}</p>
          </div>
          <section class="mt-6">
            <h4 class="caption-label">Key Features</h4>
            ${createFeatureList(project.features)}
          </section>
          <div class="mt-5 flex flex-wrap gap-2">
            ${project.tech.map((item) => `<span class="chip">${item}</span>`).join('')}
          </div>
        </article>
      `
    )
    .join('');

  return `
    <section id="projects" data-spy-section class="section-container border-t border-slate-200" aria-labelledby="projects-title">
      ${createSectionHeading(
        'projects-title',
        'Projects',
        'Selected full-stack projects with implementation details and ownership areas.'
      )}
      <div class="mt-8 space-y-6">
        ${projectCards}
      </div>
    </section>
  `;
}
