import { useState } from 'react'
import { profile } from '../../data/profile'
import { Section } from '../layout/Section'
import { Terminal, Shield, Network, GraduationCap, Briefcase, BookOpen, Layers } from 'lucide-react'
import styles from './About.module.css'

export function About() {
  const [avatarMode, setAvatarMode] = useState('photo') // 'photo' | 'monogram'

  const nowItems = [
    {
      icon: GraduationCap,
      label: 'Studying',
      value: 'B.Sc. in CSE at American International University–Bangladesh (AIUB)',
    },
    {
      icon: Briefcase,
      label: 'Working',
      value: 'Software and Cybersecurity Intern at Solution Hub Technologies (SOHUB)',
    },
    {
      icon: BookOpen,
      label: 'Learning',
      value: 'React & modern web architecture, network protocols, penetration testing fundamentals',
    },
  ]

  const principles = [
    {
      number: '01',
      title: 'Systems Internals First',
      description:
        'Understanding how networking stacks, operating system kernels, and web frameworks operate natively before analyzing their failure modes.',
      icon: Network,
    },
    {
      number: '02',
      title: 'Strict Lab Discipline',
      description:
        'Practicing exclusively in isolated, non-destructive virtualization environments (Kali Linux, virtual hosts) with ethical authorization.',
      icon: Shield,
    },
    {
      number: '03',
      title: 'Engineering & Automation',
      description:
        'Moving beyond third-party point-and-click tools by writing code (C++, C#, JavaScript, Python) to understand and automate workflows.',
      icon: Terminal,
    },
  ]

  return (
    <Section id="about" eyebrow="Background & Philosophy" title="About Me">
      <div className={styles.grid}>
        {/* Left Column: Avatar & Current Focus */}
        <div className={styles.profileColumn}>
          <div className={styles.avatarCard}>
            <div className={styles.avatarWrapper}>
              {avatarMode === 'photo' ? (
                <img
                  src={profile.avatarUrl}
                  alt={`${profile.name} profile portrait`}
                  className={styles.avatarPhoto}
                  width="180"
                  height="180"
                  loading="lazy"
                  onError={() => setAvatarMode('monogram')}
                />
              ) : (
                <div className={styles.avatarMonogram}>
                  <span>{profile.initials}</span>
                </div>
              )}
            </div>

            {/* Toggle visual mode */}
            <div className={styles.avatarToggle}>
              <button
                type="button"
                className={`${styles.toggleBtn} ${avatarMode === 'photo' ? styles.toggleActive : ''}`}
                onClick={() => setAvatarMode('photo')}
                aria-pressed={avatarMode === 'photo'}
              >
                GitHub Photo
              </button>
              <button
                type="button"
                className={`${styles.toggleBtn} ${avatarMode === 'monogram' ? styles.toggleActive : ''}`}
                onClick={() => setAvatarMode('monogram')}
                aria-pressed={avatarMode === 'monogram'}
              >
                AR Monogram
              </button>
            </div>

            <div className={styles.identityMeta}>
              <h3 className={styles.metaName}>{profile.name}</h3>
              <p className={styles.metaDegree}>{profile.university}</p>
            </div>
          </div>

          {/* "Now" Status Block */}
          <div className={styles.nowCard}>
            <div className={styles.nowHeader}>
              <Layers size={14} className={styles.nowIcon} aria-hidden="true" />
              <span className={styles.nowTitle}>CURRENT FOCUS</span>
            </div>
            <ul className={styles.nowList}>
              {nowItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className={styles.nowItem}>
                    <Icon size={16} className={styles.itemIcon} aria-hidden="true" />
                    <div>
                      <span className={styles.itemLabel}>{item.label}: </span>
                      <span className={styles.itemValue}>{item.value}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Core Principles */}
        <div className={styles.narrativeColumn}>
          <div className={styles.bioText}>
            <p className={styles.leadParagraph}>
              I am an undergraduate Computer Science & Engineering student at{' '}
              <strong>American International University–Bangladesh (AIUB)</strong>, focusing on the
              intersection of <strong>network engineering, cybersecurity, and software development</strong>.
            </p>
            <p className={styles.bodyParagraph}>
              My interest lies in building a rigorous understanding of how data moves across physical
              and virtual architectures, and how modern web systems can be designed to withstand
              unauthorized intrusion. Currently contributing as a Software and Cybersecurity Intern at
              Solution Hub Technologies (SOHUB), I balance academic coursework with hands-on security
              labs and frontend development in React.
            </p>
          </div>

          {/* 3 Guiding Principles */}
          <div className={styles.principlesSection}>
            <h3 className={styles.principlesHeading}>Learning Principles</h3>
            <div className={styles.principlesGrid}>
              {principles.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.number} className={styles.principleCard}>
                    <div className={styles.principleHeader}>
                      <span className={styles.principleNum}>{p.number}</span>
                      <Icon size={18} className={styles.principleIcon} aria-hidden="true" />
                    </div>
                    <h4 className={styles.principleTitle}>{p.title}</h4>
                    <p className={styles.principleDesc}>{p.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
