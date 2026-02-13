# Portfolio

A single-page developer portfolio built with Vite and Tailwind CSS. Content is data-driven from `src/data/portfolio.js`, and the UI is assembled from lightweight JS template components in `src/components`.

**Live:** https://mdsufidev.netlify.app/

**Highlights**
- Hero section with background image, overlay, stats, and quick info card.
- Dark/light theme toggle with saved preference and system theme fallback.
- Scroll spy for active nav links, reveal-on-scroll animations, and a back-to-top button.
- SEO-ready: canonical URL, Open Graph/Twitter tags, JSON-LD, `robots.txt`, and `sitemap.xml`.

**Tech Stack**
- Vite (build/dev)
- Tailwind CSS (utility styling)
- Vanilla JavaScript (components and UI behavior)

**Project Structure**
- `src/App.js` — page layout and section order
- `src/components/` — hero, header, projects, etc.
- `src/data/portfolio.js` — all text/content and project data
- `src/style.css` — global styles + theme variables
- `public/` — images, favicon, robots, sitemap

**How It Works**
- The app renders HTML strings from component functions into `#app`.
- `main.js` wires theme toggle + persistence, scroll spy + active nav state, reveal-on-scroll animation, and back-to-top behavior.

**Customize Content**
Edit `src/data/portfolio.js` to change:
- Hero text, skills, and quick info
- Highlight stats
- Projects and links
- About/experience details

Update assets in `public/img/` and reference them in components or CSS.

**Run Locally**
```bash
npm install
npm run dev
```

**Build**
```bash
npm run build
npm run preview
```

**Deploy (Netlify)**
- Build command: `npm run build`
- Publish directory: `dist`
