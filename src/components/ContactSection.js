import { contact } from '../data/portfolio.js';
import { createSectionHeading } from './SectionHeading.js';

export function createContactSection() {
  return `
    <section id="contact" data-spy-section class="section-container border-t border-slate-200 reveal-on-scroll" aria-labelledby="contact-title">
      ${createSectionHeading('contact-title', 'Contact', 'Best channels for job opportunities, technical discussions, and project collaboration.')}
      <div class="contact-panel mt-10">
        <div>
          <p class="caption-label">Let's Connect</p>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Open to fresher Java Full Stack Developer opportunities.</h3>
          <p class="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Reach out for job opportunities, technical discussions, and practical full-stack project collaboration.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="mailto:${contact.email}" class="btn btn-primary" aria-label="Email Muhammad Sufiyan">Email Me</a>
            <button type="button" class="btn btn-secondary" data-copy-email="${contact.email}" aria-label="Copy Muhammad Sufiyan email address">Copy Email</button>
          </div>
          <p class="copy-feedback mt-3 text-sm text-slate-600" data-copy-feedback aria-live="polite"></p>
        </div>
        <div class="grid gap-4">
          <a href="mailto:${contact.email}" class="contact-card" aria-label="Email Muhammad Sufiyan">
            <p class="caption-label">Email</p>
            <p class="mt-2 text-sm font-medium text-slate-900 break-all">${contact.email}</p>
          </a>
          <a href="${contact.github}" target="_blank" rel="noopener noreferrer" class="contact-card" aria-label="Open Muhammad Sufiyan GitHub profile">
            <p class="caption-label">GitHub</p>
            <p class="mt-2 text-sm font-medium text-slate-900 break-all">${contact.github.replace('https://', '')}</p>
          </a>
          <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-card" aria-label="Open Muhammad Sufiyan LinkedIn profile">
            <p class="caption-label">LinkedIn</p>
            <p class="mt-2 text-sm font-medium text-slate-900 break-all">${contact.linkedin.replace('https://', '')}</p>
          </a>
        </div>
      </div>
    </section>
  `;
}
