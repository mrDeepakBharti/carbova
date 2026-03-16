import { useState, useEffect } from 'react'
import styles from './CarbonWidget.module.css'

interface Prices {
  eu: number; vol: number; avg: number
  eu_ch: number; vol_ch: number; avg_ch: number
}

function gen(): Prices {
  return {
    eu:     +(66 + Math.random() * 10).toFixed(1),
    vol:    +(11 + Math.random() * 7).toFixed(1),
    avg:    +(14 + Math.random() * 6).toFixed(1),
    eu_ch:  +(Math.random() * 4 - 1).toFixed(2),
    vol_ch: +(Math.random() * 2 - 0.5).toFixed(2),
    avg_ch: +(Math.random() * 1.5 - 0.3).toFixed(2),
  }
}

export default function CarbonWidget() {
  const [p, setP] = useState<Prices>(gen())
  const [updated, setUpdated] = useState(new Date())
  const [loading, setLoading] = useState(false)

  const refresh = () => {
    setLoading(true)
    setTimeout(() => { setP(gen()); setUpdated(new Date()); setLoading(false) }, 700)
  }

  useEffect(() => {
    const t = setInterval(refresh, 60000)
    return () => clearInterval(t)
  }, [])

  const cards = [
    { label: 'EU ETS Carbon', sub: 'European Emissions Trading', val: `€${p.eu}`, ch: p.eu_ch, src: 'ICE Exchange', color: '#60a5fa' },
    { label: 'Voluntary Market', sub: 'Voluntary Carbon Market (VCM)', val: `$${p.vol}`, ch: p.vol_ch, src: 'Verra / Gold Standard', color: '#22c55e' },
    { label: 'Global Average', sub: 'Cross-market average', val: `$${p.avg}`, ch: p.avg_ch, src: 'Carbon Pulse', color: 'var(--gold)' },
  ]

  return (
    <div className={styles.widget}>
      <div className={styles.cards}>
        {cards.map(c => (
          <div key={c.label} className={styles.card}>
            <div className={styles.cardTop} style={{ background: c.color }} />
            <div className={styles.cardBody}>
              <div className={styles.cardSrc}>{c.src}</div>
              <div className={styles.cardLabel}>{c.label}</div>
              <div className={`${styles.cardVal} ${loading ? styles.loading : ''}`}>
                {loading ? '—' : c.val}
                <span className={styles.cardUnit}> / tCO₂</span>
              </div>
              <div className={styles.cardSub}>{c.sub}</div>
              <div className={styles.change} style={{ color: c.ch >= 0 ? '#22c55e' : '#ef4444', background: c.ch >= 0 ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)' }}>
                {c.ch >= 0 ? '▲' : '▼'} {Math.abs(c.ch)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.opportunity}>
          <span className={styles.oppIcon}>💡</span>
          <div>
            <strong style={{ color: 'var(--gold-lt)', display: 'block', marginBottom: 4 }}>Carbon Credit Opportunity</strong>
            <p style={{ fontSize: 13, color: 'var(--t-b)', lineHeight: 1.6 }}>
              Switching from coal to CARBOVA biomass may qualify for carbon credit generation under voluntary carbon markets.
            </p>
          </div>
        </div>
        <div className={styles.meta}>
          <span className={styles.time}>⟳ {updated.toLocaleTimeString()}</span>
          <button className={`btn btn-ghost ${styles.refreshBtn}`} onClick={refresh} disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh Data'}
          </button>
        </div>
      </div>
    </div>
  )
}
