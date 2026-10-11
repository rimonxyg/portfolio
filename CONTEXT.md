# CONTEXT.md — Portfolio Project (Single Source of Truth)

> **READ THIS FILE FIRST in every session**, especially after a power cut, crash, or restart.
> Then read `TASK.md`. Resume from the **CURRENT STATE** section below.
> **UPDATE the CURRENT STATE section after every completed task** (not just every milestone).

---

## 0. CURRENT STATE (Antigravity: keep this updated)

```
Last updated:        2026-10-11
Current milestone:   M8
Last completed task: M7.5 (Projects section & accessible detail drawer)
Next task:           M8.1 (Experience & Credentials timeline)
Blocked / waiting on user: none
Open questions for user:   Questions 1-4 answered; 5-12 as needed
Git branch:          main
Last commit:         ceab0ff feat(projects): project cards and accessible detail drawer dialog
Deployed URL:        (none)
```

### Decision log (append only; one line per decision)
| Date | Decision | Why | Reversible? |
|------|----------|-----|-------------|
| 2026-10-11 | Use spelling "Aktaruzzaman Rimon" | User confirmed preferred public spelling | Yes |
| 2026-10-11 | Display public email `hire.rimon@gmail.com` | User confirmed public email | Yes |
| 2026-10-11 | Prepare visual comparison for Avatar vs SVG Monogram | User requested to visually see both | Yes |
| 2026-10-11 | Include LinkedIn, GitHub, Facebook, Instagram links | User preference to include all approved profiles | Yes |

---

## 1. What we are building

A **personal portfolio website** for **Aktaruzzaman Rimon** (also spelled Akhtaruzzaman Rimon), a CSE student at **American International University–Bangladesh (AIUB)**.

- Positioning line: **Cybersecurity Practitioner | Network Engineer | CSE Student**
- Current role (confirmed public title): **Software and Cybersecurity Intern — Solution Hub Technologies (SOHUB)**, https://sohub.com.bd/
- Audience: technical recruiters, senior engineers, hiring managers, collaborators.
- Must be understood within a few seconds, yet memorable.
- Tone: honest, curious, disciplined learner. **A real person, not a fictional hacker persona.**

The owner is **learning React** and must be able to understand, explain, and maintain the code.

---

## 2. Non-negotiable requirements (MANDATORY)

1. **React is mandatory.** Real, working React app. Not static HTML dressed up as React.
2. **Vite + React, JavaScript/JSX** (no TypeScript unless the owner approves after you explain the extra learning cost).
3. **One primary styling approach: CSS Modules + a global `tokens.css` (CSS variables).** (Chosen because it is plain CSS, easy for a React beginner, zero config, small bundle.) Do not mix in Tailwind.
4. Reusable, modular components. **No giant single component. No giant single file.** Target: components under ~150 lines; split if larger.
5. Use React properly and visibly: components, props, state (`useState`), effects/refs (`useEffect`, `useRef`), event handling, conditional rendering, `.map()` over data. Avoid over-abstraction (no Redux, no custom state libraries, no HOC pyramids).
6. Static site only. **No backend, no database, no API keys, no secrets in frontend code.**
7. Deployable on **Vercel**; code published on **GitHub**; custom domain can be added later.
8. Responsive: desktop, tablet, mobile.
9. Accessible: keyboard navigation, visible focus, readable contrast (WCAG AA), semantic HTML, `prefers-reduced-motion` respected.
10. SEO metadata, Open Graph/Twitter preview, custom favicon, coherent branding.
11. **No broken links, dead buttons, placeholder interactions, lorem ipsum, or fake live data.**
12. Fast: sensible asset sizes; see performance budget in section 7.

---

## 3. Truthfulness rules (MANDATORY, highest priority)

**Never invent**: achievements, responsibilities, SOHUB projects, production deployments, certifications, competition results, client names, security findings, testimonials, metrics, emails, phone numbers, article titles.

