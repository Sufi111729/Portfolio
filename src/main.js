import './style.css';
import { createPortfolioApp } from './App.js';

const appRoot = document.querySelector('#app');
appRoot.innerHTML = createPortfolioApp();

const siteHeader = document.querySelector('#site-header');
const backToTopButton = document.querySelector('#back-to-top');
const spyLinks = Array.from(document.querySelectorAll('[data-spy-link]'));
const spySections = Array.from(document.querySelectorAll('[data-spy-section]'));
const revealTargets = Array.from(document.querySelectorAll('.reveal-on-scroll'));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const themeToggle = document.querySelector('[data-theme-toggle]');
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
  }
}

function getStoredTheme() {
  return window.localStorage.getItem('theme');
}

function initTheme() {
  const stored = getStoredTheme();
  if (stored === 'dark' || stored === 'light') {
    setTheme(stored);
  } else {
    setTheme(mediaQuery.matches ? 'dark' : 'light');
  }
}

function updateHeaderAndTopButton() {
  const scrolled = window.scrollY > 12;
  siteHeader?.classList.toggle('header-scrolled', scrolled);
  backToTopButton?.classList.toggle('show', window.scrollY > 520);
}

function setActiveLink(sectionId) {
  spyLinks.forEach((link) => {
    const isActive = link.getAttribute('data-spy-link') === sectionId;
    link.classList.toggle('is-active', isActive);
    link.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

function initScrollSpy() {
  if (!spySections.length || !spyLinks.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visibleSections.length) {
        return;
      }

      setActiveLink(visibleSections[0].target.id);
    },
    {
      rootMargin: '-25% 0px -55% 0px',
      threshold: [0.2, 0.5, 0.8]
    }
  );

  spySections.forEach((section) => observer.observe(section));
  setActiveLink(spySections[0].id);
}

function initReveal() {
  if (!revealTargets.length) {
    return;
  }

  if (reduceMotion) {
    revealTargets.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach((item) => revealObserver.observe(item));
}

window.addEventListener('scroll', updateHeaderAndTopButton, { passive: true });
backToTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

updateHeaderAndTopButton();
initScrollSpy();
initReveal();
initTheme();

themeToggle?.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  setTheme(next);
  window.localStorage.setItem('theme', next);
});

mediaQuery.addEventListener('change', (event) => {
  const stored = getStoredTheme();
  if (stored !== 'dark' && stored !== 'light') {
    setTheme(event.matches ? 'dark' : 'light');
  }
});

function toggleMobileMenu(forceClose = false) {
  if (!navMenu || !navToggle) return;
  navMenu.classList.toggle('is-open', !forceClose && !navMenu.classList.contains('is-open'));
  navToggle.setAttribute('aria-expanded', navMenu.classList.contains('is-open') ? 'true' : 'false');
  navMenu.classList.toggle('nav-menu', navMenu.classList.contains('is-open'));
}

navToggle?.addEventListener('click', () => toggleMobileMenu());

navMenu?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.matches('a[data-spy-link]')) {
    toggleMobileMenu(true);
  }
});
