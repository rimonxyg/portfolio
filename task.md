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
- [ ] M6.1 `Atlas` renders the full graph from `capabilities.js` as SVG, clustered by group (Security / Networking / Software / Labs / Projects), with hairline edges.
- [ ] M6.2 `NodeDetail` panel (right on desktop, below on mobile): label, level badge (Foundation / Practicing / Demonstrated), blurb, related projects (click opens the project drawer, M7), connected nodes (click to jump).
- [ ] M6.3 State: `selectedNodeId` in the Atlas via `useState`; selecting highlights the node and its direct edges, dims the rest. Clear selection = Esc key or "Clear" button.
- [ ] M6.4 Group filter chips (All / Security / Networking / Software / Labs) as toggle buttons with `aria-pressed`.
- [ ] M6.5 Keyboard: nodes are focusable in a logical order; arrow-key navigation is *OPTIONAL*.
- [ ] M6.6 Provide a **text-list alternative** (visually hidden or toggle "View as list") so screen-reader users get the same information.
- [ ] M6.7 A short legend explaining levels and that "Foundation" means *learning stage*, not mastery. Honest by design.

**Done when:** every node is selectable by mouse, touch, and keyboard; the detail panel shows correct data; works at 360 px width without horizontal scroll.

---

## M7 — Projects
- [ ] M7.1 `ProjectCard`: title, `StatusBadge` (Concept / In progress / Shipped / Learning), 1–2 line summary, tools as `Tag`s. Whole card is one button that opens the drawer.
- [ ] M7.2 `ProjectDrawer` (accessible dialog): focus trap, Esc closes, returns focus to the trigger, `aria-modal`, `role="dialog"`, `aria-labelledby`, body scroll locked while open. Sections: Problem · Objective · Approach · Tools · My contribution · Outcome · Links. **Omit any section whose data is null.**
- [ ] M7.3 Show only projects with `verified: true`. Add a clear note in the data file about the status label.
- [ ] M7.4 Links: only real URLs the owner supplied. If none, show no link (no `#` placeholders).
- [ ] M7.5 Optional *OPTIONAL*: subtle card hover (border brightens, 2px lift) via CSS only.

**Done when:** each shown project opens/closes properly via mouse and keyboard; focus management verified manually; there are no placeholder links.

---

## M8 — Experience & Credentials
- [ ] M8.1 `Timeline` with one verified SOHUB entry: "Software and Cybersecurity Intern — Solution Hub Technologies (SOHUB)", linked to https://sohub.com.bd/ (`rel="noopener noreferrer"`, `target="_blank"` with an accessible hint).
- [ ] M8.2 A separate small "Focus areas" line (software development, cybersecurity, network engineering, IT infrastructure, enterprise systems; learning: React, security engineering, networking, infrastructure) visually distinct from the confirmed title, labeled "Learning focus."
- [ ] M8.3 `CredentialItem` list renders **only** `verified: true` entries. If none are verified yet, render the section with just the SOHUB entry and a graceful layout (no empty headings).
- [ ] M8.4 Do **not** write any SOHUB responsibilities or tech unless `responsibilities` has owner-supplied items.

**Done when:** the section looks complete and intentional even with only the SOHUB entry; no unverified claim is visible (confirm with `npm run check:content` vs. the rendered page).

---

## M9 — Writing (conditional)
- [ ] M9.1 Create `src/data/writing.js` exporting an empty array and a `Writing` component.
- [ ] M9.2 If the array is empty: render nothing and **remove "Writing" from nav**. Nav builds from sections that have content.
- [ ] M9.3 Document in `LEARNING_NOTES.md` how to add a post later (data entry + optional markdown).

**Done when:** no "Writing" UI is visible with empty data; adding one entry makes it appear (test, then revert).

---

## M10 — Contact + Footer
- [ ] M10.1 `ContactLinks`: a short invitation line, then link buttons for LinkedIn and GitHub (+ approved socials). Visible text for each (no icon-only links; icons have `aria-hidden`).
- [ ] M10.2 Email: if provided, a `mailto:` link and a "copy email" button with a visible confirmation (`aria-live="polite"`). If not provided, omit entirely.
- [ ] M10.3 **No fake form, no backend.**
- [ ] M10.4 Footer: © year (computed), name, one-line note "Built with React + Vite", links.
- [ ] M10.5 Test every external link opens correctly (HTTP 200/redirect) when network is available; report any that can't be tested.