- Every professional claim must be in `src/data/*` with a `status` / `verified` flag.
- Only `verified: true` items may render as fact. Unverified items are **hidden** until the owner confirms (build a small dev-only check/script that lists unverified items).
- Clearly label each project: **Shipped / In progress / Learning exercise / Concept**.
- **Do NOT claim CCNA certification.** Owner has completed CCNA learning *modules* only. Say "CCNA coursework" unless he confirms otherwise.
- **CEH**: write "CEH training/certification" only after the owner confirms the exact wording and status.
- **Cisco competition finalist at AIUB**: needs exact competition name, year, official title before publishing.
- **SOHUB**: show only the confirmed title and company. Do **not** list duties, deployments, or tech used there until the owner supplies verified details. Keep "interests/learning focus" visually separate from "job title."
- Security content: only sanitized, authorized, non-sensitive. No exploit instructions, no targets, no real credentials, no real client data.
- Do not simulate live attacks, real-time threat intel, or active monitoring. No fake terminal logs, no fake dashboards.
- Do not expose private contact info without explicit approval.

---

## 4. Owner facts (known so far)

**Identity**
- Name: Aktaruzzaman Rimon (alt: Akhtaruzzaman Rimon). *Ask which spelling to use publicly.*
- Education: BSc CSE student, AIUB, Bangladesh.

**Public profiles (use these exact URLs/handles)**
- LinkedIn: https://www.linkedin.com/in/hirerimon/
- GitHub: https://github.com/rimonxyg
- Facebook: handle `roninxyg` → https://www.facebook.com/roninxyg
- Instagram: handle `xyg.rimon` → https://www.instagram.com/xyg.rimon
- Email: **NOT PROVIDED YET** (ask; until then the contact section uses profile links only, no mailto).
- Domain: not finalized (use the Vercel URL first).
- *Ask the owner whether Facebook and Instagram should appear publicly (professional tone), or only LinkedIn + GitHub.*

**Cybersecurity (foundation → learning, be honest about level)**
- Ethical hacking and penetration-testing fundamentals; web app security testing
- Bug bounty and vulnerability assessment (learning/practice)
- Website malware identification and removal
- Lab-based practice; Windows privilege escalation and Active Directory security (learning)
- CTF participation (digital forensics, networking, web security)
- CEH training/certification (status to be verified)

**Networking / infrastructure**
- Cisco coursework, Cisco networking badge (exact badge name to verify)
- Subnetting, TCP/IP, routing, switching, network security fundamentals
- Interest in enterprise infrastructure, PBX systems, cloud-native communications
- Hands-on labs: virtual machines, isolated practice environments (Kali Linux, intentionally vulnerable systems)

**Software**
- Learning and applying React
- Experience with C++, C#, Java/Swing
- Interest in security tooling and automation

**Projects (labels are defaults; confirm with owner)**
- **CyberSecBD** — cybersecurity education/training platform *concept*: courses, quizzes, assignments, practical labs, progress tracking, badges, CTF-style learning. **Label: Concept / In progress. Never "launched."**
- **Screen Tab Locker** — browser extension for controlled browsing during educational activities. *Ask status and repo link.*
- **Personal security labs** — Kali Linux, VMs, intentionally vulnerable systems. *Ask what may be shown (sanitized).*
- More projects: only those the owner provides/approves.

**Direction**: penetration testing, red teaming, network security, Active Directory security, security research, possible advanced certifications.

**Owner's hardware**: laptop with 8 GB RAM. Keep the dev setup light; avoid heavy tooling and unnecessary dev servers/watchers running in parallel.

---

## 5. Creative direction (DEFAULT; owner may change)

### Concept: "The Atlas" — a topology map of one person
The site's central device is an **interactive network topology** where **nodes are my disciplines, tools, and projects** and **edges are real relationships** (e.g., *Networking → Security → CyberSecBD*). It is both **navigation** and **explanation**: selecting a node reveals what it means, my honest level, and linked projects.

Why: it connects cybersecurity + networking + software into one idea, helps visitors navigate, and avoids clichés. It must explain something real, not decorate.

### Visual language
- Obsidian / graphite / near-black base, restrained neutrals.
- **One accent: icy cyan** (default `#7DD3E8`; adjust only if contrast fails).
- High-contrast editorial typography, generous negative space.
- Fine technical hairlines, small meaningful annotations (e.g., "Layer 3 · routing", "Status: in progress"), subtle depth/shadow, restrained parallax.
- Premium hardware-launch / architectural-portfolio feel; futuristic but not sci-fi.

### Forbidden clichés
Matrix rain, endless fake terminal, random binary decoration, neon cyberpunk, heavy glow borders, glassmorphism overload, meaningless dashboard numbers, spinning Earth, fake live attacks, slow/gimmicky animation, retro hacker terminal, marketplace-template look.

