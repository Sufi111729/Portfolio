import { heroProfile, highlights } from '../data/portfolio.js';

export function createHeroSection() {
  const chips = heroProfile.skillChips.map((chip) => `<span class="chip">${chip}</span>`).join('');
  const infoRows = heroProfile.quickInfo
    .map(
      (item) => `
        <div class="grid grid-cols-[88px_1fr] items-start gap-3 border-b border-slate-200 py-2.5 last:border-0 last:pb-0">
          <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">${item.label}</span>
          <span class="min-w-0 text-right text-sm leading-6 text-slate-800 break-all">${item.value}</span>
        </div>
      `
    )
    .join('');
  const highlightCards = highlights
    .map(
      (item) => `
        <article class="hero-stat-card">
          <p class="caption-label">${item.label}</p>
          <p class="mt-2 text-2xl font-semibold tracking-tight text-slate-900">${item.value}</p>
        </article>
      `
    )
    .join('');

  return `
    <section aria-labelledby="hero-title" class="pt-16 pb-16 md:pt-20 md:pb-20">
      <div class="hero-shell">
        <div class="hero-image" role="presentation" aria-hidden="true"></div>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="hero-content grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div class="reveal-on-scroll">
          <p class="caption-label">Portfolio</p>
          <h1 id="hero-title" class="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            ${heroProfile.title}
          </h1>
          <p class="lead-paragraph mt-4">
            ${heroProfile.subtitle}
          </p>
          <div class="mt-5 flex flex-wrap gap-2.5">
            ${chips}
          </div>
          <p class="mt-6 max-w-2xl text-base leading-7 text-slate-600">
            ${heroProfile.credibility}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              class="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              class="inline-flex items-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Download Resume
            </a>
          </div>
          </div>
          <aside class="card quick-info-card reveal-on-scroll lg:justify-self-end" aria-label="Quick Info">
            <figure class="mb-5">
              <img
                src="/img/profile.jpg.webp"
                alt="Portrait of Sufi"
                class="h-56 w-full rounded-md border border-slate-200 object-cover object-top"
                loading="eager"
              />
              <br/>
            <h2 class="text-base font-semibold text-slate-900">Quick Info</h2>
            <div class="mt-4">
              ${infoRows}
            </div>
          </aside>
        </div>
      </div>
      <div class="hero-stats section-container">
        ${highlightCards}
      </div>
    </section>
  `;
}
