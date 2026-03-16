import { useNavigate } from 'react-router-dom'
import PageHero from '../components/PageHero'

export function Sustainability() {
  const nav = useNavigate()
  const steps = ['Agricultural Residue Collection','Pre-treatment & Drying','High-Density Compression','Quality Control & Testing','Industrial Distribution','Carbon Credit Generation']
  const sdgs = [
    { id: 'SDG 7',  t: 'Affordable & Clean Energy',  d: 'Cost-competitive renewable energy for industries.' },
    { id: 'SDG 12', t: 'Responsible Consumption',    d: 'Converting waste into valuable fuel — circular economy.' },
    { id: 'SDG 13', t: 'Climate Action',              d: 'Reducing industrial CO₂ through biomass substitution.' },
    { id: 'SDG 15', t: 'Life on Land',               d: 'Responsible biomass sourcing & land restoration.' },
  ]
  return (
    <div>
      <PageHero tag="Our Commitment" title="Sustainability at" highlight="CARBOVA"
        sub="We measure success in tonnes of CO₂ avoided, waste diverted, and communities empowered."
        img="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1800&q=80" />

      <section className="section" style={{ background: 'var(--c-bg2)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <span className="tag">Circular Economy</span>
              <h2 className="h2">Waste to Energy <span className="gold italic">Value Chain</span></h2>
              <div className="gold-line" />
              <p style={{ fontSize: 16, color: 'var(--t-b)', lineHeight: 1.85, marginBottom: 16 }}>
                CARBOVA sources agricultural residues — rice husk, sugarcane bagasse, groundnut shells, cotton stalks — converting waste that would otherwise be burned in fields into clean industrial fuel.
              </p>
              <p style={{ fontSize: 16, color: 'var(--t-b)', lineHeight: 1.85 }}>
                This circular model creates income for farmers, reduces field burning, and displaces coal — a triple win for the economy, environment, and communities.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {steps.map((s, i) => (
                <div key={s} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--gold)', color: '#0c1a0e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{i+1}</div>
                  <div style={{ flex: 1, padding: '13px 18px', background: 'var(--c-panel)', border: '1px solid var(--c-border)', borderRadius: 8, fontSize: 14, color: 'var(--t-h)' }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--c-bg)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="tag">UN Sustainable Development Goals</span>
            <h2 className="h2">Aligned with <span className="gold italic">Global Goals</span></h2>
          </div>
          <div className="grid-4">
            {sdgs.map(s => (
              <div key={s.id} className="card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                <span className="badge badge-gold" style={{ marginBottom: 16, display: 'inline-block' }}>{s.id}</span>
                <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 17, fontWeight: 700, color: 'var(--gold-lt)', marginBottom: 10 }}>{s.t}</h3>
                <p style={{ fontSize: 13, color: 'var(--t-b)', lineHeight: 1.65 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #c8963c, #a07428)', padding: '80px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="tag" style={{ color: '#0c1a0e' }}>Our 2030 Goals</span>
          <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: '#0c1a0e', margin: '12px 0 40px' }}>Impact We're Building Toward</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, maxWidth: 720, margin: '0 auto 40px' }}>
            {[['500K','Tons Biomass/Year'],['1M tCO₂','Emissions Avoided'],['10,000','Farmers Engaged']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 42, fontWeight: 700, color: '#0c1a0e', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 14, color: 'rgba(12,26,14,0.65)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
          <button style={{ background: '#0c1a0e', color: 'var(--gold-lt)', border: 'none', padding: '15px 38px', fontWeight: 700, fontSize: 15, borderRadius: 3, cursor: 'pointer', fontFamily: 'var(--f-body)' }} onClick={() => nav('/contact')}>Learn More →</button>
        </div>
      </section>
    </div>
  )
}

export function Innovation() {
  const patents = [
    { id: 'PAT-001', title: 'High-Density Biomass Compression Technology', area: 'Manufacturing', year: 2021 },
    { id: 'PAT-002', title: 'Agricultural Residue Pre-treatment Process', area: 'Process Engineering', year: 2022 },
    { id: 'PAT-003', title: 'Low-Emission Binder Formulation for Briquettes', area: 'Materials Science', year: 2022 },
    { id: 'PAT-004', title: 'Automated Quality Control System for Pellets', area: 'Automation', year: 2023 },
    { id: 'PAT-005', title: 'Carbon Capture Integration in Biomass Production', area: 'Environment', year: 2023 },
    { id: 'PAT-006', title: 'Waste-to-Energy Circular Process Framework', area: 'Circular Economy', year: 2024 },
  ]
  return (
    <div>
      <PageHero tag="R&D & Patents" title="Innovation &" highlight="Patents"
        sub="CARBOVA is backed by strong innovation and sustainability research including multiple patents focused on waste-to-value technologies."
        img="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1800&q=80" />

      <section className="section" style={{ background: 'var(--c-bg2)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 72 }}>
            <div>
              <span className="tag">Innovation Edge</span>
              <h2 className="h2">Research-Backed <span className="gold italic">Technology</span></h2>
              <div className="gold-line" />
              <p style={{ fontSize: 15, color: 'var(--t-b)', lineHeight: 1.8, marginBottom: 32 }}>
                Our R&D team continuously develops processes that improve energy density, reduce emissions, and increase efficiency of biomass fuel production.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {[['12+','Patents'],['5','R&D Labs'],['30+','Researchers'],['2024','Latest Patent']].map(([n,l]) => (
                  <div key={l} style={{ background: 'var(--gold-dim)', border: '1px solid var(--c-border)', borderRadius: 10, padding: '18px 14px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--f-display)', fontSize: 30, fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 12, color: 'var(--t-dim)', marginTop: 6 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="tag">Patent Portfolio</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24 }}>
                {patents.map(p => (
                  <div key={p.id} className="card" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1.5, marginBottom: 5 }}>{p.id} · {p.area}</div>
                      <div style={{ fontSize: 15, color: 'var(--t-h)', fontWeight: 500 }}>{p.title}</div>
                    </div>
                    <span className="badge badge-gold">{p.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function Projects() {
  const projects = [
    { name: 'Maharashtra Biomass Hub', loc: 'Pune, Maharashtra', cap: '5,000 tons/month', status: 'Operational', year: 2022 },
    { name: 'Punjab Agricultural Residue Plant', loc: 'Ludhiana, Punjab', cap: '8,000 tons/month', status: 'Operational', year: 2023 },
    { name: 'Rajasthan Desert Energy Project', loc: 'Jodhpur, Rajasthan', cap: '3,500 tons/month', status: 'Under Construction', year: 2025 },
    { name: 'Andhra Pradesh Coastal Biomass Unit', loc: 'Vijayawada, AP', cap: '6,000 tons/month', status: 'Planning', year: 2026 },
    { name: 'Karnataka Agro-Energy Zone', loc: 'Hubli, Karnataka', cap: '4,200 tons/month', status: 'Planning', year: 2026 },
  ]
  const badgeMap: Record<string,string> = { 'Operational': 'badge-green', 'Under Construction': 'badge-amber', 'Planning': 'badge-blue' }
  return (
    <div>
      <PageHero tag="Our Projects" title="Active & Upcoming" highlight="Projects"
        sub="CARBOVA's growing network of biomass production facilities powering industries across India."
        img="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&q=80" />
      <section className="section" style={{ background: 'var(--c-bg2)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 52 }}>
            {[['2','Active Plants'],['17,500+','Combined Capacity (tons/mo)'],['3','In Pipeline']].map(([n,l]) => (
              <div key={l} className="card" style={{ padding: '28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 42, fontWeight: 700, color: 'var(--gold)' }}>{n}</div>
                <div style={{ fontSize: 13, color: 'var(--t-dim)', marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {projects.map((p, i) => (
              <div key={p.name} className="card" style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: 'auto 1fr auto auto', gap: 28, alignItems: 'center' }}>
                <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'var(--gold)', color: '#0c1a0e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--f-display)', fontWeight: 900, fontSize: 20 }}>{i+1}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 18, fontWeight: 700, color: 'var(--t-h)', marginBottom: 4 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: 'var(--t-dim)' }}>📍 {p.loc}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: 'var(--t-dim)', marginBottom: 4, letterSpacing: 1 }}>CAPACITY</div>
                  <div style={{ fontFamily: 'monospace', fontSize: 13, color: 'var(--gold-lt)', fontWeight: 700 }}>{p.cap}</div>
                </div>
                <span className={`badge ${badgeMap[p.status]}`}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export function Partnership() {
  const nav = useNavigate()
  const types = [
    { icon: '🏭', t: 'Industrial Fuel Consumers',    d: 'Textile mills, paper plants, food processors and heavy industries seeking reliable biomass supply at scale.' },
    { icon: '💼', t: 'Renewable Energy Investors',   d: 'Impact investors and funds seeking exposure to clean energy infrastructure and carbon markets.' },
    { icon: '🌍', t: 'Carbon Credit Developers',     d: 'Organizations developing voluntary carbon markets who can monetize our verified emission reductions.' },
    { icon: '🌾', t: 'Agricultural Supply Networks', d: 'Farmer cooperatives and agri-networks that can supply consistent agricultural residue feedstock.' },
  ]
  return (
    <div>
      <PageHero tag="Collaborate With Us" title="Partner With" highlight="CARBOVA"
        sub="We collaborate with industries, investors, and networks who share our vision for a clean energy future."
        img="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80" />
      <section className="section" style={{ background: 'var(--c-bg2)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="tag">Partnership Types</span>
            <h2 className="h2">We Collaborate <span className="gold italic">With</span></h2>
          </div>
          <div className="grid-2" style={{ marginBottom: 72 }}>
            {types.map(t => (
              <div key={t.t} className="card" style={{ padding: '32px', display: 'flex', gap: 20 }}>
                <span style={{ fontSize: 40, flexShrink: 0 }}>{t.icon}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 20, fontWeight: 700, color: 'var(--gold-lt)', marginBottom: 10 }}>{t.t}</h3>
                  <p style={{ fontSize: 14, color: 'var(--t-b)', lineHeight: 1.7 }}>{t.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 660, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span className="tag">Get In Touch</span>
              <h2 className="h2">Contact for <span className="gold italic">Partnership</span></h2>
            </div>
            <div className="card" style={{ padding: '44px 40px' }}>
              {['Organization Name','Partnership Type','Your Role / Designation','Email Address','Phone Number'].map(f => (
                <div className="field" key={f}>
                  <label className="label">{f}</label>
                  <input className="input" placeholder={`Enter ${f.toLowerCase()}`} />
                </div>
              ))}
              <div className="field">
                <label className="label">Message</label>
                <textarea className="textarea" placeholder="Tell us about your partnership vision..." />
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 16, fontSize: 15, marginTop: 8 }} onClick={() => nav('/contact')}>
                Submit Partnership Inquiry →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <PageHero tag="Get In Touch" title="Contact" highlight="CARBOVA"
        sub="Reach out for supply inquiries, partnerships, or any questions. We respond within 24 hours."
        img="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1800&q=80" />
      <section className="section" style={{ background: 'var(--c-bg2)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 72, alignItems: 'start' }}>
            <div>
              <span className="tag">Reach Us</span>
              <h2 className="h2">Let's Start a <span className="gold italic">Conversation</span></h2>
              <div className="gold-line" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginTop: 8 }}>
                {[
                  { icon: '✉️', l: 'Email', v: 'info@carbova.in', s: 'We reply within 24 hours' },
                  { icon: '📞', l: 'Phone', v: '+91 XXXXX XXXXX', s: 'Mon–Sat, 9am–6pm IST' },
                  { icon: '🏢', l: 'Company', v: 'Universal Multi Ventures Pvt. Ltd.', s: 'India' },
                ].map(c => (
                  <div key={c.l} style={{ display: 'flex', gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 10, background: 'var(--gold-dim)', border: '1px solid var(--c-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--t-dim)', letterSpacing: 1.5, marginBottom: 2 }}>{c.l.toUpperCase()}</div>
                      <div style={{ fontSize: 15, color: 'var(--t-h)', fontWeight: 600 }}>{c.v}</div>
                      <div style={{ fontSize: 12, color: 'var(--t-dim)' }}>{c.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: '44px 40px' }}>
              <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 24, fontWeight: 700, color: 'var(--gold)', marginBottom: 28 }}>Send Us a Message</h3>
              <div className="grid-2">
                {[['Full Name','Your name'],['Company Name','Company name']].map(([l,p]) => (
                  <div className="field" key={l}>
                    <label className="label">{l}</label>
                    <input className="input" placeholder={p} />
                  </div>
                ))}
              </div>
              <div className="grid-2">
                {[['Email Address','your@email.com'],['Phone Number','+91 XXXXX XXXXX']].map(([l,p]) => (
                  <div className="field" key={l}>
                    <label className="label">{l}</label>
                    <input className="input" placeholder={p} />
                  </div>
                ))}
              </div>
              <div className="field">
                <label className="label">Subject</label>
                <select className="select">
                  <option value="">Select inquiry type</option>
                  <option>Product Supply Inquiry</option>
                  <option>Partnership Opportunity</option>
                  <option>Carbon Credits</option>
                  <option>Technical Specification</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <textarea className="textarea" placeholder="Describe your requirements in detail..." />
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 16, fontSize: 15, marginTop: 4 }}>
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
