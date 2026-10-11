# Learning Notes — React & Portfolio Architecture

Welcome, Aktaruzzaman! This guide is written specifically for you as you learn React. It explains the exact architecture of your portfolio so you can confidently understand, explain, and customize every part of your code.

---

## 1. What Each Dependency Does

- **`react` & `react-dom`** (`v19.x`):
  The core UI library. React lets us build user interfaces out of small, self-contained components that automatically re-render when their underlying data changes.
- **`vite`** (`v8.x`):
  The build tool and local dev server. It compiles your JSX files into vanilla JavaScript, hot-reloads changes in milliseconds while you edit, and produces an optimized production bundle.
- **`lucide-react`**:
  A clean, open-source icon set. It gives us consistent, crisp SVG icons like `Network`, `Shield`, `Terminal`, and `Mail`.
- **`@fontsource-variable/*`** (`Space Grotesk`, `Inter`, `JetBrains Mono`):
  Self-hosted variable font files. Hosting fonts locally inside your repo means zero third-party network requests to Google Fonts, ensuring faster loads, privacy, and zero layout shifting.
- **`oxlint`**:
  An ultra-fast linter that checks your JavaScript and React code for errors, purity issues, and dead code before you commit.

---

## 2. Core React Concepts (With Real Examples in Your Repo)

### A. Components & Props
A **Component** is a reusable JavaScript function that returns UI (JSX). **Props** are arguments passed into components from their parent.
- **Example**: `src/components/ui/Tag.jsx`
  ```jsx
  export function Tag({ children, variant = 'default' }) {
    return <span className={`${styles.tag} ${styles[variant]}`}>{children}</span>
  }
  ```
  Here `children` and `variant` are props. When you use `<Tag variant="accent">React</Tag>`, it renders with the accent styling.

### B. State (`useState`)
State is memory inside a component. When state changes, React automatically updates the DOM.
- **Example 1**: Avatar switcher in `src/components/about/About.jsx`
  ```jsx
  const [avatarMode, setAvatarMode] = useState('photo')
  ```
  Clicking the "AR Monogram" button calls `setAvatarMode('monogram')`, instantly switching between your real portrait and the technical SVG monogram.
- **Example 2**: Active project drawer in `src/App.jsx`
  ```jsx
  const [activeProjectId, setActiveProjectId] = useState(null)
  ```
  Clicking a project card sets this state to that project's ID, opening the detail drawer.

### C. Lifting State Up
When two components need to share the same data, we store the state in their common parent (`App.jsx`).
- **Example**: `src/App.jsx`
  ```jsx
  const [selectedNodeId, setSelectedNodeId] = useState('webapp-sec')
  ```
  - `Hero.jsx` receives `onSelectNode={setSelectedNodeId}` so clicking a node in the hero topology preselects that node.
  - `Atlas.jsx` receives `selectedNodeId={selectedNodeId}` and highlights that node and its connected edges in the large topology map!

### D. Effects (`useEffect`) and Refs (`useRef`)
- **`useRef`**: Holds a direct reference to a real DOM element without triggering re-renders.
  - **Example**: `src/components/projects/ProjectDrawer.jsx` uses `closeBtnRef` to focus the close button when the modal opens.
- **`useEffect`**: Runs side effects, such as listening to keyboard keys, scroll events, or timers.
  - **Example**: Listening for the `Escape` key to close dialogs:
    ```jsx
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onClose])
    ```
    *Notice the return statement*: Always clean up event listeners to prevent memory leaks!

### E. Custom Hooks
Custom hooks package complex browser logic into simple, reusable functions starting with `use`:
1. **`useReducedMotion`** (`src/hooks/useReducedMotion.js`): Checks if the visitor has requested reduced motion in their Windows/Mac accessibility settings.
2. **`useInView`** (`src/hooks/useInView.js`): Uses the browser's `IntersectionObserver` to pause animations when an element is scrolled off-screen.
3. **`usePointer`** (`src/hooks/usePointer.js`): Smoothly tracks mouse coordinates using `requestAnimationFrame`.

### F. Mapping Data (`.map()`) & Keys
All your projects, capabilities, and links are kept in pure data files (`src/data/*.js`). Components render them using JavaScript's `.map()` method.
- **Example**: `src/components/projects/Projects.jsx`
  ```jsx
  {verifiedProjects.map((project) => (
    <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
  ))}
  ```
  *The `key` prop*: React requires a unique `key` for each item in a list so it can track which item was added, changed, or removed efficiently.

---

## 3. Project Directory Tour

