import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HoverFlip, RevealChar } from '../components/Animations'
import { SpreadCards } from '../components/SpreadCards'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, useGLTF } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function MoneyTreeModel() {
  const { scene } = useGLTF('/money_tree.glb')
  const group = useRef()
  const mesh = useRef()

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.3
    }
    if (group.current) {
      const targetX = (state.pointer.y * Math.PI) / 6
      const targetY = (state.pointer.x * Math.PI) / 6
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.1)
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.1)
    }
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <primitive ref={mesh} object={scene} scale={0.75} position={[0, -2.1, 0]} />
      </Float>
    </group>
  )
}

const f = (d = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] } })

const wins = [
  { num: '01', title: 'Shift to Direct Funds', desc: 'Choose a direct MF over a regular MF — save on fees every single year.', to: '/2023/08/18/when-investing-in-a-mutual-fund-choose-a-direct-mf-over-a-regular-mf/' },
  { num: '02', title: 'Participate in NPS', desc: 'Tax benefits and low-cost investment options for retirement planning.', to: '/2023/08/20/national-pension-system-nps/' },
  { num: '03', title: 'Switch to Liquid Funds', desc: 'Earn better returns on emergency funds than a savings account.', to: '/2023/08/19/why-keeping-money-in-a-liquid-mutual-fund-is-better-for-short-term-needs-than-keeping-it-in-a-savings-account/' },
  { num: '04', title: 'Government Savings', desc: 'Move from fixed deposits to government small savings schemes.', to: '/2023/08/23/government-savings-schemes/' },
]

export default function EasyWins() {
  const [load3D, setLoad3D] = useState(false);

  useEffect(() => {
    // Delay loading the heavy 3D canvas to prioritize initial page render
    const timer = setTimeout(() => {
      setLoad3D(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div style={{ position: 'relative', overflowX: 'hidden' }}>
        {/* ══════ EASY WINS HERO ══════ */}
        <section
          className="sec"
          style={{
            background: "var(--ed-bg)",
            position: "relative",
            zIndex: 1,
            padding: "clamp(60px, 10vw, 120px) 0",
            boxShadow: "0 4px 24px rgba(0,0,0,0.03)",
            transition: "background-color 0.3s ease"
          }}
        >
          <div className="wrap">
            <div 
              style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: "clamp(30px, 5vw, 60px)", 
                alignItems: "center" 
              }}
            >
              {/* LEFT: Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ flex: "1 1 min(100%, 500px)" }}
              >
                <h1 
                  style={{ 
                    fontFamily: "var(--font-editorial)",
                    fontSize: "clamp(48px, 6vw, 72px)", 
                    fontWeight: 600, 
                    color: "var(--ed-text-main)", 
                    marginBottom: "32px",
                    letterSpacing: "-0.02em",
                    transition: "color 0.3s ease"
                  }}
                >
                  Easy Wins
                </h1>
                <p 
                  style={{ 
                    fontSize: "18px", 
                    lineHeight: 1.8, 
                    color: "var(--ed-text-sub)", 
                    marginBottom: "24px",
                    fontWeight: 400,
                    transition: "color 0.3s ease"
                  }}
                >
                  We share a few easy things that you can do to improve investment outcomes. With most investment decisions, there is a potential benefit and associated downside. One has to evaluate the benefits against the costs to decide what to do. With many decisions, whether you are better or worse off, depends upon whether equity market returns are better or worse than fixed income returns in the future over your holding horizon.
                </p>
                <p 
                  style={{ 
                    fontSize: "18px", 
                    lineHeight: 1.8, 
                    color: "var(--ed-text-sub)", 
                    marginBottom: "40px",
                    fontWeight: 400,
                    transition: "color 0.3s ease"
                  }}
                >
                  The Easy Wins are different in that these are opportunities for benefits without any significant associated downside. These are actions that you can take where we are very confident that you will be better off for taking these actions, whether markets go up or down.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "var(--ed-accent-gold)",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "16px 36px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  Know More
                </motion.button>
              </motion.div>

              {/* RIGHT: 3D Model Iframe */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ flex: "1 1 min(100%, 500px)", display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                <div style={{ width: "100%", maxWidth: "600px", aspectRatio: "4/3", borderRadius: "16px", background: "var(--ed-card-bg)", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.04)", border: "1px solid var(--ed-border)", transition: "background-color 0.3s ease, border-color 0.3s ease", position: "relative" }}>
                  {!load3D && (
                    <div className="skeleton-box" style={{ position: "absolute", inset: 0, zIndex: 1, borderRadius: "16px" }}>
                      <div className="loading-spinner"></div>
                    </div>
                  )}
                  {load3D && (
                    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                      <ambientLight intensity={0.8} />
                      <directionalLight position={[10, 10, 5]} intensity={1.5} />
                      <Environment preset="city" />
                      <MoneyTreeModel />
                    </Canvas>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="sec" style={{ background: 'var(--ed-bg-alt)', minHeight: '100vh', position: 'relative', zIndex: 1, boxShadow: 'var(--shadow-hard-2)', transition: 'background-color 0.3s ease' }}>
          <div className="wrap">
            <SpreadCards
              items={wins}
              cols={4}
              className="g-4"
              renderCard={(item) => (
                <Link to={item.to} className="card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 240, background: 'var(--ed-card-bg)', padding: '32px', borderRadius: '16px', border: '1px solid var(--ed-border)', boxShadow: '0 8px 24px rgba(0,0,0,0.04)', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 24, color: 'var(--ed-accent-gold)', fontWeight: 600, marginBottom: 20, display: 'block' }}>{item.num}</span>
                  <h3 className="t-h3" style={{ marginBottom: 8, color: 'var(--ed-text-main)', transition: 'color 0.3s ease' }}><HoverFlip text={item.title} /></h3>
                  <p className="t-caption" style={{ flex: 1, color: 'var(--ed-text-sub)', opacity: 0.9, transition: 'color 0.3s ease' }}>{item.desc}</p>
                  <span className="card-hover-explore" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ed-accent-red)', marginTop: 24, display: 'flex', alignItems: 'center', gap: '6px' }}>Explore <span className="card-hover-arrow" style={{ fontSize: '16px' }}>→</span></span>
                </Link>
              )}
            />
          </div>
        </section>
      </div>
    </>
  )
}
