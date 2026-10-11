import { profile } from '../../data/profile'
import { Button } from '../ui/Button'
import { TopologyCanvas } from './TopologyCanvas'
import { ArrowDown, Mail, Network, Building2 } from 'lucide-react'
import styles from './Hero.module.css'

export function Hero({ onSelectNode, isVisible = true }) {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero Introduction">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.metaRow}>
            <span className={styles.eyebrow}>{profile.eyebrow}</span>
            <span className={styles.separator}>/</span>
            <span className={styles.location}>{profile.location}</span>
          </div>

          <h1 className={styles.name}>{profile.name}</h1>

          <p className={styles.headline}>{profile.headline}</p>

          <p className={styles.statement}>{profile.statement}</p>

          {profile.role && (
            <div className={styles.roleBadge}>
              <Building2 size={15} className={styles.roleIcon} aria-hidden="true" />
              <span>
                {profile.role} ·{' '}
                <a
                  href={profile.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.companyLink}
                >
                  {profile.company}
                </a>
              </span>
            </div>
          )}

          <div className={styles.actions}>
            <Button as="a" href="#atlas" variant="primary" size="lg">
              <Network size={16} aria-hidden="true" />
              Explore the Atlas
            </Button>
            <Button as="a" href="#contact" variant="outline" size="lg">
              <Mail size={16} aria-hidden="true" />
              Get in Touch
            </Button>
          </div>
        </div>

        {/* The Signature Topology Canvas */}
        <div className={styles.canvasContainer}>
          <div className={styles.canvasHeader}>
            <span className={styles.canvasStatus}>LIVE TOPOLOGY MATRIX</span>
            <span className={styles.canvasHint}>Interactive · Hover or click nodes to explore</span>
          </div>
          <TopologyCanvas onSelectNode={onSelectNode} isVisible={isVisible} />
        </div>

        <div className={styles.scrollIndicator}>
          <a href="#about" className={styles.scrollLink} aria-label="Scroll to about section">
            <span className={styles.scrollText}>EXPLORE</span>
            <ArrowDown size={14} className={styles.scrollArrow} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
