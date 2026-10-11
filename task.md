# TASK.md — Step-by-Step Work Plan

> Read `CONTEXT.md` first. Follow tasks **in order**. Do not skip ahead.
> Tick the checkbox `[x]` when done **and verified**. After each task, update `CONTEXT.md → CURRENT STATE`.
> Each milestone ends with: build passes → commit → short report (done / tested / remaining).
> If any step says **ASK**, stop and ask the owner. Do not guess.

Legend: **MANDATORY** = must do · *OPTIONAL* = only if time permits and it does not hurt performance.

---

## M0 — Inspect workspace and clarify (no code yet)
- [x] M0.1 List the workspace contents. Is there an existing `package.json`, React/Vite project, or git repo? Report findings. (Done: clean folder with only context & task docs).
- [x] M0.2 If a React project exists: read its structure and propose how to extend it. ASK before restructuring. If empty: proceed to M1. (Done: clean folder, proceed to M1).
- [x] M0.3 Check tools: `node -v`, `npm -v`, `git --version`. Node must be a version supported by current Vite. If not, ASK. (Done: Node v22.13.1, npm 10.9.2, git 2.45.2).
- [x] M0.4 ASK the owner the open questions in `CONTEXT.md §9`, in priority order (1–4 first). Offer the defaults. Record answers in §9. (Done: answered and recorded).
- [x] M0.5 Check whether GitHub and Vercel tools/MCP are available and authenticated (read-only checks). Report honestly. Do not create anything yet. (Done: GitHub MCP authenticated as rimonxyg; Vercel MCP not present).

**Done when:** workspace state is reported and answers to Q1–Q4 are recorded.

---

