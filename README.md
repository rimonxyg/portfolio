# Aktaruzzaman Rimon — Portfolio

> Cybersecurity Practitioner · Network Engineer · CSE Student (American International University–Bangladesh)

A focused, high-performance personal portfolio built with React and Vite, featuring an interactive network topology canvas ("The Atlas") connecting core disciplines, security labs, and software engineering.

---

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: CSS Modules + Global Design Tokens (`tokens.css`)
- **Typography**: Space Grotesk, Inter, JetBrains Mono (via `@fontsource-variable/*`, self-hosted)
- **Icons**: `lucide-react`
- **Linting**: Oxlint

---

## Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run content verification check
npm run check:content

# Lint codebase
npm run lint

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
portfolio/
├─ CONTEXT.md          # Architecture & single source of truth
├─ TASK.md             # Milestone checklist & verification plan
├─ CONTENT_INVENTORY.md# Verification status for all claims
├─ LEARNING_NOTES.md   # Beginner-friendly guide explaining all React concepts used
├─ public/             # Static assets (favicons, robots, sitemap, og-image)
└─ src/
   ├─ components/      # Modular, accessible UI components (<150 LOC each)
   ├─ data/            # Pure data layer (profile, capabilities, projects, etc.)
   ├─ hooks/           # Custom hooks (usePointer, useInView, useReducedMotion)
   └─ styles/          # Design tokens (tokens.css) & global styles (global.css)
```

---

## License

Personal Portfolio — All Rights Reserved.