### Alternative directions (kept for owner choice; do NOT build unless asked)
- **B — "Rack Elevation":** a vertical server-rack/patch-panel layout; each section is a rack unit. Strong metaphor, riskier on mobile.
- **C — "Packet Journey":** scroll follows a packet across OSI layers, each layer = a section. Great storytelling, more motion work.

### Signature interaction (one memorable thing)
**Hero topology that responds to the pointer** (nodes gently drift/attract; nearby edges brighten). On load, edges "draw in" once (≈1.2s). Clicking a node scrolls/filters to its content. On touch devices: tap-to-select, no hover dependence. With reduced motion: static diagram, no drift, no draw-in.
Implementation: **SVG + React state + a small `requestAnimationFrame` hook**. No Three.js.

---

## 6. Sitemap (single page + sections, no router needed)

1. **Hero** — name, positioning line, one honest sentence, CTAs ("Explore the Atlas", "Contact"), topology.
2. **About** — AIUB CSE, interests, learning philosophy, human tone.
3. **Atlas / Capabilities** — interactive map + node detail panel; each capability tagged `Foundation | Practicing | Demonstrated` (only with evidence; default `Foundation`/`Practicing`).
4. **Projects** — cards with status badge; click opens an accessible detail drawer/modal: problem, objective, approach, tools, my contribution, outcome (if known), links.
5. **Experience & Credentials** — SOHUB title (verified), verified badges/certs, verified competition. Timeline.
6. **Writing** — **omit entirely** until real articles exist (render nothing; keep the component ready).
7. **Contact** — LinkedIn, GitHub (+ approved socials), email once provided. Accessible; no fake form. (A `mailto:` link is fine once an email is supplied. Do not add a backend form.)
8. Footer — name, year, links.

Optional (only if owner asks): `/uses` page, light/dark toggle, project filter.

---

## 7. Technical decisions

**Stack**
| Piece | Choice | Role (explain in README) |
|---|---|---|
| React 18/19 + Vite | mandatory | UI library + fast dev server/bundler |
| JavaScript + JSX | default | beginner-friendly |
| CSS Modules + `tokens.css` | primary styling | scoped styles + design tokens |
| `motion` (Framer Motion) | **only if** needed for drawer/section transitions; prefer CSS first | declarative animation |
| `lucide-react` | icons | one consistent icon set |
| `@fontsource-variable/*` | self-hosted fonts | no external font request, faster, private |
| Three.js / R3F | **NOT used** | 3D adds no meaning here |
| React Router | **NOT used** | single page |
| Tailwind | **NOT used** | one styling approach |

Check current versions and compatibility (`npm view`, official docs) before installing. Pin via `package-lock.json`. Don't add libraries "because popular."

**Typography (default)**: display/headings — *Space Grotesk* or *Inter Tight*; body — *Inter*; technical labels — *JetBrains Mono*. Max 3 families, variable fonts, `font-display: swap`.

**Performance budget**
- Lighthouse (mobile) target: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95. Report actual numbers; do not guess.
- JS gzipped initial bundle: aim < 150 KB. Images: WebP/AVIF, sized, `loading="lazy"` below the fold. No video autoplay.
- Animate only `transform`/`opacity`. Pause rAF when tab hidden or element off-screen.

**Folder structure**
```
portfolio/
├─ CONTEXT.md  TASK.md  README.md  LEARNING_NOTES.md  CONTENT_INVENTORY.md
├─ index.html  vite.config.js  package.json  .gitignore  .env.example (only if needed)
├─ public/  favicon.svg  og-image.png  robots.txt  sitemap.xml
└─ src/
   ├─ main.jsx  App.jsx
   ├─ styles/  tokens.css  global.css
   ├─ data/    profile.js  projects.js  capabilities.js  experience.js  credentials.js  links.js
   ├─ components/
   │   ├─ layout/   Header, Footer, Section
   │   ├─ hero/     Hero, TopologyCanvas
   │   ├─ atlas/    Atlas, NodeDetail
   │   ├─ projects/ ProjectCard, ProjectDrawer, StatusBadge
   │   ├─ experience/ Timeline, CredentialItem
   │   ├─ contact/  ContactLinks
   │   └─ ui/       Button, Tag, VisuallyHidden
   ├─ hooks/   useReducedMotion, usePointer, useInView
   └─ utils/
```

