import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HoverFlip, RevealChar } from '../components/Animations'

const steps = [
  {
    num: "01",
    title: "Evaluate and Manage Debt",
    desc: "Before investing, always evaluate your existing debt. Pay off high-interest loans (like credit cards and personal loans) first. The guaranteed return of eliminating high-interest debt is almost impossible to beat in the financial markets.",
    link: null
  },
  {
    num: "02",
    title: "Secure an Emergency Fund",
    desc: "Set aside 6 to 12 months of living expenses. Keep this money in a liquid mutual fund rather than a regular savings account to earn slightly better returns while maintaining accessibility.",
    link: "/2023/08/19/why-keeping-money-in-a-liquid-mutual-fund-is-better-for-short-term-needs-than-keeping-it-in-a-savings-account/"
  },
  {
    num: "03",
    title: "Define Risk and Horizon",
    desc: "Understand your investment horizon and evaluate your true risk tolerance. If a severe market drop would cause you to panic and sell, you need to reduce your equity exposure accordingly.",
    link: "/2023/08/08/risk-and-return-profile-of-equity/"
  },
  {
    num: "04",
    title: "Determine Asset Allocation",
    desc: "Decide how much of your capital to allocate to Equities (for growth) and Fixed Income (for stability). This is the single most important decision in your investment journey.",
    link: "/2023/08/05/asset-allocation/"
  },
  {
    num: "05",
    title: "Execute Fixed Income",
    desc: "For the fixed income portion of your allocation, prioritize Government Small Savings Schemes (like PPF or SCSS) and the National Pension System (NPS) for retirement goals.",
    link: "/2023/08/23/government-savings-schemes/"
  },
  {
    num: "06",
    title: "Execute Equities",
    desc: "For your equity exposure, do not try to pick individual stocks or time the market. Buy broad-market Index Funds through Direct Mutual Funds to minimize costs.",
    link: "/2023/08/11/index-funds/"
  },
  {
    num: "07",
    title: "Keep Costs Low & Be Patient",
    desc: "Taxes and fees significantly impact long-term compounding. Stick to your allocation, minimize unnecessary trading, and let the power of compound interest work over time.",
    link: "/2023/08/03/compound-interest-and-exponential-growth/"
  }
];

export default function StepsToInvestingSuccess() {
  return (
    <>
      <section className="sec" style={{ background: 'var(--ed-bg)', padding: "clamp(80px, 10vw, 140px) 0", position: 'relative', overflow: 'hidden', transition: 'background-color 0.3s ease' }}>


        <div className="wrap">
          <div className="tc mb-8" style={{ position: 'relative', zIndex: 1 }}>
            <p className="t-overline mb-4" style={{ color: "var(--ed-accent-gold)" }}>YOUR ROADMAP</p>
            <RevealChar as="h1" text="Steps to Investing Success" className="t-mega mb-6" style={{ lineHeight: 0.95, color: 'var(--ed-text-main)' }} />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="t-body-lg mb-4"
              style={{ color: 'var(--ed-text-sub)', maxWidth: 700, margin: '0 auto' }}
            >
              Follow these key steps in the Dhanopinion investing strategy. We start from the absolute basics—managing debt—and walk you through building a resilient, low-cost portfolio.
            </motion.p>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="hairline-gold" style={{ margin: '40px auto 0' }} />
          </div>

          <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="card"
                style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 32px)',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--ed-card-bg)',
                  border: '1px solid var(--ed-border)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  backdropFilter: 'blur(20px)',
                  alignItems: 'flex-start',
                  padding: 'clamp(24px, 5vw, 40px)',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}
              >
                <div style={{
                  fontSize: 'clamp(48px, 8vw, 64px)',
                  fontWeight: 800,
                  color: 'transparent',
                  WebkitTextStroke: '1px var(--ed-accent-gold)',
                  lineHeight: 0.8,
                  fontFamily: 'var(--font-mono)'
                }}>
                  {step.num}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="t-h2" style={{ marginBottom: '16px', color: 'var(--ed-text-main)', transition: 'color 0.3s ease' }}>{step.title}</h3>
                  <p className="t-body" style={{ color: 'var(--ed-text-sub)', marginBottom: step.link ? '24px' : '0', transition: 'color 0.3s ease' }}>{step.desc}</p>
                  {step.link && (
                    <Link to={step.link} className="card-hover-explore" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ed-accent-red)', marginTop: 24, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                      Explore <span className="card-hover-arrow" style={{ fontSize: '16px' }}>→</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FEATURED: NPS ══════ */}
      <section className="sec" style={{ background: "var(--ed-bg-alt)", padding: "80px 40px 160px", transition: "background 0.3s ease" }}>
        <div className="wrap" style={{ maxWidth: "1400px" }}>
          <div style={{ width: "100%", height: "1px", background: "var(--ed-divider)", margin: "0 auto 80px", transition: "background 0.3s ease" }}></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "120px",
              borderRadius: "24px",
              background: "var(--ed-sec-nps)",
              color: "var(--ed-text-main)",
              boxShadow: "0 32px 64px rgba(0,0,0,0.05)",
              transition: "background 0.3s ease, color 0.3s ease"
            }}
          >
            {/* Top Row: Title and Pill */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px" }}>
              <div>
                <p style={{
                  display: "inline-flex",
                  alignItems: "center",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--ed-accent-red)",
                  marginBottom: "24px"
                }}>
                  <div style={{ width: "8px", height: "8px", background: "var(--ed-accent-red)", borderRadius: "50%", marginRight: "12px" }}></div>
                  FEATURED TOOL
                </p>
                <h2 style={{
                  fontFamily: "var(--font-editorial)",
                  fontSize: "clamp(80px, 10vw, 120px)",
                  color: "var(--ed-text-main)",
                  margin: 0,
                  maxWidth: "1000px",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  fontWeight: 400
                }}>
                  The National Pension<br />
                  <span style={{ fontStyle: "italic", color: "var(--ed-accent-red)" }}>System (NPS)</span>
                </h2>
              </div>
            </div>

            {/* Bottom Row: Description and Button */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "40px", marginTop: "auto", paddingTop: "120px" }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "20px",
                color: "var(--ed-text-sub)",
                lineHeight: 1.6,
                margin: 0,
                maxWidth: "500px",
                fontWeight: 400
              }}>
                One of the most powerful tools for retirement planning. Discover our in-depth analysis on how to utilize the NPS to secure your financial future effectively.
              </p>

              <Link
                to="/2023/08/20/national-pension-system-nps/"
                style={{
                  background: "var(--ed-text-main)",
                  color: "var(--ed-bg)",
                  textDecoration: "none",
                  padding: "20px 40px",
                  fontSize: "15px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--ed-accent-red)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--ed-text-main)";
                  e.currentTarget.style.color = "var(--ed-bg)";
                }}
              >
                Read the Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
