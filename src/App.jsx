import { useState } from 'react'
import { Header } from './components/layout/Header'
import { Hero } from './components/hero/Hero'
import { Atlas } from './components/atlas/Atlas'
import { About } from './components/about/About'
import { Projects } from './components/projects/Projects'
import { Experience } from './components/experience/Experience'
import { Writing } from './components/writing/Writing'
import { ContactLinks } from './components/contact/ContactLinks'
import { Footer } from './components/layout/Footer'
import { articles } from './data/writing'

function App() {
  const [selectedNodeId, setSelectedNodeId] = useState('webapp-sec')
  const [activeProjectId, setActiveProjectId] = useState(null)

  // Build nav dynamically: omit Writing if empty
  const navItems = [
    { label: 'Atlas', href: '#atlas' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    ...(articles && articles.length > 0 ? [{ label: 'Writing', href: '#writing' }] : []),
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header navItems={navItems} />

      <main id="main-content">
        <Hero onSelectNode={setSelectedNodeId} />

        <Atlas
          selectedNodeId={selectedNodeId}
          onSelectNode={setSelectedNodeId}
          onOpenProject={setActiveProjectId}
        />

        <About />

        <Projects
          activeProjectId={activeProjectId}
          onSelectProject={setActiveProjectId}
        />

        <Experience />

        <Writing />

        <ContactLinks />
      </main>

      <Footer />
    </>
  )
}

export default App
