import { contact } from '../data/portfolio.js';
import { createSectionHeading } from './SectionHeading.js';

export function createContactSection() {
  return `
    <section id="contact" data-spy-section class="section-container border-t border-slate-200 reveal-on-scroll" aria-labelledby="contact-title">
      ${createSectionHeading('contact-title', 'Contact', 'Best channels for technical discussions and opportunities.')}
      <div class="mt-8 grid gap-4 md:grid-cols-3">
        <a href="mailto:${contact.email}" class="card transition-colors hover:bg-slate-50">
          <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
          <p class="mt-2 text-sm text-slate-900">${contact.email}</p>
        </a>
        <a href="${contact.github}" target="_blank" rel="noreferrer" class="card transition-colors hover:bg-slate-50">
          <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">GitHub</p>
          <p class="mt-2 text-sm text-slate-900">${contact.github.replace('https://', '')}</p>
        </a>
        <a href="${contact.linkedin}" target="_blank" rel="noreferrer" class="card transition-colors hover:bg-slate-50">
          <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">LinkedIn</p>
          <p class="mt-2 text-sm text-slate-900">${contact.linkedin.replace('https://', '')}</p>
        </a>
      </div>
    </section>
  `;
}
