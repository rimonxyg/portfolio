# Learning Notes — React & Portfolio Architecture

Welcome! This document explains how everything in this portfolio is constructed using modern React and web standards. It's written so you can easily understand, explain, and maintain every part of your code.

---

## 1. What Each Dependency Does

- **`react` & `react-dom`**: The core React UI library. It allows us to break the website down into reusable, self-contained components that reactively update when state changes.
- **`vite`**: An ultra-fast development server and modern bundler. It handles hot module replacement (instant preview while you edit) and produces an optimized static build for production.
- **`lucide-react`**: A clean, uniform icon library. We use it for technical symbols, links, and contact icons.
- **`@fontsource-variable/*`**: Self-hosted variable fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`). Hosting fonts locally eliminates external network requests to Google Fonts, ensuring faster loads, privacy, and zero layout shift.

---

## 2. React Concepts Used in this Project

*(This section will be expanded with exact file:line references as components are built in each milestone)*

- **Components & Props**: Breaking UI into modular blocks (e.g. `Section`, `Header`, `ProjectCard`).
- **State (`useState`)**: Managing dynamic UI states such as open mobile navigation, selected topology nodes in The Atlas, and active filter tabs.
- **Effects & Refs (`useEffect`, `useRef`)**: Interacting directly with the browser DOM, such as capturing mouse movement for pointer reactions or drawing SVG network paths.
- **Custom Hooks**:
  - `useReducedMotion`: Checks whether the user has requested reduced motion in their OS settings.
  - `useInView`: Efficiently pauses animations when elements are scrolled out of view.
  - `usePointer`: Smoothly tracks pointer coordinates using `requestAnimationFrame`.
- **Data-Driven Architecture**: All data lives in `src/data/*.js`. Components render by looping over this data (`.map()`), making updates effortless without modifying UI components.
- **Lifting State Up**: Sharing state between siblings (e.g. selecting a node in the Atlas topology updates the adjacent `NodeDetail` panel).

---

## 3. "How Do I..." Recipes

### How do I update my profile or contact info?
Edit `src/data/profile.js` or `src/data/links.js`.

### How do I add or update a project?
Open `src/data/projects.js` and add an object to the list. Set `verified: true` only when ready to show publicly.

### How do I add a new verified credential or certification?
Open `src/data/credentials.js` and set `verified: true` with your certificate details.

### How do I run the project locally?
```bash
npm run dev
```

### How do I check if all published content is verified?
```bash
npm run check:content
```
