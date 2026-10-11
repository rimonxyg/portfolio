import { useState } from 'react'
import { Header } from './components/layout/Header'
import { Hero } from './components/hero/Hero'
import { Section } from './components/layout/Section'
import { Footer } from './components/layout/Footer'

function App() {
  const [_selectedNodeId, setSelectedNodeId] = useState('webapp-sec')

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero onSelectNode={setSelectedNodeId} />

        <Section id="atlas" eyebrow="Interactive Topology" title="The Atlas">
          <p>A connected map of disciplines, tools, and learning projects.</p>
        </Section>

        <Section id="about" eyebrow="Background" title="About">
          <p>CSE student at AIUB exploring how systems work and how they break.</p>
        </Section>

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
