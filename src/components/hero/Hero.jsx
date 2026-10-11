import { profile } from '../../data/profile'
import { Button } from '../ui/Button'
import { TopologyCanvas } from './TopologyCanvas'
import { ArrowDown, Mail, Network, Building2 } from 'lucide-react'
import styles from './Hero.module.css'

export function Hero({ onSelectNode, isVisible = true }) {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero Introduction">
      <div className={styles.container}>
        <div className={styles.introGrid}>
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

          {/* Unique Cyber-Identity Card in Hero */}
          <div className={styles.heroProfileCard}>
            <div className={styles.cardHeader}>
              <div className={styles.terminalDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.cardId}>SEC_ID // AR-2026</span>
            </div>

            <div className={styles.photoContainer}>
              <div className={styles.scanlineOverlay} aria-hidden="true" />
              <img
                src={profile.avatarUrl}
                alt={`${profile.name} portrait`}
                className={styles.heroPhoto}
                width="240"
                height="300"
                loading="eager"
              />
              <div className={styles.reticleTopLeft} aria-hidden="true" />
              <div className={styles.reticleBottomRight} aria-hidden="true" />
              <div className={styles.badgeLive}>
                <span className={styles.pulsingDot} aria-hidden="true" />
                <span>ACTIVE OPERATOR</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.cardField}>
                <span className={styles.fieldLabel}>DISCIPLINE</span>
                <span className={styles.fieldValue}>Security & Networks</span>
              </div>
              <div className={styles.cardField}>
                <span className={styles.fieldLabel}>BASE</span>
                <span className={styles.fieldValue}>Dhaka, Bangladesh</span>
              </div>
            </div>
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
