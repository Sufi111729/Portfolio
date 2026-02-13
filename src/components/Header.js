import { navigation } from '../data/portfolio.js';

export function createHeader() {
  const navItems = navigation
    .map(
      ({ id, label }) =>
        `<a href="#${id}" data-spy-link="${id}" class="nav-link hover:text-slate-900 focus-visible:text-slate-900">${label}</a>`
    )
    .join('');

  return `
    <header id="site-header" class="site-header">
      <div class="site-header-inner">
        <a href="#" class="site-brand">
          <span class="site-brand-mark">S</span>
          <span class="site-brand-text">Sufi</span>
        </a>
        <nav aria-label="Primary" class="nav-list" data-nav-menu>
          ${navItems}
        </nav>
        <div class="nav-actions">
          <button class="theme-toggle" type="button" aria-label="Toggle theme" data-theme-toggle>
            <span class="theme-toggle-icon" aria-hidden="true"></span>
            <span class="theme-toggle-text">Theme</span>
          </button>
          <button class="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" data-nav-toggle>
            <span class="nav-toggle-icon" aria-hidden="true">
              <span class="nav-toggle-bar"></span>
              <span class="nav-toggle-bar"></span>
              <span class="nav-toggle-bar"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  `;
}
