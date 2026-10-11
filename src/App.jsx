import { useState } from 'react'
import { Header } from './components/layout/Header'
import { Hero } from './components/hero/Hero'
import { Atlas } from './components/atlas/Atlas'
import { About } from './components/about/About'
import { Section } from './components/layout/Section'
import { Footer } from './components/layout/Footer'

function App() {
  const [selectedNodeId, setSelectedNodeId] = useState('webapp-sec')

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero onSelectNode={setSelectedNodeId} />

        <Atlas
          selectedNodeId={selectedNodeId}
          onSelectNode={setSelectedNodeId}
        />

        <About />

        <Section id="projects" eyebrow="Selected Work" title="Projects">
          <p>Security tooling, educational systems, and browser extensions.</p>
        </Section>

        <Section id="experience" eyebrow="Professional" title="Experience & Credentials">
          <p>Internship and verified coursework.</p>
        </Section>

        <Section id="contact" eyebrow="Get in Touch" title="Contact">
          <p>Reach out for collaborations, discussions, or opportunities.</p>
        </Section>
      </main>

      <Footer />
    </>
  )
}

export default App
