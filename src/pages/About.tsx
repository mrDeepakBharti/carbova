import { useNavigate } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function About() {
  const nav = useNavigate()
  return (
    <div>
      <PageHero
        tag="Who We Are"
        title="About"
        highlight="CARBOVA"
        sub="We transform agricultural waste into premium industrial fuel — powering India's clean energy transition."
        img="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&q=80"
      />

      {/* Mission */}
      <section className="section" style={{ background: 'var(--c-bg2)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="tag">Our Mission</span>
              <h2 className="h2">Driving the Transition<br /><span className="gold italic">to Clean Energy</span></h2>
              <div className="gold-line" />
              <p style={{ fontSize: 16, color: 'var(--t-b)', lineHeight: 1.85, marginBottom: 18 }}>
                CARBOVA is a renewable energy brand under <strong style={{ color: 'var(--t-h)' }}>Universal Multi Ventures Private Limited</strong>, dedicated to producing high-quality biomass briquettes and pellets from agricultural residues.
              </p>
              <p style={{ fontSize: 16, color: 'var(--t-b)', lineHeight: 1.85, marginBottom: 32 }}>
                We believe in a circular economy where agricultural waste becomes valuable energy, reducing dependency on fossil fuels while creating real economic value for farming communities.
              </p>
              <button className="btn btn-primary" onClick={() => nav('/contact')}>Get in Touch →</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[['2019','Founded'],['50K+','Tons Supplied'],['12+','Patents Filed'],['200+','Partners']].map(([n,l]) => (
                <div key={l} className="card" style={{ padding: '28px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 42, fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 13, color: 'var(--t-dim)', marginTop: 8, fontWeight: 500, letterSpacing: 0.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--c-bg)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="tag">Our Core Values</span>
            <h2 className="h2">What Drives <span className="gold italic">Everything We Do</span></h2>
          </div>
          <div className="grid-3">
            {[
              { icon: '🌱', t: 'Sustainability', d: 'Every product we make reduces agricultural waste and displaces fossil fuels — measurably.' },
              { icon: '🔬', t: 'Innovation', d: 'Backed by 12+ patents in waste-to-value and clean energy production technologies.' },
              { icon: '🤝', t: 'Partnership', d: 'We co-create value with farmers, industries, carbon developers and investors.' },
            ].map(v => (
              <div key={v.t} className="card" style={{ padding: '36px 28px', textAlign: 'center' }}>
                <span style={{ fontSize: 40, display: 'block', marginBottom: 18 }}>{v.icon}</span>
                <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 22, fontWeight: 700, color: 'var(--gold-lt)', marginBottom: 12 }}>{v.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--t-b)', lineHeight: 1.7 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="section" style={{ background: 'var(--c-bg2)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="tag">Join Our Mission</span>
          <h2 className="h2" style={{ marginBottom: 20 }}>Ready to Make the <span className="gold italic">Switch?</span></h2>
          <p style={{ fontSize: 16, color: 'var(--t-b)', maxWidth: 520, margin: '0 auto 36px' }}>
            Connect with our team to explore supply agreements, partnerships, or carbon credit opportunities.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => nav('/contact')}>Contact Us →</button>
            <button className="btn btn-ghost" onClick={() => nav('/partnership')}>Partnership Options</button>
          </div>
        </div>
      </section>
    </div>
  )
}
