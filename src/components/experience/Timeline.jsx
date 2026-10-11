import { ExternalLink, Calendar, MapPin, Sparkles } from 'lucide-react'
import { Tag } from '../ui/Tag'
import styles from './Timeline.module.css'

export function Timeline({ experiences = [] }) {
  if (experiences.length === 0) return null

  return (
    <div className={styles.timeline}>
      {experiences.map((exp) => (
        <div key={exp.id} className={styles.item}>
          {/* Timeline marker */}
          <div className={styles.markerCol}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.line} aria-hidden="true" />
          </div>

          {/* Content Card */}
          <div className={styles.card}>
            <div className={styles.header}>
              <div>
                <span className={styles.roleTitle}>{exp.role}</span>
                <div className={styles.orgRow}>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.orgLink}
                  >
                    <span>{exp.org}</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                  <span className={styles.orgType}>· {exp.type}</span>
                </div>
              </div>

              <div className={styles.metaRow}>
                <div className={styles.periodBadge}>
                  <Calendar size={13} aria-hidden="true" />
                  <span>{exp.period}</span>
                </div>
                {exp.location && (
                  <div className={styles.locationBadge}>
                    <MapPin size={13} aria-hidden="true" />
                    <span>{exp.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Strict Truthfulness rule: render responsibilities ONLY if provided */}
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <ul className={styles.responsibilitiesList}>
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            )}

            {/* Visually separated Learning Focus block */}
            {exp.learningFocus && exp.learningFocus.length > 0 && (
              <div className={styles.learningBlock}>
                <div className={styles.learningHeading}>
                  <Sparkles size={13} aria-hidden="true" />
                  <span>Learning & Practice Focus Areas</span>
                </div>
                <div className={styles.tagsRow}>
                  {exp.learningFocus.map((item) => (
                    <Tag key={item} variant="default">
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
