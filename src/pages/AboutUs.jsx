import { useState } from 'react'
import { motion } from 'framer-motion'
import { RevealChar } from '../components/Animations'

const f = (d = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] }
})

const inputStyle = {
  background: 'var(--ed-bg)',
  border: '1px solid var(--ed-border)',
  borderRadius: '8px',
  padding: '14px 16px',
  fontSize: '15px',
  color: 'var(--ed-text-main)',
  outline: 'none',
  transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
  width: '100%',
  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
};

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    isUseful: '',
    knowFees: '',
    knowStocksPct: '',
    willingToPay: '',
    valuableThings: '',
    anythingElse: ''
  })

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Feedback:", formData)
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    console.log("Contact:", contactData)
  }

  const handleFocus = (e) => { e.target.style.borderColor = 'var(--ed-accent-gold)'; e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'; };
  const handleBlur = (e) => { e.target.style.borderColor = 'var(--ed-border)'; e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; };

  return (
    <>
      <section style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', background: 'var(--ed-bg)', position: 'relative', overflow: 'hidden', transition: 'background-color 0.3s ease' }}>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }}>
            <p className="t-overline mb-5" style={{ color: 'var(--ed-accent-gold)', letterSpacing: '0.2em' }}>OUR STORY</p>
          </motion.div>
          <RevealChar as="h1" text="ABOUT \n US" highlight="US" className="t-mega mb-5" style={{ color: 'var(--ed-text-main)', transition: 'color 0.3s ease' }} />
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="t-h4" style={{ color: 'var(--ed-text-sub)', maxWidth: '600px', fontWeight: 400, lineHeight: 1.6, transition: 'color 0.3s ease' }}
          >
            An experiment to see if we can contribute to making the investment process and outcomes better for people.
          </motion.p>
        </div>
      </section>

      {/* The Team Section */}
      <section className="sec" style={{ background: 'var(--ed-bg-alt)', padding: '100px 0', transition: 'background-color 0.3s ease' }}>
        <div className="wrap">
          <div className="tc mb-8">
            <RevealChar as="h2" text="The Team" className="t-h2 mb-4" style={{ color: 'var(--ed-text-main)', transition: 'color 0.3s ease' }} />
            <p className="t-body" style={{ color: 'var(--ed-text-sub)', maxWidth: '600px', margin: '0 auto', transition: 'color 0.3s ease' }}>
              The people behind DhanOpinion.
            </p>
            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="hairline-gold" style={{ margin: '32px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', maxWidth: '600px', margin: '0 auto' }}>

            {/* The DhanOpinion Team */}
            <motion.div {...f(0.1)} className="card" style={{ background: 'var(--ed-card-bg)', border: '1px solid var(--ed-border)', borderRadius: '16px', padding: '40px', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.04)', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
              <h3 className="t-h3 mb-2" style={{ color: 'var(--ed-text-main)', transition: 'color 0.3s ease' }}>The DhanOpinion Team</h3>
              <p className="t-overline mb-4" style={{ color: 'var(--ed-accent-gold)' }}>EXPERTS & EDUCATORS</p>
              <p className="t-body" style={{ color: 'var(--ed-text-sub)', fontSize: '16px', lineHeight: 1.7, transition: 'color 0.3s ease' }}>
                DhanOpinion is an experiment to see if we can contribute to making the investment process and outcomes better for people. We leverage our education, training, and experience to provide simple, effective guidance and unbiased views to a large number of people in an efficient way.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="sec" style={{ background: 'var(--ed-bg)', padding: '100px 0', borderTop: '1px solid var(--ed-border)', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
        <div className="wrap">
          <motion.div {...f(0.1)} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="t-body mb-6" style={{ color: 'var(--ed-text-sub)', fontSize: '18px', lineHeight: 1.7, transition: 'color 0.3s ease' }}>
              Personal Financial Advice is a huge area of activity. It can have a significant impact on household wealth and wellbeing. It is our experience and observation that things are often not working very well.
            </p>
            <p className="t-body mb-6" style={{ color: 'var(--ed-text-sub)', fontSize: '18px', lineHeight: 1.7, transition: 'color 0.3s ease' }}>
              People find it difficult to understand and make investment decisions. They end up with too little or too much risk relative to what they would have chosen if they had the expertise to make the best decisions for themselves. They often incur a lot of costs and fees in the process, do not know what they paying and what results they are getting for the payments.
            </p>
            <p className="t-body mb-6" style={{ color: 'var(--ed-text-sub)', fontSize: '18px', lineHeight: 1.7, transition: 'color 0.3s ease' }}>
              Unfortunately there is often a conflict of interest between the product providers and advisors and the clients – because the products that generate the highest profits for the providers are not the best for the clients and the best solutions generate very low profits to the providers.
            </p>
            <p className="t-body mb-6" style={{ color: 'var(--ed-text-sub)', fontSize: '18px', lineHeight: 1.7, transition: 'color 0.3s ease' }}>
              DhanOpinion is an experiment to see if we can contribute to making the investment process and outcomes better for people. The objective is to provide simple effective guidance at low cost. We think we can leverage our education, training and experience to provide something of value to a large number of people in an efficient way.
            </p>
            <p className="t-body mb-6" style={{ color: 'var(--ed-text-sub)', fontSize: '18px', lineHeight: 1.7, transition: 'color 0.3s ease' }}>
              If you find DhanOpinion useful, please let us know. If there is something you would like us to analyze, that would be useful to you and many others, let us know and we will consider doing the analysis.
            </p>
            <p className="t-body" style={{ color: 'var(--ed-text-sub)', fontSize: '18px', lineHeight: 1.7, transition: 'color 0.3s ease' }}>
              We think that we should be able to use technology and our domain expertise to improve the product over time. If you have any specific suggestions or expertise that you would like to contribute to the effort please let us know. It will help us greatly if you can fill in the brief questionnaire below:
            </p>
          </motion.div>
        </div>
      </section>

      {/* Forms Section: Contact & Feedback */}
      <section style={{ background: 'var(--ed-bg-alt)', padding: '100px 0', borderTop: '1px solid var(--ed-border)', borderBottom: '1px solid var(--ed-border)', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
        <div className="wrap">

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px' }}>

            {/* Contact Us Form */}
            <motion.div {...f()}>
              <div style={{ marginBottom: '32px' }}>
                <RevealChar as="h2" text="Contact Us" className="t-h2 mb-4" style={{ color: 'var(--ed-accent-gold)' }} delay={0.1} />
                <p className="t-body" style={{ color: 'var(--ed-text-sub)', transition: 'color 0.3s ease' }}>
                  Have a question or want to reach out directly? Send us a message below or email us at <a href="mailto:response@dhanopinion.com" style={{ color: 'var(--ed-accent-gold)', textDecoration: 'none' }}>response@dhanopinion.com</a>.
                </p>
              </div>

              <div style={{ background: 'var(--ed-card-bg)', borderRadius: '24px', padding: '40px', border: '1px solid var(--ed-border)', boxShadow: '0 8px 24px rgba(0,0,0,0.04)', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
                <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="contactName" style={{ color: 'var(--ed-text-main)', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>Name</label>
                    <input type="text" id="contactName" name="name" value={contactData.name} onChange={handleContactChange} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="contactEmail" style={{ color: 'var(--ed-text-main)', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>Email</label>
                    <input type="email" id="contactEmail" name="email" value={contactData.email} onChange={handleContactChange} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="message" style={{ color: 'var(--ed-text-main)', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>Message</label>
                    <textarea id="message" name="message" value={contactData.message} onChange={handleContactChange} rows="5" style={{ ...inputStyle, resize: 'vertical' }} onFocus={handleFocus} onBlur={handleBlur}></textarea>
                  </div>
                  <button type="submit" className="btn" style={{ width: '100%', marginTop: '8px', padding: '16px', background: 'var(--ed-accent-gold)', color: '#FFFFFF', fontWeight: 600, border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Feedback Form */}
            <motion.div {...f(0.2)}>
              <div style={{ marginBottom: '32px' }}>
                <RevealChar as="h2" text="Leave Feedback" className="t-h2 mb-4" style={{ color: 'var(--ed-accent-gold)' }} delay={0.2} />
                <p className="t-body" style={{ color: 'var(--ed-text-sub)', transition: 'color 0.3s ease' }}>
                  If you have specific suggestions or expertise you would like to contribute, please let us know.
                </p>
              </div>

              <div style={{ background: 'var(--ed-card-bg)', borderRadius: '24px', padding: '40px', border: '1px solid var(--ed-border)', boxShadow: '0 8px 24px rgba(0,0,0,0.04)', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="name" style={{ color: 'var(--ed-text-main)', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="mobile" style={{ color: 'var(--ed-text-main)', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>Mobile</label>
                      <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="email" style={{ color: 'var(--ed-text-main)', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>

                  {/* Radio Questions */}
                  {[
                    { name: 'isUseful', label: 'Is DhanOpinion useful?' },
                    { name: 'knowFees', label: 'Do you know how much you are paying for your investments?' },
                    { name: 'knowStocksPct', label: 'Do you know what percentage of your investments are in stocks?' },
                    { name: 'willingToPay', label: 'Would you be willing to pay anything to cover costs?' }
                  ].map((q) => (
                    <div key={q.name} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <label style={{ color: 'var(--ed-text-main)', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>{q.label}</label>
                      <div style={{ display: 'flex', gap: '24px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ed-text-sub)', cursor: 'pointer', fontSize: '15px', transition: 'color 0.3s ease' }}>
                          <input type="radio" name={q.name} value="Yes" checked={formData[q.name] === 'Yes'} onChange={handleChange} style={{ accentColor: 'var(--ed-accent-gold)', width: '16px', height: '16px' }} />
                          Yes
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ed-text-sub)', cursor: 'pointer', fontSize: '15px', transition: 'color 0.3s ease' }}>
                          <input type="radio" name={q.name} value="No" checked={formData[q.name] === 'No'} onChange={handleChange} style={{ accentColor: 'var(--ed-accent-gold)', width: '16px', height: '16px' }} />
                          No
                        </label>
                      </div>
                    </div>
                  ))}

                  {/* Textareas */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                    <label htmlFor="valuableThings" style={{ color: 'var(--ed-text-main)', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>What else would be valuable to you?</label>
                    <textarea id="valuableThings" name="valuableThings" value={formData.valuableThings} onChange={handleChange} rows="2" style={{ ...inputStyle, resize: 'vertical' }} onFocus={handleFocus} onBlur={handleBlur}></textarea>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="anythingElse" style={{ color: 'var(--ed-text-main)', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s ease' }}>Anything else you would like to share?</label>
                    <textarea id="anythingElse" name="anythingElse" value={formData.anythingElse} onChange={handleChange} rows="2" style={{ ...inputStyle, resize: 'vertical' }} onFocus={handleFocus} onBlur={handleBlur}></textarea>
                  </div>

                  <button type="submit" className="btn" style={{ width: '100%', marginTop: '8px', padding: '16px', background: 'var(--ed-accent-gold)', color: '#FFFFFF', border: 'none', fontWeight: 600, borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.background = 'var(--ed-accent-red)'; }} onMouseOut={(e) => { e.target.style.background = 'var(--ed-accent-gold)'; }}>
                    Submit Feedback
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
