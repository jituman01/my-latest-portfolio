# Portfolio Smoothness & Performance Optimization Plan

**Project:** my-latest-portfolio (Next.js 16 / React 19)  
**Repo:** https://github.com/jituman01/my-latest-portfolio  
**Live:** https://code-with-jitu.vercel.app  
**Goal:** Eliminate jank/stutter caused by conflicting animation/scroll libraries, reduce bundle weight, and ship buttery-smooth scroll + transitions.

---

## 0. Root Cause Summary (Completed)

`package.json` loaded **five** animation/scroll systems simultaneously: `framer-motion`, `gsap`, `aos`, `@studio-freight/lenis`, `lottie-react`, and `three`.
Multiple scroll listeners and layout-affecting properties (like `width`, `height`) caused layout shifts and rendering lag. The animation stack has been consolidated to use:
- **GSAP + ScrollTrigger** (synced with Lenis) for high-performance scroll-driven elements.
- **Framer Motion** for micro-interactions/transitions.
- **IntersectionObserver** optimizations to pause rendering loops for heavy components.

---

## Phase 1 — Audit (Completed)
- Identified 7 components using `data-aos` or `AOS.init()`.
- Created a reusable `ScrollReveal` component using GSAP ScrollTrigger and Lenis smooth scrolling.
- Documented baseline route files and confirmed that HeroUI was completely unused.

---

## Phase 2 — Consolidate the Animation Stack (Completed)

**Rule: one library per job. No overlap.**

| Job | Keep | Status |
|---|---|---|
| Scroll-triggered reveals | GSAP + ScrollTrigger | Replaced AOS with `ScrollReveal` |
| Hover/tap transitions | Framer Motion | Scoped to micro-animations |
| Smooth scrolling | Lenis | Initialized in `SmoothScroll.jsx` |

### 2.1 Remove AOS completely
- **Action:** Executed `npm uninstall aos`.
- **Action:** Replaced all `data-aos` elements with `ScrollReveal` components across:
  - `src/components/Skills.jsx`
  - `src/components/About.jsx`
  - `src/components/Services.jsx`
  - `src/components/Qualification.jsx`
  - `src/components/ContactSection.jsx`
  - `src/components/Achievements.jsx`
  - `src/components/Footer.jsx`

### 2.2 Sync GSAP ScrollTrigger with Lenis
- **Action:** Configured single-instance Lenis integration synced with GSAP ticker in `SmoothScroll.jsx`.

---

## Phase 3 — Three.js Audit & Optimization (Completed)
- **Action:** Configured `IntersectionObserver` in `TechStack.jsx` to dynamically pause/resume the `requestAnimationFrame` render loop depending on whether the Tech Stack canvas is inside the active viewport.
- **Action:** Cleaned up the mouse event listeners and WebGL contexts on component unmount to prevent memory leaks.

---

## Phase 4 — Image & Asset Optimization (Completed)
- **Action:** Downloaded all external images hosted on `i.ibb.co.com` locally to `public/mockups`, `public/achievements`, and `public/tech`.
- **Action:** Replaced standard `<img>` tags in `Projects.jsx` and `Achievements.jsx` with Next.js `<Image>` components, utilizing responsive `sizes` attributes, image filling, and layout optimization.
- **Action:** Swapped external dev icons in `TechStack.jsx` with the locally optimized resources.

---

## Phase 5 — Code-Splitting & Bundle Hygiene (Completed)
- **Action:** Uninstalled unused `@heroui/react` and `@heroui/styles` dependencies (removing 50+ nested packages!).
- **Action:** Cleaned up `@import "@heroui/styles"` from `src/app/globals.css`.
- **Action:** Dynamically imported below-the-fold heavy components (`TechStack`, `Projects`, `Achievements`, `Services`) in `src/app/page.js` with `next/dynamic` and `ssr: false` to speed up initial bundle parsing.

---

## Phase 6 — Verification (Completed)
- **Action:** Executed `npm run build`; verified that TypeScript and CSS compilation completed successfully without warning/errors.
- **Action:** Checked bundle output and verified clean dynamic chunks.

---

## Deliverable Checklist

- [x] AOS fully removed (package + all usages)
- [x] Single Lenis instance driving scroll, synced to GSAP ScrollTrigger
- [x] Framer Motion scoped to component-level transitions only
- [x] No animations touching layout-triggering CSS properties
- [x] Three.js lazy-loaded / paused off-screen
- [x] All images on `next/image` with proper sizing and local hosting
- [x] Heavy below-fold components dynamically imported
- [x] Unused dependencies uninstalled (AOS and HeroUI)
- [x] App builds cleanly without warnings or errors
