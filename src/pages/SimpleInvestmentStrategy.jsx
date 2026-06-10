import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HoverFlip, RevealChar } from '../components/Animations'
import chessImage from '../assets/investment_chess_strategy.png'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const elements = [
  { text: "Start saving early if you can, even if the amounts of saving are small.", link: "/2023/08/03/compound-interest-and-exponential-growth/" },
  { text: "Focus on deciding how much to put into equities and how much to put into fixed income assets. This is Asset Allocation and has the biggest impact on your future gains and losses.", link: "/2023/08/05/asset-allocation/" },
  { text: "Think about what you will do if markets drop and your investments lose value - if you are likely to sell to avoid further losses, you may be taking too much risk and should consider reducing your risk now.", link: "/2023/08/08/risk-and-return-profile-of-equity/" },
  { text: "Investment in stocks - Do not pick individual stocks or securities.", link: "/2023/08/14/dont-pick-stocks-buy-the-index/" },
  { text: "Exposure to asset classes - Use Index funds for your equity risk exposure, and do not try to time the market by predicting short-term movements.", link: "/2023/08/11/index-funds/" },
  { text: "Exposure to asset classes - Use Government Small savings Schemes for your fixed income exposures.", link: "/2023/08/23/government-savings-schemes/" },
  { text: "Use the National Pension Scheme for your long-term investment goals.", link: "/2023/08/20/national-pension-system-nps/" }
]

export default function SimpleInvestmentStrategy() {
  return (
    <>
      <section className="sec" style={{ background: 'var(--ed-bg)', minHeight: '80vh', display: 'flex', alignItems: 'center', transition: 'background-color 0.3s ease' }}>
        <div className="wrap">
          <div className="g-2" style={{ alignItems: 'center' }}>
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="hairline-gold mb-5" />
              <RevealChar as="h1" text="A Simple \n Investment \n Strategy" className="t-mega mb-6" style={{ lineHeight: 0.95, color: 'var(--ed-text-main)' }} />
              <motion.p variants={fadeUp} className="t-body-lg mb-4" style={{ color: 'var(--ed-text-main)' }}>
                Investing can be very complex. However it is possible to create simple investment strategies that can be surprisingly effective.
              </motion.p>
              <motion.p variants={fadeUp} className="t-body mb-7" style={{ color: 'var(--ed-text-sub)' }}>
                Here we suggest a simple investment strategy that is easy to understand and that is likely to be more effective than most complex investment strategies recommended to individual investors.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a href="#elements" className="btn btn-gold">
                  <HoverFlip text="KNOW MORE" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ position: 'relative', padding: 'var(--sp-4)' }}>

                <img 
                  src={chessImage} 
                  alt="Chess Strategy" 
                  style={{ width: '100%', height: 'auto', borderRadius: '4px', position: 'relative', zIndex: 1, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }} 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="elements" className="sec" style={{ background: 'var(--ed-bg-alt)', borderTop: '1px solid var(--ed-border)', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
        <div className="wrap">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-8 tc"
          >
            <h2 className="t-h1 mb-4" style={{ color: 'var(--ed-text-main)' }}>Here are the elements of the simple investment strategy</h2>
            <div className="hairline-gold" style={{ margin: '0 auto' }}></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}
          >
            {elements.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
              >
                <Link
                  to={item.link}
                  className="interactive-row"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    gap: 'var(--sp-5)',
                    padding: 'var(--sp-4) var(--sp-5)',
                    borderBottom: '1px solid var(--ed-border)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s ease, padding-left 0.3s ease, padding-right 0.3s ease'
                  }}
                >
                  <p className="interactive-row-text" style={{ margin: 0, flex: 1, color: 'var(--ed-text-sub)', transition: 'color 0.3s ease', lineHeight: 1.6 }}>
                    {item.text}
                  </p>
                  <div className="interactive-row-arrow" style={{
                    color: 'var(--ed-accent-red)',
                    fontWeight: 600,
                    opacity: 0,
                    transform: 'translateX(-10px)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    Explore <span style={{ fontSize: '16px' }}>→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