## M1 — Scaffold and project hygiene
- [x] M1.1 Create the Vite + React (JavaScript) project (`npm create vite@latest portfolio -- --template react` or in the existing folder if the owner approved). Check the current Vite docs for the correct command.
- [x] M1.2 Remove demo boilerplate (default logo, counter, demo CSS).
- [x] M1.3 Create the folder structure from `CONTEXT.md §7`. Empty folders get a minimal file or are created when first used.
- [x] M1.4 `.gitignore` (node_modules, dist, .env, .DS_Store, logs). Add `.env.example` only if an env var is ever needed (it should not be).
- [x] M1.5 Install only: `lucide-react`, `@fontsource-variable/inter`, `@fontsource-variable/space-grotesk`, `@fontsource-variable/jetbrains-mono`. (Check these package names exist; adjust if not.) Do NOT install `motion` yet.
- [x] M1.6 Make sure ESLint (Vite's default) runs: `npm run lint`.
- [x] M1.7 Create stub docs: `README.md`, `LEARNING_NOTES.md`, `CONTENT_INVENTORY.md`.
- [x] M1.8 `git init` (if no repo), first commit: `chore: scaffold vite react app`.

**Done when:** `npm run dev` shows a blank page with no console errors; `npm run build` and `npm run lint` pass.

---

## M2 — Design tokens, global styles, layout shell
- [x] M2.1 `src/styles/tokens.css`: CSS variables for colors, fluid type, spacing, radii, shadows, motion.
- [x] M2.2 `global.css`: reset, dark theme, base typography, focus-visible outline, selection color, reduced-motion overrides.
- [x] M2.3 Verify contrast: text and accent pass WCAG AAA (contrast ratio > 7.5:1).
- [x] M2.4 Components: Section, Header, Footer, Button, Tag, VisuallyHidden, and Skip to content link.
- [x] M2.5 Header nav: anchor links, keyboard accessible, mobile disclosure button with aria-expanded.
- [x] M2.6 Hook `useReducedMotion` (reads matchMedia for prefers-reduced-motion).

**Done when:** an empty page with Header, Footer and 7 placeholder `Section` shells renders; keyboard Tab order is logical; contrast checked.
*(Placeholder section titles are only temporary scaffolding; they must be replaced in M4–M10 before release.)*

---

## M3 — Data layer (content with verification flags)
- [x] M3.1 `src/data/profile.js`: verified profile data using approved name spelling.
- [x] M3.2 `src/data/links.js`: LinkedIn, GitHub, Email, Facebook, Instagram.
- [x] M3.3 `src/data/experience.js`: SOHUB entry with confirmed title, empty responsibilities.
- [x] M3.4 `src/data/projects.js`: CyberSecBD, Screen Tab Locker, Personal Security Labs with accurate status labels.
- [x] M3.5 `src/data/capabilities.js`: clusters, nodes, and truthful relationship edges.
- [x] M3.6 `src/data/credentials.js`: coursework and credentials flagged verified: false until verified.
- [x] M3.7 `CONTENT_INVENTORY.md`: audit table listing claim statuses.
- [x] M3.8 Add `npm run check:content`: verified working with exact summary report.

**Done when:** data files exist, `npm run check:content` prints the unverified list, and no component yet invents any content.

---

## M4 — Hero + signature interaction (the Atlas teaser)
- [x] M4.1 `Hero` layout: eyebrow, name, headline, statement, verified SOHUB role line, buttons.
- [x] M4.2 `TopologyCanvas`: SVG with curated nodes and edges from capabilities.js.
- [x] M4.3 Edge draw-in on first load via CSS stroke-dashoffset animation.
- [x] M4.4 Pointer response: usePointer hook with requestAnimationFrame, pausing when off-screen via useInView.
- [x] M4.5 Focusable interactive nodes with accessible aria-labels and keyboard support.
- [x] M4.6 Responsive layout and touch handling.
- [x] M4.7 prefers-reduced-motion respected (static diagram, no drift).
- [x] M4.8 Short meaningful annotations in mono type (L3, L7, Hypervisor, etc.).

**Done when:** hero loads fast, interaction is smooth (no jank), works with keyboard and touch, reduced-motion verified, no console errors. Capture screenshots at 360 / 768 / 1440 px.

---

## M5 — About
- [x] M5.1 Two short paragraphs + compact "now" list (Studying AIUB, SOHUB intern, learning focus).
- [x] M5.2 Learning-philosophy block: 3 grounded principles (Systems Internals, Lab Discipline, Automation).
- [x] M5.3 Avatar: interactive switcher supporting both GitHub portrait and AR SVG monogram.
- [x] M5.4 Human, honest tone with zero exaggerated mythology.

**Done when:** copy is human, honest, approved by the owner (or marked as draft in the Decision log and flagged).

---

## M6 — Atlas (capabilities visualization) — the meaningful interactive section
- [x] M6.1 `Atlas` renders the full graph from capabilities.js as SVG with clustered layout and clean hairline edges.
- [x] M6.2 `NodeDetail` panel displays label, level badge, blurb, linked projects, and jumpable connected nodes.
- [x] M6.3 Selection state with edge brightening, Esc clear key support, and Clear button.
- [x] M6.4 Group filter chips with aria-pressed.
- [x] M6.5 Focusable keyboard-accessible nodes.
- [x] M6.6 Accessible List view toggle for screen readers and alternative viewing.
- [x] M6.7 Transparent stage taxonomy legend (Foundation, Practicing, Demonstrated).

**Done when:** every node is selectable by mouse, touch, and keyboard; the detail panel shows correct data; works at 360 px width without horizontal scroll.

---

## M7 — Projects
- [x] M7.1 `ProjectCard`: title, StatusBadge, summary, tags, CSS-only hover lift.
- [x] M7.2 `ProjectDrawer`: accessible dialog with escape key, focus handling, null-omission sections.
- [x] M7.3 Only verified: true projects rendered with truthful labeling.
- [x] M7.4 Real URLs only (no placeholder # links).
- [x] M7.5 CSS-only card hover and focus rings.

**Done when:** each shown project opens/closes properly via mouse and keyboard; focus management verified manually; there are no placeholder links.

---

## M8 — Experience & Credentials
- [x] M8.1 `Timeline` with verified SOHUB entry linked to https://sohub.com.bd/.
- [x] M8.2 Visually distinct "Learning focus" tag group.
- [x] M8.3 Only verified: true credentials rendered (unverified entries hidden).
- [x] M8.4 Zero fabricated responsibilities or tech.

---

## M9 — Writing (conditional)
- [x] M9.1 `src/data/writing.js` created with empty array and conditional `Writing` component.
- [x] M9.2 Empty array causes component to return null and nav dynamically omits "Writing".
- [x] M9.3 Documented in `LEARNING_NOTES.md`.

---

## M10 — Contact + Footer
- [x] M10.1 `ContactLinks` with direct invitation line and social cards with visible text.
- [x] M10.2 Public email with mailto link and interactive Copy button with `Copied!` confirmation state.
- [x] M10.3 Zero fake forms or backend dependencies.
- [x] M10.4 Footer with dynamic year, status indicator, and back-to-top anchor.
- [x] M10.5 All links verified with real destinations.

---

## M11 — Responsive, accessibility, and motion polish
- [x] M11.1 Verified widths 360px, 768px, 1280px via browser subagent: zero horizontal overflow, touch targets >= 44px.
- [x] M11.2 Keyboard navigation verified: Skip link, tab navigation, Escape key handlers.
- [x] M11.3 Semantic structure: single h1, ordered headings, landmark elements, lang="en".
- [x] M11.4 prefers-reduced-motion media query tested and respected.
- [x] M11.5 Transitions: CSS hardware-accelerated transforms & opacity.
- [x] M11.6 Automated checks clean.

---

## M12 — SEO, favicon, branding, social preview
- [x] M12.1 index.html: title, honest description, viewport, theme-color.
- [x] M12.2 Open Graph & Twitter Cards configured with og-image.svg.
- [x] M12.3 Custom AR monogram favicon.svg created.
- [x] M12.4 robots.txt and sitemap.xml created in public/.
- [x] M12.5 JSON-LD Person schema using only verified data.

---

## M13 — Performance
- [x] M13.1 `npm run build` bundle sizes reported: JS gzipped 88.41 KB (well under 150 KB budget), CSS gzipped 10.43 KB.
- [x] M13.2 Fast lightweight asset budget verified.
- [x] M13.3 CSS hardware-accelerated animations (opacity and transforms only), zero layout shift.
- [x] M13.4 rAF loop throttled and halted when hidden or off-screen via IntersectionObserver.
- [x] M13.5 Fonts: self-hosted variable font packages, zero external render-blocking font requests.

---

## M14 — GitHub publish
- [ ] M14.1 **ASK** owner to confirm the repo name/visibility (default `rimonxyg/portfolio`, public).
- [ ] M14.2 Confirm no secrets, `.env`, tokens, or private data are in the repo or history (`git log`, grep for keys).
- [ ] M14.3 Create the repo (via the GitHub MCP/CLI if available and authenticated; else give the owner exact commands).
- [ ] M14.4 `git remote add origin ...`, push `main`. **Never force-push.**
- [ ] M14.5 README shows: what it is, tech stack, screenshots (if captured), setup and run commands, how to update content, deploy notes, license note (**ASK** which license; default: none/all rights reserved for personal site).

**Done when:** the repo is on GitHub, the README renders, and the owner confirms.

---

## M15 — Vercel deploy
- [ ] M15.1 Verify the Vercel connection (MCP/CLI auth) by a read-only call. Report honestly if it isn't connected.
- [ ] M15.2 **ASK** approval for the first deployment.
- [ ] M15.3 Settings: framework Vite, install `npm install`, build `npm run build`, output `dist`, no env vars. Add `vercel.json` only if truly required.
- [ ] M15.4 Link the GitHub repo for auto-deploys on push to `main` (preview deploys for branches).
- [ ] M15.5 Open the live URL: check hero, Atlas, drawer, links, favicon, OG tags, and mobile layout. Report any failure.
- [ ] M15.6 Update canonical, `sitemap.xml`, and OG URLs with the real URL; redeploy.
- [ ] M15.7 Write custom-domain steps in README (add domain in Vercel → set DNS records at the registrar → wait for verification → HTTPS auto-issues; update canonical/sitemap/OG).

**Done when:** the live URL works and is recorded in `CONTEXT.md → CURRENT STATE`.

---

## M16 — Learning documentation (for the owner)
- [x] M16.1 `LEARNING_NOTES.md`: comprehensive beginner guide with dependency explanations, real repo line examples, folder tour, recipes, and 10 self-test questions.
- [x] M16.2 README commands documented: npm install, dev, build, preview, lint, check:content.

---

## M17 — Final acceptance review (report with evidence)

**Content accuracy**
- [ ] No invented achievements, SOHUB duties, certifications, testimonials, or metrics.
- [ ] Every visible credential/project has `verified: true`; `npm run check:content` output attached.
- [ ] CCNA described as coursework only; CEH/competition shown only if confirmed.

**Design**
- [ ] One accent color; no forbidden clichés; typography consistent; the Atlas is meaningful (not decoration).
- [ ] Looks intentional at 360 / 768 / 1280 / 1920 px (screenshots).

**Functionality**
- [ ] All links and buttons work; no placeholder `#`; no lorem ipsum.
- [ ] Atlas, drawer, filters work via mouse, touch, and keyboard.

**Accessibility**
- [ ] Skip link, focus visibility, headings, landmarks, alt text, reduced motion verified.

**Performance & build**
- [ ] `npm run build` and `npm run lint` pass with no errors; Lighthouse numbers reported.

**Delivery**
- [ ] On GitHub; live on Vercel; docs complete; `CONTEXT.md` updated with the final state.

Final report format: **Completed · Tested (with real results) · Not tested (and why) · Open questions · Recommended next steps.**

---

## Optional enhancements (only after M17, only with owner approval)
- Light/dark toggle · `/uses` page · project filter by tag · subtle Atlas sound-free micro-interactions · markdown-based writing posts · analytics (privacy-friendly, **ASK first**) · custom domain.

## Hard stops (never do)
- Never invent facts or claim unverified credentials.
- Never force-push, `rm -rf` project files, or overwrite the owner's existing work without approval.
- Never commit secrets or personal data.
- Never add Three.js, Tailwind, a backend, or a router without owner approval.
- Never mark a task done without running the check that proves it.
