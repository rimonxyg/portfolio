import { experiences } from '../../data/experience'
import { credentials } from '../../data/credentials'
import { Timeline } from './Timeline'
import { Section } from '../layout/Section'
import { Award, ExternalLink } from 'lucide-react'
import styles from './Experience.module.css'

export function Experience() {
  const verifiedExperiences = experiences.filter((e) => e.verified)
  const verifiedCredentials = credentials.filter((c) => c.verified)

  return (
    <Section
      id="experience"
      eyebrow="Timeline & Roles"
      title="Experience"
      description="Professional industry internship and academic security engineering background."
    >
      <div className={styles.container}>
        {/* Experience Timeline */}
        <div className={styles.timelineWrapper}>
          <Timeline experiences={verifiedExperiences} />
        </div>

        {/* Credentials & Certifications (Rendered ONLY if verified credentials exist) */}
        {verifiedCredentials.length > 0 && (
          <div className={styles.credentialsBlock}>
            <h3 className={styles.credentialsTitle}>
              <Award size={18} aria-hidden="true" /> Verified Certifications & Badges
            </h3>
            <div className={styles.credentialsGrid}>
              {verifiedCredentials.map((cred) => (
                <div key={cred.id} className={styles.credCard}>
                  <div className={styles.credInfo}>
                    <span className={styles.credType}>{cred.type}</span>
                    <h4 className={styles.credName}>{cred.title}</h4>
                    <span className={styles.credIssuer}>{cred.issuer}</span>
                  </div>
                  {cred.url && (
                    <a
                      href={cred.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.credLink}
                      aria-label={`Verify ${cred.title}`}
                    >
                      <span>Verify</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
