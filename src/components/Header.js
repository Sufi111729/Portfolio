import { navigation } from '../data/portfolio.js';

export function createHeader() {
  const navItems = navigation
    .map(
      ({ id, label }) =>
        `<a href="#${id}" data-spy-link="${id}" class="nav-link hover:text-slate-900 focus-visible:text-slate-900">${label}</a>`
    )
    .join('');

  return `
    <header id="site-header" class="fixed top-0 z-50 w-full border-b border-transparent bg-transparent transition-all">
      <div class="site-header-inner">
        <a href="#" class="site-brand">
          <span class="site-brand-mark">S</span>
          <span class="site-brand-text">Sufi</span>
        </a>
        <nav aria-label="Primary" class="nav-list">
          ${navItems}
        </nav>
        <button class="theme-toggle" type="button" aria-label="Toggle theme" data-theme-toggle>
          <span class="theme-toggle-icon" aria-hidden="true"></span>
          <span class="theme-toggle-text">Theme</span>
        </button>
      </div>
    </header>
  `;
}
