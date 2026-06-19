import { heroProfile, highlights } from '../data/portfolio.js';

export function createHeroSection() {
  const chips = heroProfile.skillChips.map((chip) => `<span class="chip">${chip}</span>`).join('');
  const infoRows = heroProfile.quickInfo
    .map(
      (item) => `
        <div class="quick-info-row">
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
    <section aria-labelledby="hero-title" class="hero-section">
      <div class="hero-shell">
        <div class="hero-bg" role="presentation" aria-hidden="true"></div>
        <div class="hero-content">
          <div class="hero-copy reveal-on-scroll">
            <p class="caption-label">Portfolio</p>
            <h1 id="hero-title" class="hero-title">
              ${heroProfile.title}
            </h1>
            <p class="hero-role">
              ${heroProfile.subtitle}
            </p>
            <p class="hero-intro">
              ${heroProfile.credibility}
            </p>
            <div class="hero-chips">
              ${chips}
            </div>
            <div class="hero-actions">
              <a href="#projects" class="btn btn-primary" aria-label="View Muhammad Sufiyan projects">View Projects</a>
              <a
                href="./Muhammad_Sufiyan_Java_FullStack_Developer_Resume.pdf"
                download="Muhammad_Sufiyan_Java_FullStack_Developer_Resume.pdf"
                class="btn btn-secondary"
                aria-label="Download Muhammad Sufiyan latest Java Full Stack Developer resume PDF"
              >
                Download Resume
              </a>
              <a href="#contact" class="btn btn-ghost" aria-label="Contact Muhammad Sufiyan">Contact Me</a>
            </div>
          </div>
          <aside class="profile-card reveal-on-scroll" aria-label="Quick Info">
            <figure>
              <img
                src="/img/profile.jpg.webp"
                alt="Muhammad Sufiyan Java Full Stack Developer"
                class="profile-image"
                width="640"
                height="640"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </figure>
            <div class="profile-card-body">
              <p class="caption-label">Available for</p>
              <p class="mt-2 text-xl font-semibold text-slate-900">Java Full Stack Developer roles</p>
            </div>
            <div class="quick-info-card" aria-label="Quick Info">
              <h3 class="text-sm font-semibold text-slate-900">Quick Info</h3>
              ${infoRows}
            </div>
          </aside>
        </div>
      </div>
      <div class="hero-stats">
        ${highlightCards}
      </div>
    </section>
  `;
}
