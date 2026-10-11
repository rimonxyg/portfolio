import styles from './StatusBadge.module.css'

export function StatusBadge({ status, label }) {
  const getStatusClass = (s) => {
    switch (s) {
      case 'shipped':
        return styles.shipped
      case 'in-progress':
        return styles.inProgress
      case 'concept':
        return styles.concept
      case 'learning':
      default:
        return styles.learning
    }
  }

  return (
    <span className={`${styles.badge} ${getStatusClass(status)}`}>
      <span className={styles.dot} aria-hidden="true" />
      <span>{label || status}</span>
    </span>
  )
}
