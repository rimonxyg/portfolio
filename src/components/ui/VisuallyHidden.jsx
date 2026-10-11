import styles from './VisuallyHidden.module.css'

export function VisuallyHidden({ children, as: Component = 'span', ...props }) {
  return (
    <Component className={styles.visuallyHidden} {...props}>
      {children}
    </Component>
  )
}
