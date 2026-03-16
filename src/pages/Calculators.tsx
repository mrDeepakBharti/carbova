import { useState } from 'react'
import PageHero from '../components/PageHero'
import CarbonWidget from '../components/CarbonWidget'

function FuelCalc() {
  const [tons, setTons] = useState(500)
  const [coal, setCoal] = useState(8000)
  const [bio, setBio] = useState(5500)
  const coalCost = tons * coal
  const bioCost = tons * bio
  const saved = coalCost - bioCost
  const pct = coalCost ? ((saved / coalCost) * 100).toFixed(1) : '0'
  return (
    <div className="card" style={{ padding: '40px' }}>
      <div style={{ marginBottom: 28 }}>
        <span className="tag">Calculator 01</span>
        <h3 className="h3">⚡ Fuel Cost Savings</h3>
        <p style={{ fontSize: 14, color: 'var(--t-dim)', marginTop: 6 }}>Estimate monthly savings when switching from coal to CARBOVA biomass.</p>
      </div>
      <div className="grid-3" style={{ marginBottom: 24 }}>
        {[['Monthly Consumption (tons)', tons, setTons],['Coal Price (₹/ton)', coal, setCoal],['Biomass Price (₹/ton)', bio, setBio]].map(([l, v, fn]) => (
          <div className="field" key={l as string}>
            <label className="label">{l as string}</label>
            <input className="input" type="number" value={v as number} onChange={e => (fn as (n:number)=>void)(+e.target.value)} />
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, background: 'var(--c-bg)', borderRadius: 10, padding: 24, border: '1px solid var(--c-border)' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--t-dim)', marginBottom: 4, letterSpacing: 1 }}>COAL / MONTH</div>
          <div style={{ fontFamily: 'var(--f-impact)', fontSize: 28, color: '#ef4444', letterSpacing: 1 }}>₹{coalCost.toLocaleString()}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'var(--t-dim)', marginBottom: 4, letterSpacing: 1 }}>BIOMASS / MONTH</div>
          <div style={{ fontFamily: 'var(--f-impact)', fontSize: 28, color: '#22c55e', letterSpacing: 1 }}>₹{bioCost.toLocaleString()}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'var(--t-dim)', marginBottom: 4, letterSpacing: 1 }}>YOU SAVE</div>
          <div style={{ fontFamily: 'var(--f-impact)', fontSize: 28, color: 'var(--gold)', letterSpacing: 1 }}>₹{saved.toLocaleString()}</div>
          <div style={{ fontSize: 12, color: '#22c55e', marginTop: 2 }}>{pct}% reduction</div>
        </div>
      </div>
      <div style={{ marginTop: 16, background: 'var(--gold-dim)', border: '1px solid var(--c-border)', borderRadius: 8, padding: '12px 18px' }}>
        <span style={{ fontSize: 14, color: 'var(--gold-lt)' }}>💰 Annual savings: <strong>₹{(saved * 12).toLocaleString()}</strong></span>
      </div>
    </div>
  )
}

function CarbonCalc() {
  const [tons, setTons] = useState(500)
  const [price, setPrice] = useState(1200)
  const co2 = tons * 2.2
  const rev = co2 * price
  return (
    <div className="card" style={{ padding: '40px' }}>
      <div style={{ marginBottom: 28 }}>
        <span className="tag">Calculator 02</span>
        <h3 className="h3">🌿 Carbon Reduction</h3>
        <p style={{ fontSize: 14, color: 'var(--t-dim)', marginTop: 6 }}>Estimate CO₂ reduction and carbon credit revenue potential.</p>
      </div>
      <div className="grid-2" style={{ marginBottom: 24 }}>
        {[['Monthly Fuel (tons)', tons, setTons, ''],['Carbon Credit Price (₹/tCO₂)', price, setPrice, '']].map(([l, v, fn]) => (
          <div className="field" key={l as string}>
            <label className="label">{l as string}</label>
            <input className="input" type="number" value={v as number} onChange={e => (fn as (n:number)=>void)(+e.target.value)} />
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, background: 'rgba(34,197,94,0.05)', borderRadius: 10, padding: 24, border: '1px solid rgba(34,197,94,0.2)' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--t-dim)', marginBottom: 4, letterSpacing: 1 }}>CO₂ AVOIDED / MONTH</div>
          <div style={{ fontFamily: 'var(--f-impact)', fontSize: 34, color: '#22c55e', letterSpacing: 1 }}>{co2.toFixed(0)} <span style={{ fontSize: 16 }}>tCO₂</span></div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'var(--t-dim)', marginBottom: 4, letterSpacing: 1 }}>CREDIT REVENUE / MONTH</div>
          <div style={{ fontFamily: 'var(--f-impact)', fontSize: 34, color: 'var(--gold)', letterSpacing: 1 }}>₹{rev.toLocaleString()}</div>
        </div>
      </div>
      <div style={{ marginTop: 16, background: 'var(--gold-dim)', border: '1px solid var(--c-border)', borderRadius: 8, padding: '12px 18px' }}>
        <span style={{ fontSize: 14, color: 'var(--gold-lt)' }}>📅 Annual CO₂ reduced: <strong>{(co2 * 12).toFixed(0)} tCO₂</strong> | Revenue: <strong>₹{(rev * 12).toLocaleString()}</strong></span>
      </div>
    </div>
  )
}

