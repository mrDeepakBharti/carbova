import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/',              label: 'Home' },
  { to: '/about',         label: 'About' },
  { to: '/products',      label: 'Products' },
  { to: '/calculators',   label: 'Calculators' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/innovation',    label: 'Innovation' },
  { to: '/projects',      label: 'Projects' },
  { to: '/partnership',   label: 'Partnership' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.inner}`}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => { navigate('/'); setMenuOpen(false) }}>
          <span className={styles.logoMark}>C</span>
          <span className={styles.logoText}>CARBOVA</span>
        </button>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <button className={`btn btn-primary ${styles.ctaBtn}`} onClick={() => navigate('/contact')}>
          Get Quote
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        {/* Hamburger */}
        <button className={`${styles.ham} ${menuOpen ? styles.hamOpen : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={styles.mobileLink}>Contact</NavLink>
          <button className="btn btn-primary" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }} onClick={() => { navigate('/contact'); setMenuOpen(false) }}>
            Get Quote →
          </button>
        </nav>
      </div>
    </header>
  )
}
