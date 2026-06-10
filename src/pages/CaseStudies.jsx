import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RevealChar } from '../components/Animations'

const cases = [
  {
    id: 'case-1',
    title: 'Case 1',
    desc: 'Rajeev Agarwal is 30 years old and is married to Aarti who is 29. They have a daughter who is two years old. Rajeev is an engineer employed with a multinational firm and his annual salary is Rs 15 lakhs.',
    age: 30,
    equity: 40,
    risk: 'Average'
  },
  {
    id: 'case-2',
    title: 'Case 2',
    desc: 'Sunil, an MNC senior manager has just got promoted as Chief Marketing Officer. He is 47, and his wife Anita, 45 is a homemaker. They have two school going children, a son 14 and a daughter 12.',
    age: 47,
    equity: 60,
    risk: 'High'
  },
  {
    id: 'case-3',
    title: 'Case 3',
    desc: 'Jyoti Sharma is 92 years old. She is widowed. She has a pension of 75,000 per year adjusted for inflation. She owns a house which she used to live in and is now rented and generates a rent of 30,000 per month.',
    age: 92,
    equity: 10,
    risk: 'Low'
  }
]

export default function CaseStudies() {
  const [minAge, setMinAge] = useState(0)
  const [minEquity, setMinEquity] = useState(0)
  const [risk, setRisk] = useState('Risk Taking Ability')

  const handleReset = () => {
    setMinAge(0)
    setMinEquity(0)
    setRisk('Risk Taking Ability')
  }

  const filtered = cases.filter(c => {
    if (c.age < minAge) return false
    if (c.equity < minEquity) return false
    if (risk !== 'Risk Taking Ability' && c.risk !== risk) return false
    return true
  })

  return (
    <>
      <section style={{ minHeight: '45vh', display: 'flex', alignItems: 'center', background: 'var(--ed-bg)', borderBottom: '1px solid var(--ed-border)', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
        <div className="wrap pt-8 pb-8">
          <p className="t-overline mb-5" style={{ color: 'var(--ed-accent-gold)' }}>CASE STUDIES</p>
          <RevealChar as="h1" text="CASE \n STUDY" highlight="STUDY" className="t-mega mb-5" style={{ color: 'var(--ed-text-main)', transition: 'color 0.3s ease' }} />
          <p className="t-body-lg" style={{ maxWidth: 520, marginTop: 24, color: 'var(--ed-text-sub)', transition: 'color 0.3s ease' }}>Real-world investment analysis and recommendations.</p>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--ed-bg-alt)', transition: 'background-color 0.3s ease' }}>
        <div className="wrap" style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start' }}>
          
          {/* Sidebar */}
          <div className="filters-sidebar" style={{ width: '300px', flexShrink: 0, padding: '2rem', background: 'var(--ed-card-bg)', borderRadius: '12px', border: '1px solid var(--ed-border)', boxShadow: '0 8px 24px rgba(0,0,0,0.04)', position: 'sticky', top: '100px', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
            <h3 style={{ color: 'var(--ed-text-main)', marginBottom: '2rem', fontSize: '18px', fontWeight: 600, transition: 'color 0.3s ease' }}>Filters</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'var(--ed-text-main)', marginBottom: '1rem', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>Age</label>
              <input 
                type="range" 
                min="0" max="100" 
                value={minAge} 
                onChange={e => setMinAge(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--ed-accent-gold)' }}
              />
              <div style={{ textAlign: 'center', marginTop: '0.5rem', color: 'var(--ed-text-main)', fontSize: '14px', transition: 'color 0.3s ease' }}>
                {minAge} — 100
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'var(--ed-text-main)', marginBottom: '1rem', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>Percentage equity exposure</label>
              <input 
                type="range" 
                min="0" max="100" 
                value={minEquity} 
                onChange={e => setMinEquity(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--ed-accent-gold)' }}
              />
              <div style={{ textAlign: 'center', marginTop: '0.5rem', color: 'var(--ed-text-main)', fontSize: '14px', transition: 'color 0.3s ease' }}>
                {minEquity} — 100
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'var(--ed-text-main)', marginBottom: '1rem', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>Risk Taking Ability</label>
              <select 
                value={risk} 
                onChange={e => setRisk(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', background: 'var(--ed-bg)', border: '1px solid var(--ed-border)', borderRadius: '4px', fontSize: '14px', outline: 'none', cursor: 'pointer', color: 'var(--ed-text-main)', transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease' }}
              >
                <option>Risk Taking Ability</option>
                <option>Low</option>
                <option>Average</option>
                <option>High</option>
              </select>
            </div>

            <button 
              onClick={handleReset}
              style={{ width: '100%', padding: '0.75rem', background: 'var(--ed-accent-gold)', color: '#FFFFFF', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 500, fontSize: '14px', transition: 'opacity 0.2s' }}
              onMouseOver={e => e.currentTarget.style.opacity = 0.8}
              onMouseOut={e => e.currentTarget.style.opacity = 1}
            >
              Reset
            </button>
          </div>

          {/* List */}
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <AnimatePresence>
              {filtered.map((c, i) => (
                <motion.div 
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link 
                    to={`/case_study/${c.id}`}
                    className="interactive-block"
                  >
                    <h3 className="interactive-block-title" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>{c.title}</h3>
                    <p className="interactive-block-text t-body" style={{ marginBottom: 0, lineHeight: 1.6 }}>{c.desc}</p>
                    <div className="interactive-block-arrow">
                      Read More <span style={{ fontSize: '16px' }}>→</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
              {filtered.length === 0 && (
                <div style={{ color: 'var(--ed-text-sub)', padding: '2rem 0', transition: 'color 0.3s ease' }}>No case studies match your filters.</div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .sec > .wrap { flex-direction: column !important; }
          .filters-sidebar { width: 100% !important; position: static !important; }
        }
      `}</style>
    </>
  )
}
