# Tech Views — Frontend Developer Portfolio

> A production-grade interactive developer portfolio built with SvelteKit, TailwindCSS, and GSAP-inspired animations.

**Live Site:** [techviews-portfolio.vercel.app](https://techviews-portfolio.vercel.app)
**GitHub Repo:** [github.com/eghos-techviews/techviews-portfolio](https://github.com/eghos-techviews/techviews-portfolio)

---

## Overview

This portfolio showcases frontend engineering work through a visually polished, fully interactive web experience. It features a custom terminal emulator in the hero section, staggered scroll-reveal animations, a live dark/light mode toggle, and a real working contact form — all built with modern SvelteKit architecture.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | SvelteKit 2 + Svelte 5 (Runes) |
| Language | TypeScript |
| Styling | TailwindCSS v3 |
| Animations | Native CSS transitions + Intersection Observer |
| Form backend | Web3Forms |
| Deployment | Vercel (adapter-auto) |

---

## Features

- **Interactive Terminal** — Hero section includes a typewriter terminal that auto-plays a sequence of commands (`whoami`, `cat skills.json`, `ls projects/`, etc.) then opens for live user input
- **Typewriter Title** — Cycles through developer roles with a smooth type/delete loop
- **Dark / Light Mode** — Persisted to `localStorage`, initialised before first paint to prevent flash
- **Scroll Reveal** — `IntersectionObserver`-based staggered entrance animations on every section
- **Project Cards** — Hover lift effects, tech stack badges, live demo + source links
- **Skill Bars** — Animated progress bars triggered on viewport entry
- **Contact Form** — Fully wired to Web3Forms, sends email on submission with success/error states
- **Responsive** — Mobile-first layout, hamburger nav, fluid typography

---

## Architecture

```
src/
├── app.html              # Shell HTML with dark-mode init script (prevents FOUC)
├── app.css               # Tailwind directives + global component classes
├── lib/
│   ├── components/       # All UI components (Navbar, Hero, Terminal, Projects, Skills, Contact, Footer)
│   ├── data/             # Static data — projects.ts, skills.ts
│   └── stores/           # theme.svelte.ts — Svelte 5 universal reactive theme store
└── routes/
    ├── +layout.svelte    # Root layout — imports CSS, initialises theme
    └── +page.svelte      # Single-page composition + scroll-reveal observer
```

The project uses **Svelte 5 Runes** (`$state`, `$effect`, `$props`) throughout — no legacy `$:` reactive statements or `export let` props. State is co-located with the component that owns it; the only cross-component store is the theme.

---

## Animation Decisions

- **No flash of unstyled theme** — a blocking inline script in `app.html` reads `localStorage` before the page renders and adds the `dark` class to `<html>` immediately
- **Scroll reveal** — uses `IntersectionObserver` (not GSAP ScrollTrigger) to keep the bundle lean; each `[data-reveal]` element transitions with CSS `opacity + translateY`
- **Skill bars** — a per-section observer fires once on entry, then CSS transitions handle the bar fill with staggered `transition-delay`
- **Terminal typewriter** — pure async/await loop with randomised per-character delay for a natural feel; no external library

---

## Performance

- TailwindCSS purges unused styles at build time (44 KB CSS → 7.6 KB gzipped)
- GSAP not bundled — all animations use native CSS transitions and the Intersection Observer API
- Google Fonts loaded with `preconnect` + `display=swap` to avoid render blocking
- SvelteKit SSR pre-renders the page shell; JS hydrates on load
- No images in the critical path — all visuals are CSS/SVG

---

## Accessibility

- Semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- All interactive elements have `:focus-visible` ring styles
- `aria-label` on icon-only buttons and links
- `aria-live="polite"` on the terminal output region
- `role="progressbar"` with `aria-valuenow` on skill bars
- Colour contrast meets WCAG AA in both light and dark modes
- Mobile nav is keyboard navigable with proper `aria-expanded` state

---

## Local Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Projects Showcased

| Project | Description | Stack | Live |
|---|---|---|---|
| SysMonitor | Real-Time Analytics Dashboard | Vue 3, TypeScript, Pinia, ECharts | [↗](https://realtime-dashboard-sable.vercel.app) |
| E2E Messaging App | Encrypted Real-Time Chat | JavaScript, WebSockets, Node.js | [↗](https://e2emessaging.vercel.app) |
| Habit Tracker | Daily Progress & Streaks | JavaScript, CSS3, Chart.js, PWA | [↗](https://habit-tracker-5qdf.vercel.app) |

---

© 2026 Tech Views