**Data rule**: all content lives in `src/data/*.js` with fields like `{ id, title, status, verified, ... }`. Components only map over data. To update content, the owner edits one data file.

---

## 8. Working protocol for Antigravity

1. **Inspect the workspace first** (`ls`, check for an existing React project/`package.json`/git repo). If a React project exists, **extend it**; do not recreate it. Never delete or overwrite existing work without approval.
2. Work in **small, verifiable milestones**. After each: run `npm run build` (and lint if configured), fix errors, run the app, and **report only what was actually tested**. Don't claim tests that weren't run.
3. **Update CURRENT STATE (section 0) after each task**, and commit after each milestone with a clear message (`feat(hero): ...`).
4. **STOP and ask the owner** (in chat, concise, one question at a time, offer a proposed default) when:
   - a fact, asset, link, credential, or email is missing
   - a design preference materially changes the result
   - a dependency/version conflict appears
   - any destructive action is needed (delete, force-push, overwrite, reset)
   - creating/pushing to GitHub, or deploying to Vercel (ask before the first push and first deploy)
   - anything involves secrets or tokens
5. For **non-critical** details, pick a sensible default, record it in the Decision log, continue.
6. **Never guess critical facts.** Missing photo → use a tasteful monogram/SVG avatar and flag it. Missing email → omit mailto.
7. No `--force` git operations, no `rm -rf` outside `node_modules`/`dist`, no committing `.env`, tokens, or private data.
8. Keep dependencies minimal. Explain every added dependency in `LEARNING_NOTES.md`.
9. Write **comments that teach** at key React points (why this hook, why this prop), but don't over-comment trivial code.

### Integrations
- **GitHub**: ask owner for the repo name (suggested: `portfolio`) under `rimonxyg`. Prefer the GitHub MCP/CLI if available; otherwise give the owner exact commands. Branching: `main` (stable/deployed) + short-lived `feat/*` branches; merge per milestone with owner approval.
- **Vercel**: the owner *believes* Vercel is connected through MCP. **Verify it** (list projects / check auth). If it's not available or not authenticated, don't fake it; fall back to: Vercel dashboard → Add New Project → import the GitHub repo → framework preset Vite, build `npm run build`, output `dist`. Tell the owner exactly which clicks are needed.
- No environment variables should be required. If any seem needed, stop and ask.

---

## 9. Open questions for the owner (ask in priority order; record answers here)

| # | Question | Default if owner says "use default" | Answer |
|---|----------|--------------------------------------|--------|
| 1 | Public name spelling: Aktaruzzaman or Akhtaruzzaman Rimon? | Aktaruzzaman Rimon | Aktaruzzaman Rimon |
| 2 | Professional email to show publicly? | None; link LinkedIn/GitHub only | hire.rimon@gmail.com |
| 3 | Photo or avatar? | SVG monogram "AR" | Build interactive toggle/comparison to preview both |
| 4 | Show Facebook (`roninxyg`) and Instagram (`xyg.rimon`) publicly? | Show LinkedIn + GitHub only | Show all (LinkedIn, GitHub, Facebook, Instagram) |
| 5 | Exact Cisco competition name, year, official finalist title? | Hide until confirmed | |
| 6 | CEH: completed/certified? exact wording, credential ID? | Hide until confirmed | |
| 7 | Cisco badge exact name + link? | Hide until confirmed | |
| 8 | Status/links for CyberSecBD, Screen Tab Locker (repo/demo)? | Label as Concept / In progress, no links | |
| 9 | Approved SOHUB details (responsibilities, tech)? | Title + company only | |
| 10 | GitHub repo name and visibility (public)? | `portfolio`, public | |
| 11 | Accent color OK (icy cyan)? | Yes | |
| 12 | Custom domain? | Use `*.vercel.app` for now | |

---

## 10. Definition of done (summary; full checklist in TASK.md M17)
Builds without errors; all links work; content is 100% verified or hidden; responsive at 360 / 768 / 1280 / 1920 px; keyboard-only usable; reduced motion respected; Lighthouse targets reported with real numbers; on GitHub; live on Vercel; README + LEARNING_NOTES let the owner update content, build, and deploy.
