import { articles } from '../../data/writing'
import { Section } from '../layout/Section'
import styles from './Writing.module.css'

export function Writing() {
  // If no articles exist, render nothing per Truthfulness rules
  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <Section
      id="writing"
      eyebrow="Technical Writeups"
      title="Writing & Notes"
      description="Reflections, system walkthroughs, and security findings."
    >
      <div className={styles.grid}>
        {articles.map((art) => (
          <article key={art.id} className={styles.card}>
            <span className={styles.date}>{art.date}</span>
            <h3 className={styles.title}>{art.title}</h3>
            <p className={styles.summary}>{art.summary}</p>
            {art.url && (
              <a href={art.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Read writeup →
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
