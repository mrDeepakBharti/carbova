import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import carbovaLogo from '../assets/carbova-logo-transparent.png'

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
  const [open, setMenuOpen]       = useState(false)
  const nav = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const headerStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
    padding: scrolled ? '8px 0' : '14px 0',
    background: scrolled ? 'rgba(8,15,9,0.97)' : 'rgba(8,15,9,0.6)',
    backdropFilter: 'blur(20px)',
    borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
    transition: 'all 0.4s ease',
  }

  return (
    <header style={headerStyle}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        {/* Logo */}
        <button onClick={() => { nav('/'); setMenuOpen(false) }} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={carbovaLogo} alt="CARBOVA" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
          <div>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: 22, fontWeight: 700, color: 'var(--t-h)', letterSpacing: 2, lineHeight: 1 }}>CARBOVA</div>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 8.5, color: 'var(--gold)', letterSpacing: 1.5, lineHeight: 1.2 }}>Carbon that Creates Value</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 0, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--f-display)', fontSize: 13, fontWeight: 600,
                letterSpacing: 1, textTransform: 'uppercase',
                padding: '8px 11px', color: isActive ? 'var(--gold)' : 'rgba(194,187,168,0.75)',
                borderBottom: isActive ? '2px solid var(--gold)' : '2px solid transparent',
                transition: 'all 0.2s', whiteSpace: 'nowrap',
              })}
            >{l.label}</NavLink>
          ))}
        </nav>

        {/* CTA */}
        <button className="btn btn-primary desktop-nav" style={{ padding: '10px 22px', fontSize: 13 }} onClick={() => nav('/contact')}>
          Get Quote →
        </button>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!open)} className="ham-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 6 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: 'var(--t-h)', borderRadius: 1, transition: 'all 0.3s',
              transform: open ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scaleX(0)') : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 998,
        background: 'rgba(8,15,9,0.99)', backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        opacity: open ? 1 : 0, pointerEvents: open ? 'all' : 'none',
        transform: open ? 'translateY(0)' : 'translateY(-16px)',
        transition: 'all 0.35s ease',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, width: '100%', maxWidth: 320 }}>
          {[...links, { to: '/contact', label: 'Contact' }].map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily: 'var(--f-display)', fontSize: 26, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 2,
                padding: '14px 0', width: '100%', textAlign: 'center',
                color: isActive ? 'var(--gold)' : 'var(--t-b)',
                borderBottom: '1px solid var(--c-border)', transition: 'color 0.2s',
              })}
            >{l.label}</NavLink>
          ))}
          <button className="btn btn-primary" style={{ marginTop: 20, width: '100%', justifyContent: 'center' }} onClick={() => { nav('/contact'); setMenuOpen(false) }}>
            Get a Quote →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .desktop-nav { display: none !important; } .ham-btn { display: flex !important; } }
      `}</style>
    </header>
  )
}
