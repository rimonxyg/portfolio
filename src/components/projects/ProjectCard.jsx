import { StatusBadge } from './StatusBadge'
import { Tag } from '../ui/Tag'
import { ArrowUpRight } from 'lucide-react'
import styles from './ProjectCard.module.css'

export function ProjectCard({ project, onSelect }) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={() => onSelect(project.id)}
      aria-haspopup="dialog"
      aria-label={`View project details for ${project.title}`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          <ArrowUpRight size={18} className={styles.arrowIcon} aria-hidden="true" />
        </div>
        <StatusBadge status={project.status} label={project.statusLabel} />
      </div>

      <p className={styles.summary}>{project.summary}</p>

      {project.tools && project.tools.length > 0 && (
        <div className={styles.tags}>
          {project.tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
      )}
    </button>
  )
}
