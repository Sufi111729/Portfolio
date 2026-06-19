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
    .map((project, index) => {
      const links = [
        project.githubUrl
          ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-small btn-secondary" aria-label="Open ${project.name} GitHub repository">GitHub</a>`
          : '',
        project.liveDemoUrl
          ? `<a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-small btn-primary" aria-label="Open ${project.name} live demo">Live Demo</a>`
          : ''
      ].join('');
      const cardClass = index === 0 ? 'project-card project-card-featured reveal-on-scroll' : 'project-card reveal-on-scroll';

      return `
        <article class="${cardClass}">
          <div class="project-card-header">
            <div>
              ${index === 0 ? '<p class="caption-label">Main Project</p>' : '<p class="caption-label">Project</p>'}
              <h3 class="mt-2 text-xl font-semibold tracking-tight text-slate-900">${project.name}</h3>
            </div>
            ${links ? `<div class="project-actions">${links}</div>` : ''}
          </div>
          <div class="project-summary-grid">
            <p><span>Problem</span>${project.problem}</p>
            <p><span>Solution</span>${project.solution}</p>
            <p><span>Outcome</span>${project.outcome}</p>
          </div>
          <section class="mt-6">
            <h4 class="caption-label">Key Features</h4>
            ${createFeatureList(project.features)}
          </section>
          <div class="mt-5 flex flex-wrap gap-2">
            ${project.tech.map((item) => `<span class="chip">${item}</span>`).join('')}
          </div>
        </article>
      `;
    })
    .join('');

  return `
    <section id="projects" data-spy-section class="section-container border-t border-slate-200" aria-labelledby="projects-title">
      ${createSectionHeading(
        'projects-title',
        'Projects',
        'Selected projects with practical problem solving, backend logic, and frontend workflows.'
      )}
      <div class="mt-10 grid gap-5 lg:grid-cols-2">
        ${projectCards}
      </div>
    </section>
  `;
}
