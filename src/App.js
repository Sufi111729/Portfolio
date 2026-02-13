import { createHeader } from './components/Header.js';
import { createHeroSection } from './components/HeroSection.js';
import { createAboutSection } from './components/AboutSection.js';
import { createTechStackSection } from './components/TechStackSection.js';
import { createProjectsSection } from './components/ProjectsSection.js';
import { createExperienceSection } from './components/ExperienceSection.js';
import { createContactSection } from './components/ContactSection.js';
import { createFooter } from './components/Footer.js';

export function createPortfolioApp() {
  return `
    <div class="min-h-screen">
      ${createHeader()}
      <main>
        ${createHeroSection()}
        ${createAboutSection()}
        ${createTechStackSection()}
        ${createProjectsSection()}
        ${createExperienceSection()}
        ${createContactSection()}
      </main>
      <button
        id="back-to-top"
        class="back-to-top-btn"
        aria-label="Back to top"
        type="button"
      >
        Top
      </button>
      ${createFooter()}
    </div>
  `;
}
