import { useNavigate } from 'react-router-dom'
import PageHero from '../components/PageHero'

const bSpecs = [
  ['Gross Calorific Value','3800–4200 kcal/kg'],
  ['Moisture Content','8–12 %'],
  ['Ash Content','5–8 %'],
  ['Fixed Carbon','15–18 %'],
  ['Diameter','60–90 mm'],
  ['Length','50–150 mm'],
  ['Density','1.0–1.2 g/cm³'],
]
const pSpecs = [
  ['Gross Calorific Value','4000–4500 kcal/kg'],
  ['Moisture Content','6–10 %'],
  ['Ash Content','3–6 %'],
  ['Fixed Carbon','16–20 %'],
  ['Diameter','6–10 mm'],
  ['Length','10–30 mm'],
  ['Density','1.1–1.3 g/cm³'],
]
const applications = [
  { icon: '🏭', t: 'Industrial Boilers',     d: 'Direct coal replacement in steam boilers' },
  { icon: '🧱', t: 'Brick Kilns',            d: 'Alternative fuel replacing coal in kilns' },
  { icon: '👕', t: 'Textile Mills',          d: 'Steam boilers for fabric processing' },
  { icon: '🍲', t: 'Food Processing',        d: 'Heating, drying, and steam generation' },
  { icon: '📄', t: 'Paper & Pulp',          d: 'Thermal boilers for paper production' },
  { icon: '⚗️', t: 'Chemical Industries',  d: 'Industrial heating systems' },
]

function SpecTable({ rows }: { rows: string[][] }) {
  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--c-border)' }}>
      {rows.map(([p, v], i) => (
        <div key={p} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          padding: '13px 22px',
          background: i % 2 === 0 ? 'var(--c-panel)' : 'var(--c-bg2)',
          borderBottom: i < rows.length - 1 ? '1px solid var(--c-border)' : 'none',
        }}>
          <span style={{ fontSize: 13, color: 'var(--t-b)' }}>{p}</span>
          <span style={{ fontSize: 13, color: 'var(--gold-lt)', fontWeight: 700, fontFamily: 'monospace' }}>{v}</span>
        </div>
      ))}
    </div>
  )
}

export default function Products() {
  const nav = useNavigate()
  return (
    <div>
      <PageHero
        tag="Our Products"
        title="Premium Biomass"
        highlight="Fuel Products"
        sub="High-quality briquettes and pellets from agricultural residues — clean, efficient substitutes for coal."
        img="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1800&q=80"
      />

      {/* Briquettes */}
      <section className="section" style={{ background: 'var(--c-bg2)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
            <div>
              <span className="tag">Product 01</span>
              <h2 className="h2">Biomass<br /><span className="gold italic">Briquettes</span></h2>
              <div className="gold-line" />
              <p style={{ fontSize: 16, color: 'var(--t-b)', lineHeight: 1.8, marginBottom: 28 }}>
                High-density solid fuel blocks produced by compressing agricultural biomass residues. Widely used in industrial boilers, furnaces, and thermal power plants as a renewable coal replacement.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                {['Industrial Boilers','Brick Kilns','Textile Mills','Food Processing','Paper Industries'].map(a => (
                  <span key={a} style={{ background: 'var(--gold-dim)', border: '1px solid var(--c-border)', borderRadius: 100, padding: '5px 14px', fontSize: 12, color: 'var(--gold-lt)' }}>{a}</span>
                ))}
              </div>
              <button className="btn btn-primary" onClick={() => nav('/contact')}>Request Supply →</button>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=700&q=80" alt="Biomass Briquettes" style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 12, marginBottom: 28, border: '1px solid var(--c-border)' }} />
              <span className="tag">Technical Specifications</span>
              <SpecTable rows={bSpecs} />
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Pellets */}
      <section className="section" style={{ background: 'var(--c-bg)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
            <div style={{ order: 2 }}>
              <span className="tag">Product 02</span>
              <h2 className="h2">Biomass<br /><span className="gold italic">Pellets</span></h2>
              <div className="gold-line" />
              <p style={{ fontSize: 16, color: 'var(--t-b)', lineHeight: 1.8, marginBottom: 28 }}>
                Cylindrical compressed biomass fuel with superior calorific value. Ideal for automated feeding systems, power plants, and industrial applications requiring consistent fuel quality.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                {['Power Plants','Pellet Boilers','Automated Systems','Thermal Plants'].map(a => (
                  <span key={a} style={{ background: 'var(--gold-dim)', border: '1px solid var(--c-border)', borderRadius: 100, padding: '5px 14px', fontSize: 12, color: 'var(--gold-lt)' }}>{a}</span>
                ))}
              </div>
              <button className="btn btn-primary" onClick={() => nav('/contact')}>Request Supply →</button>
            </div>
            <div style={{ order: 1 }}>
              <img src="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=700&q=80" alt="Biomass Pellets" style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 12, marginBottom: 28, border: '1px solid var(--c-border)' }} />
              <span className="tag">Technical Specifications</span>
              <SpecTable rows={pSpecs} />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section" style={{ background: 'var(--c-bg2)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="tag">Applications</span>
            <h2 className="h2">Industrial Sectors <span className="gold italic">We Serve</span></h2>
          </div>
          <div className="grid-3">
            {applications.map(a => (
              <div key={a.t} className="card" style={{ padding: '28px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 32, flexShrink: 0 }}>{a.icon}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 18, fontWeight: 700, color: 'var(--t-h)', marginBottom: 6 }}>{a.t}</h3>
                  <p style={{ fontSize: 14, color: 'var(--t-b)' }}>{a.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="section" style={{ background: 'var(--c-bg)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 740, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="tag">Industrial Supply Inquiry</span>
              <h2 className="h2">Request <span className="gold italic">Industrial Supply</span></h2>
              <p style={{ fontSize: 15, color: 'var(--t-b)', marginTop: 12 }}>Fill in your requirements — our team responds within 24 hours.</p>
            </div>
            <div className="card" style={{ padding: '48px 40px' }}>
              <div className="grid-2">
                {[['Company Name','Your company name'],['Industry Type','e.g. Textile, Paper Mill'],['Boiler Capacity (TPH/MW)','e.g. 5 TPH'],['Fuel Requirement (tons/month)','e.g. 500 tons'],['Location','City, State'],['Contact Number','+91 XXXXX XXXXX']].map(([l,p]) => (
                  <div className="field" key={l}>
                    <label className="label">{l}</label>
                    <input className="input" placeholder={p} />
                  </div>
                ))}
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <input className="input" type="email" placeholder="your@company.com" />
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: 15, marginTop: 8 }}>
                Submit Supply Request →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
