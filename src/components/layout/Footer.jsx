import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span className={styles.statusText}>Systems Nominal · Dhaka, BD</span>
        </div>

        <div className={styles.center}>
          <p className={styles.copyright}>
            © {currentYear} Aktaruzzaman Rimon · Built with React & Vite
          </p>
        </div>

        <div className={styles.right}>
          <a href="#hero" className={styles.backToTop}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
