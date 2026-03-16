import { useNavigate } from 'react-router-dom'
import CarbonWidget from '../components/CarbonWidget'
import styles from './Home.module.css'

const HERO_IMG    = 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1800&q=80'
const ABOUT_IMG   = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80'
const FACTORY_IMG = 'https://images.unsplash.com/photo-1565117168-2b1de48b8d06?w=900&q=80'

const stats = [
  { val: '50,000+', lbl: 'Tons Supplied' },
  { val: '30%',     lbl: 'CO₂ Reduction' },
  { val: '200+',    lbl: 'Industry Partners' },
  { val: '12+',     lbl: 'Patents Filed' },
]

const benefits = [
  { icon: '🔥', title: 'Lower Carbon Footprint',   desc: 'Significantly fewer greenhouse gas emissions vs coal — verified & measurable.' },
  { icon: '🌿', title: 'Renewable Source',          desc: 'Made from agricultural residues. Zero deforestation, fully circular.' },
  { icon: '📈', title: 'Price Stability',           desc: 'Insulated from fossil fuel market swings — protect your margins.' },
  { icon: '⚙️', title: 'Drop-in Compatible',       desc: 'Works with most industrial boilers. Minimal modification required.' },
]

const sectors = [
  { icon: '👕', title: 'Textile Mills',        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=70' },
  { icon: '📄', title: 'Paper & Pulp',         img: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=500&q=70' },
  { icon: '🍲', title: 'Food Processing',      img: 'https://images.unsplash.com/photo-1565117168-2b1de48b8d06?w=500&q=70' },
  { icon: '🧱', title: 'Brick Kilns',          img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&q=70' },
  { icon: '⚗️', title: 'Chemical Industries', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&q=70' },
  { icon: '📦', title: 'Packaging Units',      img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=70' },
]

export default function Home() {
  const nav = useNavigate()
  return (
    <div>
      {/* ── HERO ── */}
      <section className={styles.hero} style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className={styles.heroOverlay} />
        <div className="noise-overlay" />
        <div className={`wrap ${styles.heroContent}`}>
          <div className={`${styles.heroBadge} anim-fadeIn`}>
            <span className="stat-pill">🌿 Pioneering Sustainable Industrial Fuel</span>
          </div>
          <h1 className={`${styles.heroTitle} anim-fadeUp delay-1`}>
            CARBOVA —<br />
            <span className="gold italic">Sustainable Fuel</span><br />
            for a Cleaner Future
          </h1>
          <p className={`lead ${styles.heroSub} anim-fadeUp delay-2`}>
            Transforming agricultural waste into high-efficiency renewable energy solutions for industries.
          </p>
          <div className={`${styles.heroBtns} anim-fadeUp delay-3`}>
            <button className="btn btn-primary" onClick={() => nav('/products')}>
              Explore Our Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn btn-ghost" onClick={() => nav('/partnership')}>Partner With Us</button>
          </div>
          {/* Scroll cue */}
          <div className={styles.scrollCue}>
            <div className={styles.scrollLine} />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className={styles.statsBar}>
        {stats.map(s => (
          <div key={s.lbl} className={styles.statItem}>
            <span className={styles.statVal}>{s.val}</span>
            <span className={styles.statLbl}>{s.lbl}</span>
          </div>
        ))}
      </div>

      {/* ── ABOUT STRIP ── */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="wrap">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <span className="tag">About CARBOVA</span>
              <h2 className="h2">India's Premier<br /><span className="gold italic">Biomass Energy</span><br />Company</h2>
              <div className="gold-line" />
              <p className={styles.aboutP}>
                CARBOVA is a renewable energy brand focused on producing high-quality biomass briquettes and pellets from agricultural residues. Our solutions help industries reduce their carbon footprint while replacing fossil fuels with sustainable alternatives.
              </p>
              <p className={styles.aboutP}>
                By driving innovation, sustainability and industrial efficiency, CARBOVA contributes to the global transition toward cleaner energy systems.
              </p>
              <div className={styles.aboutBtns}>
                <button className="btn btn-primary" onClick={() => nav('/about')}>Our Story →</button>
                <button className="btn btn-ghost" onClick={() => nav('/sustainability')}>Sustainability</button>
              </div>
            </div>
            <div className={styles.aboutImgs}>
              <img src={ABOUT_IMG}   className={styles.img1} alt="Biomass fuel" />
              <img src={FACTORY_IMG} className={styles.img2} alt="Industrial facility" />
              <div className={styles.imgBadge}>
                <span className={styles.imgBadgeNum}>30%</span>
                <span>Carbon Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className={`section ${styles.productsSection}`}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div>
              <span className="tag">Our Products</span>
              <h2 className="h2">Premium Biomass<br /><span className="gold italic">Fuel Products</span></h2>
            </div>
            <button className="btn btn-ghost" onClick={() => nav('/products')}>View All →</button>
          </div>
          <div className={styles.productsGrid}>
            {[
              {
                img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80',
                title: 'Biomass Briquettes',
                desc: 'High-density solid fuel used to fill the molds and furnaces.',
                specs: ['High calorific value', 'Low emissions', 'Sustainable alternative to coal'],
                badge: '3800–4200 kcal/kg',
              },
              {
                img: 'https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=600&q=80',
                title: 'Biomass Pellets',
                desc: 'Cylindrical compressed pellets for efficient industrial heating systems.',
                specs: ['Consistent combustion', 'Reduced ash', 'Renewable fuel'],
                badge: '4000–4500 kcal/kg',
              },
              {
                img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
                title: 'Carbon Reduction Solutions',
                desc: 'Supporting industries in lowering emissions and enabling participation in carbon credit markets.',
                specs: ['Verified offsets', 'Revenue generation', 'Compliance ready'],
                badge: 'Carbon Credits',
              },
            ].map(p => (
              <div key={p.title} className={`card ${styles.productCard}`}>
                <div className={styles.productImg} style={{ backgroundImage: `url(${p.img})` }}>
                  <span className={`badge badge-gold ${styles.productBadge}`}>{p.badge}</span>
                </div>
                <div className={styles.productBody}>
                  <h3 className={styles.productTitle}>{p.title}</h3>
                  <p className={styles.productDesc}>{p.desc}</p>
                  <ul className={styles.productSpecs}>
                    {p.specs.map(s => <li key={s}><span className={styles.dot} />  {s}</li>)}
                  </ul>
                  <button className="btn btn-dark" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }} onClick={() => nav('/products')}>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className={`section ${styles.benefitsSection}`}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div>
              <span className="tag">Why Switch to Biomass</span>
              <h2 className="h2">Our Environmental<br /><span className="gold italic">Contribution</span></h2>
            </div>
            <p style={{ fontSize: 14, color: 'var(--t-dim)', maxWidth: 260, lineHeight: 1.6 }}>Aligned with UN SDGs 7, 12, 13 &amp; 15</p>
          </div>
          <div className="grid-4" style={{ marginTop: 48 }}>
            {benefits.map(b => (
              <div key={b.title} className={`card ${styles.benCard}`}>
                <span className={styles.benIcon}>{b.icon}</span>
                <h3 className={styles.benTitle}>{b.title}</h3>
                <p className={styles.benDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className={`section ${styles.sectorsSection}`}>
        <div className="wrap">
          <span className="tag">Industrial Sectors We Serve</span>
          <div className={styles.sectorsTop}>
            <h2 className="h2">Manufacturing<br /><span className="gold italic">Facility & Reach</span></h2>
            <p className="lead" style={{ fontSize: 16 }}>CARBOVA is backed by strong innovation and an unwavering commitment to creating global benchmarks with best-in-class manufacturing standards. <br /><br />
              <span style={{ color: 'var(--t-dim)', fontSize: 14 }}>
                ✦ Increase fuel conversions<br />
                ✦ Increase sleeping treatments<br />
                ✦ Widen activation options<br />
                ✦ Increased factory customers
              </span>
            </p>
          </div>
          <div className={styles.sectorsGrid}>
            {sectors.map(s => (
              <div key={s.title} className={styles.sectorCard} style={{ backgroundImage: `url(${s.img})` }}>
                <div className={styles.sectorOverlay} />
                <span className={styles.sectorIcon}>{s.icon}</span>
                <span className={styles.sectorTitle}>{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARBON WIDGET ── */}
      <section className={`section ${styles.carbonSection}`}>
        <div className="wrap">
          <span className="tag">Live Market Insights</span>
          <div className={styles.carbonHead}>
            <h2 className="h2">Global Carbon<br /><span className="gold italic">Credit Market</span></h2>
            <button className="btn btn-ghost" onClick={() => nav('/calculators')}>Open Calculators →</button>
          </div>
          <div style={{ marginTop: 48 }}>
            <CarbonWidget />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBg} />
        <div className="noise-overlay" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="tag" style={{ color: '#0c1a0e' }}>Take Action Now</span>
          <h2 className={styles.ctaTitle}>Switch from Coal to<br />Sustainable Biomass Fuel Today</h2>
          <p className={styles.ctaSub}>Join 200+ industries making the transition to clean energy</p>
          <div className={styles.ctaBtns}>
            <button className={styles.ctaBtnDark} onClick={() => nav('/contact')}>Request Quote →</button>
            <button className={styles.ctaBtnOutline} onClick={() => nav('/contact')}>Contact Our Team</button>
          </div>
        </div>
      </section>
    </div>
  )
}