```
src/
├── components/
│   ├── about/        # Profile bio, "now" status, dual avatar switcher
│   ├── atlas/        # The Atlas SVG graph and NodeDetail side panel
│   ├── contact/      # ContactLinks and copy-email button
│   ├── experience/   # Experience timeline and verified credentials
│   ├── hero/         # Hero presentation and signature TopologyCanvas
│   ├── layout/       # Header, Footer, Section containers
│   ├── projects/     # ProjectCard, ProjectDrawer modal, StatusBadge
│   └── ui/           # Button, Tag, VisuallyHidden, BrandIcons
├── data/             # Pure data layer (all your content lives here!)
│   ├── profile.js
│   ├── links.js
│   ├── experience.js
│   ├── projects.js
│   ├── capabilities.js
│   ├── credentials.js
│   └── writing.js
├── hooks/            # usePointer, useInView, useReducedMotion
└── styles/
    ├── tokens.css    # Design tokens (colors, fluid typography, spacing)
    └── global.css    # CSS reset, body background, accessibility outlines
```

---

## 4. "How Do I..." Recipes

### How do I add a new project?
1. Open `src/data/projects.js`.
2. Add a new object to the `projects` array:
   ```javascript
   {
     id: 'my-new-tool',
     title: 'Packet Inspector Tool',
     status: 'in-progress',
     statusLabel: 'In Progress',
     summary: 'Brief 1-line description.',
     problem: 'What problem did this solve?',
     objective: 'What was your goal?',
     approach: 'How did you build it?',
     tools: ['Python', 'Scapy', 'Wireshark'],
     contribution: 'Wrote the packet parser logic.',
     outcome: null,
     links: [],
     verified: true, // Set to true to show on live site
   }
   ```

### How do I add a certification or competition once verified?
1. Open `src/data/credentials.js`.
2. Locate the credential (or add a new one) and set `verified: true` with your official credential URL.
3. It will immediately appear in your live Experience section!

### How do I change the accent color?
1. Open `src/styles/tokens.css`.
2. Edit `--accent: #7DD3E8;` to any color you like (e.g. `#38BDF8` or `#00E5FF`). All borders, glowing effects, and buttons will adapt automatically.

### How do I add a blog article or writeup?
1. Open `src/data/writing.js`.
2. Add an article to the `articles` array.
3. As soon as at least 1 article exists, the **Writing** section and navigation link will automatically appear on your website!

### How do I verify my content claims?
Run this terminal command:
```bash
npm run check:content
```
It prints a complete audit of all verified vs unverified items.

---

## 5. 10 Self-Test Questions for pair programming & interviews

1. **Why do we use CSS Modules (`[Component].module.css`) instead of regular CSS classes?**
   *Answer*: CSS Modules automatically scope class names to the component, preventing styles from leaking or colliding across files.
2. **What does the `useReducedMotion` hook do, and why is it important?**
   *Answer*: It checks if the user's OS has "Reduce motion" enabled. If enabled, animations are disabled to prevent motion sickness and improve accessibility.
3. **Why do we pass `key={project.id}` when mapping over a list of projects?**
   *Answer*: React uses the key to identify which items have changed, been added, or been removed, optimizing DOM updates.
4. **Why is the state `selectedNodeId` stored in `App.jsx` instead of inside `TopologyCanvas.jsx`?**
   *Answer*: To lift state up so both the Hero and the Atlas can share the same active node.
5. **What happens if an article in `src/data/writing.js` is not present?**
   *Answer*: The `Writing` component returns `null` and the nav link is excluded dynamically.
6. **Why do we wrap event listener attachments in a `useEffect` return cleanup function?**
   *Answer*: To remove the listener when the component unmounts, preventing memory leaks and duplicate handler execution.
7. **What is the difference between `npm run dev` and `npm run build`?**
   *Answer*: `dev` starts a development server with Hot Module Replacement for live editing. `build` compiles and minifies production assets into the `dist/` directory.
8. **Why do we use variable fonts (`@fontsource-variable/*`) instead of linking to Google Fonts in HTML?**
   *Answer*: Self-hosted fonts eliminate external render-blocking network requests, load faster, protect user privacy, and avoid layout shifts.
9. **How does `IntersectionObserver` in `useInView` help laptop battery life and performance?**
   *Answer*: It detects when an element is outside the viewport and pauses pointer tracking and canvas frame calculations.
10. **What is the purpose of `src/data/*` separation from `src/components/*`?**
    *Answer*: Separation of concerns: components focus purely on presentation and accessibility, while content can be updated in one place without touching JSX.
