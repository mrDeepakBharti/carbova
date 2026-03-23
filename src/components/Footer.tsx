import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>C</span>
            <span className={styles.logoText}>CARBOVA</span>
          </div>
          <p className={styles.tagline}>Renewable Energy Solutions</p>
          <p className={styles.company}>Universal Multi Ventures Private Limited</p>
          <p className={styles.copy}>Clean Energy · Circular Economy · Carbon Markets</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>Navigate</h4>
          {[
            { to: '/', l: 'Home' },
            { to: '/about', l: 'About' },
            { to: '/products', l: 'Products' },
            { to: '/calculators', l: 'Calculators' },
            { to: '/sustainability', l: 'Sustainability' },
          ].map(x => <Link key={x.to} to={x.to} className={styles.fLink}>{x.l}</Link>)}
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>Company</h4>
          {[
            { to: '/innovation', l: 'Innovation & Patents' },
            // { to: '/projects', l: 'Projects' },
            { to: '/partnership', l: 'Partnership' },
            { to: '/contact', l: 'Contact Us' },
          ].map(x => <Link key={x.to} to={x.to} className={styles.fLink}>{x.l}</Link>)}
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>Contact</h4>
          <a href="mailto:info@carbova.in" className={styles.fLink}>✉ info@carbova.in</a>
          <a href="tel:+910000000000" className={styles.fLink}>☏ +91 XXXXX XXXXX</a>
          <span className={styles.fLink}>⌂ India</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} CARBOVA — Universal Multi Ventures Pvt. Ltd.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  )
}