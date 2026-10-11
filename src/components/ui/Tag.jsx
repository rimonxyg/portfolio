import styles from './Tag.module.css'

export function Tag({ children, variant = 'default', className = '', ...props }) {
  return (
    <span className={`${styles.tag} ${styles[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}
