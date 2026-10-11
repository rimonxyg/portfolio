import styles from './Section.module.css'

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className = '',
  narrow = false,
  headerAction = null,
}) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`${styles.section} ${narrow ? styles.narrow : ''} ${className}`}
    >
      <div className={styles.container}>
        {(title || eyebrow) && (
          <header className={styles.header}>
            <div className={styles.headerContent}>
              {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
              {title && (
                <h2 id={headingId} className={styles.title}>
                  {title}
                </h2>
              )}
              {description && <p className={styles.description}>{description}</p>}
            </div>
            {headerAction && <div className={styles.headerAction}>{headerAction}</div>}
          </header>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  )
}
