import { useEffect, useRef } from 'react'
import { StatusBadge } from './StatusBadge'
import { Tag } from '../ui/Tag'
import { X, ExternalLink, Target, AlertCircle, Wrench, CheckCircle2, UserCheck } from 'lucide-react'
import styles from './ProjectDrawer.module.css'

export function ProjectDrawer({ project, onClose }) {
  const drawerRef = useRef(null)
  const closeBtnRef = useRef(null)

  // Esc key closes dialog
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Body scroll lock & focus trap
  useEffect(() => {
    if (!project) return

    document.body.style.overflow = 'hidden'
    if (closeBtnRef.current) {
      closeBtnRef.current.focus()
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  if (!project) return null

  return (
    <div className={styles.backdrop} onClick={onClose} role="presentation">
      <div
        ref={drawerRef}
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-drawer-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <StatusBadge status={project.status} label={project.statusLabel} />
            <h2 id="project-drawer-title" className={styles.title}>
              {project.title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Body Content */}
        <div className={styles.body}>
          {/* Summary */}
          <p className={styles.summary}>{project.summary}</p>

          {/* Problem */}
          {project.problem && (
            <div className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <AlertCircle size={16} aria-hidden="true" /> Problem Statement
              </h3>
              <p className={styles.sectionText}>{project.problem}</p>
            </div>
          )}

          {/* Objective */}
          {project.objective && (
            <div className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <Target size={16} aria-hidden="true" /> Core Objective
              </h3>
              <p className={styles.sectionText}>{project.objective}</p>
            </div>
          )}

          {/* Approach */}
          {project.approach && (
            <div className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <Wrench size={16} aria-hidden="true" /> Technical Approach
              </h3>
              <p className={styles.sectionText}>{project.approach}</p>
            </div>
          )}

          {/* Tools */}
          {project.tools && project.tools.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <Wrench size={16} aria-hidden="true" /> Technologies & Frameworks
              </h3>
              <div className={styles.tagsGrid}>
                {project.tools.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          )}

          {/* My Contribution */}
          {project.contribution && (
            <div className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <UserCheck size={16} aria-hidden="true" /> My Contribution
              </h3>
              <p className={styles.sectionText}>{project.contribution}</p>
            </div>
          )}

          {/* Outcome (Only rendered if not null) */}
          {project.outcome && (
            <div className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <CheckCircle2 size={16} aria-hidden="true" /> Results & Outcome
              </h3>
              <p className={styles.sectionText}>{project.outcome}</p>
            </div>
          )}

          {/* External Links (Only rendered if real URLs provided) */}
          {project.links && project.links.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionHeading}>Verified Project Links</h3>
              <div className={styles.linksRow}>
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
