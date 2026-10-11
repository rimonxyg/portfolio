import styles from './Button.module.css'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  className = '',
  ...props
}) {
  return (
    <Component
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