**Done when:** every contact path works; no dead button exists.

---

## M11 — Responsive, accessibility, and motion polish
- [ ] M11.1 Test widths 360, 390, 768, 1024, 1280, 1920 px: no horizontal scroll, readable type, tap targets ≥ 44 px.
- [ ] M11.2 Keyboard-only pass: complete the whole site by Tab/Shift+Tab/Enter/Esc; focus always visible; skip link works.
- [ ] M11.3 Semantics: a single `<h1>`, ordered headings, landmarks (`header`, `nav`, `main`, `footer`), meaningful `alt`, `lang="en"`.
- [ ] M11.4 Reduced motion: verify all animations are off/static with the OS setting (emulate in DevTools).
- [ ] M11.5 Scene transitions: section reveal on scroll (opacity + 12px translate, 400ms) via CSS + `useInView`. Install `motion` **only if** the drawer/transitions cannot be done cleanly with CSS; if installed, explain it in `LEARNING_NOTES.md`.
- [ ] M11.6 Run an automated accessibility check (e.g., Lighthouse or axe via browser tools if available). Report actual results; fix serious/critical issues.

**Done when:** checks listed above are completed and reported with real results.

---

## M12 — SEO, favicon, branding, social preview
- [ ] M12.1 `index.html`: `<title>` ("Aktaruzzaman Rimon — Cybersecurity Practitioner | Network Engineer | CSE Student", using the approved spelling), meta description (≤ 160 chars, honest), canonical (update after the final URL), theme-color, viewport.
- [ ] M12.2 Open Graph + Twitter Card tags with `og-image.png` (1200×630): simple, on-brand (name, headline, small topology motif). Create it as an SVG→PNG (a script or tool) or ASK the owner if tooling is missing.
- [ ] M12.3 `favicon.svg` (monogram "AR" or a node mark in accent on near-black) + `apple-touch-icon.png` if feasible.
- [ ] M12.4 `robots.txt`, `sitemap.xml` (single URL; update when domain is known).
- [ ] M12.5 JSON-LD `Person` schema **using only verified data** (name, url, sameAs = approved profile links, alumniOf AIUB; do not include job title unless it is the approved public title).

**Done when:** a link preview renders correctly (verify via a meta check; report whether a real unfurl test was possible).

---

## M13 — Performance
- [ ] M13.1 `npm run build`; report bundle sizes. Initial JS gzipped target < 150 KB.
- [ ] M13.2 Run Lighthouse (mobile) on the **production preview** (`npm run preview`). Report actual scores. Targets: Perf ≥ 90, A11y ≥ 95, BP ≥ 95, SEO ≥ 95.
- [ ] M13.3 Fix the top 3 issues found (e.g., font preloading, image sizes, unused CSS/JS, layout shift).
- [ ] M13.4 Confirm rAF loops stop when off-screen/hidden; no memory leaks (event listeners removed in effect cleanup).
- [ ] M13.5 Fonts: only the weights/subsets actually used.

**Done when:** scores are reported honestly. If a target is missed, explain why and propose a fix; **ASK** before large compromises.

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
- [ ] M16.1 `LEARNING_NOTES.md` with plain-language sections:
  1. What each dependency does (React, Vite, lucide-react, fontsource, CSS Modules, and `motion` if used).
  2. React concepts, each with a **real example from this repo (file + line)**: components, props, state (`useState`), effects/refs (`useEffect`, `useRef`), hooks (custom hooks `useInView`, `useReducedMotion`, `usePointer`), event handling, conditional rendering, mapping over data (`projects.map`), keys, lifting state up (Atlas ↔ NodeDetail).
  3. Folder tour: what lives where and why.
  4. "How do I…" recipes: add a project; change a link; add a certification once verified; change the accent color; add a writing post; run locally; build; deploy; connect a custom domain.
  5. Common errors and fixes (port in use, blank page, build failure, stale cache).
  6. 10 self-test questions about the code the owner can try answering.
- [ ] M16.2 README commands: `npm install`, `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`, `npm run check:content`.

**Done when:** the owner can find every update recipe without reading the source.

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