function BoilerCalc() {
  const [fuel, setFuel] = useState('coal')
  const [cap, setCap] = useState(5)
  const [hrs, setHrs] = useState(16)
  const gcv: Record<string,number> = { coal: 4500, hfo: 9800, naturalgas: 8500 }
  const eff: Record<string,number> = { coal: 0.82, hfo: 0.78, naturalgas: 0.90 }
  const curr = ((cap * 1000 * hrs) / (gcv[fuel] * eff[fuel])).toFixed(2)
  const bio  = ((cap * 1000 * hrs) / (4000 * 0.80)).toFixed(2)
  return (
    <div className="card" style={{ padding: '40px' }}>
      <div style={{ marginBottom: 28 }}>
        <span className="tag">Calculator 03</span>
        <h3 className="h3">🏭 Boiler Conversion</h3>
        <p style={{ fontSize: 14, color: 'var(--t-dim)', marginTop: 6 }}>Estimate biomass requirements for your boiler capacity.</p>
      </div>
      <div className="grid-3" style={{ marginBottom: 24 }}>
        <div className="field">
          <label className="label">Current Fuel</label>
          <select className="select" value={fuel} onChange={e => setFuel(e.target.value)}>
            <option value="coal">Coal</option>
            <option value="hfo">Heavy Fuel Oil</option>
            <option value="naturalgas">Natural Gas</option>
          </select>
        </div>
        <div className="field">
          <label className="label">Boiler Capacity (MW)</label>
          <input className="input" type="number" value={cap} onChange={e => setCap(+e.target.value)} />
        </div>
        <div className="field">
          <label className="label">Operating Hours/Day</label>
          <input className="input" type="number" value={hrs} onChange={e => setHrs(+e.target.value)} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, background: 'rgba(96,165,250,0.05)', borderRadius: 10, padding: 24, border: '1px solid rgba(96,165,250,0.2)' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--t-dim)', marginBottom: 4, letterSpacing: 1 }}>CURRENT FUEL / DAY</div>
          <div style={{ fontFamily: 'var(--f-impact)', fontSize: 34, color: '#ef4444', letterSpacing: 1 }}>{curr} <span style={{ fontSize: 16 }}>tons</span></div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'var(--t-dim)', marginBottom: 4, letterSpacing: 1 }}>BIOMASS REQUIRED / DAY</div>
          <div style={{ fontFamily: 'var(--f-impact)', fontSize: 34, color: '#22c55e', letterSpacing: 1 }}>{bio} <span style={{ fontSize: 16 }}>tons</span></div>
        </div>
      </div>
      <div style={{ marginTop: 16, background: 'var(--gold-dim)', border: '1px solid var(--c-border)', borderRadius: 8, padding: '12px 18px' }}>
        <span style={{ fontSize: 14, color: 'var(--gold-lt)' }}>ℹ️ Biomass volume includes calorific value adjustment. Minor boiler modifications may be needed.</span>
      </div>
    </div>
  )
}

export default function Calculators() {
  return (
    <div>
      <PageHero
        tag="Industrial Tools"
        title="Fuel & Sustainability"
        highlight="Calculators"
        sub="Interactive tools to evaluate economic and environmental benefits of switching to CARBOVA biomass."
        img="https://images.unsplash.com/photo-1565117168-2b1de48b8d06?w=1800&q=80"
      />
      <section className="section" style={{ background: 'var(--c-bg2)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="tag">Make Informed Decisions</span>
            <h2 className="h2">Industrial Fuel <span className="gold italic">& Sustainability Tools</span></h2>
            <p style={{ fontSize: 16, color: 'var(--t-b)', maxWidth: 560, margin: '12px auto 0', lineHeight: 1.7 }}>
              Use the tools below to evaluate the economic and environmental advantages of switching to CARBOVA biomass briquettes or pellets.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <FuelCalc />
            <CarbonCalc />
            <BoilerCalc />
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--c-bg)' }}>
        <div className="wrap">
          <span className="tag">Live Market Data</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="h2">Global Carbon <span className="gold italic">Credit Market</span></h2>
          </div>
          <CarbonWidget />
        </div>
      </section>
    </div>
  )
}
