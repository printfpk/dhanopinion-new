import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RevealChar } from '../components/Animations'

import { allArticles } from '../data/articles'

const ITEMS_PER_PAGE = 10;

export default function InformationCentre() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('Category...')
  const [dateRange, setDateRange] = useState('Select Date Range')
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = useMemo(() => {
    return allArticles.filter(a => {
      if (keyword && !a.title.toLowerCase().includes(keyword.toLowerCase())) return false;
      if (category !== 'Category...' && a.category !== category) return false;
      if (dateRange !== 'Select Date Range' && !a.date.includes(dateRange)) return false;
      return true;
    });
  }, [keyword, category, dateRange])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  // Update current page if filters change
  useMemo(() => { setCurrentPage(1) }, [filtered.length])

  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const categories = ['Category...', ...new Set(allArticles.map(a => a.category))].sort()
  const dates = ['Select Date Range', 'January', 'April', 'August', 'September', 'October']

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }

  return (
    <>
      <section style={{ minHeight: '45vh', display: 'flex', alignItems: 'center', background: 'var(--ed-bg)', borderBottom: '1px solid var(--ed-border)', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
        <div className="wrap pt-8 pb-8">
          <p className="t-overline mb-5" style={{ color: 'var(--ed-accent-gold)' }}>LEARN</p>
          <RevealChar as="h1" text="INFORMATION \n CENTRE" highlight="CENTRE" className="t-mega mb-5" style={{ color: 'var(--ed-text-main)', transition: 'color 0.3s ease' }} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="t-body-lg" style={{ maxWidth: 800, marginTop: 24, color: 'var(--ed-text-sub)', transition: 'color 0.3s ease' }}>Educational resources to deepen your investment knowledge.</p>
            <p className="t-body" style={{ maxWidth: 800, marginTop: 16, color: 'var(--ed-text-sub)', transition: 'color 0.3s ease' }}>
              Here you will find our comprehensive collection of articles, research, and analysis covering various aspects of investing. You can use the filters below to navigate specific categories or search by keyword to find exactly what you are looking for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Container mirroring the dark blue layout of the screenshot */}
      <section className="sec" style={{ background: 'var(--ed-bg-alt)', transition: 'background-color 0.3s ease' }}>
        <div className="wrap" style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start' }}>

          {/* Sidebar */}
          <div className="filters-sidebar" style={{ width: '300px', flexShrink: 0, padding: '1rem 0', position: 'sticky', top: '100px' }}>
            <h3 style={{ color: 'var(--ed-text-main)', marginBottom: '1.5rem', fontSize: '18px', fontWeight: 600, transition: 'color 0.3s ease' }}>Filters</h3>

            <div style={{ marginBottom: '2rem' }}>
              <input
                type="text"
                placeholder="Input Keyword..."
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', background: 'var(--ed-bg)', border: '1px solid var(--ed-border)', borderRadius: '4px', fontSize: '15px', outline: 'none', color: 'var(--ed-text-main)', transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'var(--ed-text-main)', marginBottom: '1rem', fontSize: '16px', fontWeight: 500, transition: 'color 0.3s ease' }}>Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', background: 'var(--ed-bg)', border: '1px solid var(--ed-border)', borderRadius: '4px', fontSize: '15px', outline: 'none', cursor: 'pointer', color: 'var(--ed-text-main)', transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease' }}
              >
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'var(--ed-text-main)', marginBottom: '1rem', fontSize: '16px', fontWeight: 500, transition: 'color 0.3s ease' }}>Date</label>
              <select
                value={dateRange}
                onChange={e => setDateRange(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', background: 'var(--ed-bg)', border: '1px solid var(--ed-border)', borderRadius: '4px', fontSize: '15px', outline: 'none', cursor: 'pointer', color: 'var(--ed-text-main)', transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease' }}
              >
                {dates.map(m => <option key={m}>{m}</option>)}
              </select>
            </div>
          </div>

          {/* List Area */}
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ minHeight: '600px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage + category + keyword + dateRange}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {paginated.map((a) => (
                    <div key={a.id} style={{ borderBottom: '1px solid var(--ed-border)', transition: 'border-color 0.3s ease' }}>
                      <Link
                        to={a.to}
                        style={{ display: 'block', padding: '24px 0', textDecoration: 'none', transition: 'padding-left 0.3s ease' }}
                        className="article-link-hover"
                      >
                        <h3 style={{ fontSize: '17px', color: 'var(--ed-text-main)', fontWeight: 600, marginBottom: '8px', lineHeight: 1.4, transition: 'color 0.3s ease' }}>
                          {a.title}
                        </h3>
                        <p style={{ fontSize: '12px', color: 'var(--ed-accent-gold)', fontWeight: 600, margin: 0 }}>
                          {a.date}
                        </p>
                      </Link>
                    </div>
                  ))}
                  {filtered.length === 0 && (
                    <div style={{ color: 'var(--ed-text-sub)', padding: '2rem 0', transition: 'color 0.3s ease' }}>No articles match your filters.</div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '40px', paddingBottom: '40px' }}>
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  style={{ background: 'none', border: 'none', color: currentPage === 1 ? 'var(--ed-text-sub)' : 'var(--ed-text-main)', cursor: currentPage === 1 ? 'default' : 'pointer', fontSize: '15px', fontWeight: 500, opacity: currentPage === 1 ? 0.5 : 1 }}
                >
                  Prev
                </button>

                {[...Array(totalPages)].map((_, idx) => {
                  const p = idx + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: currentPage === p ? 'var(--ed-accent-gold)' : 'var(--ed-text-main)',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: 600,
                        padding: '4px 8px'
                      }}
                    >
                      {p}
                    </button>
                  )
                })}

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  style={{ background: 'none', border: 'none', color: currentPage === totalPages ? 'var(--ed-text-sub)' : 'var(--ed-text-main)', cursor: currentPage === totalPages ? 'default' : 'pointer', fontSize: '15px', fontWeight: 500, opacity: currentPage === totalPages ? 0.5 : 1 }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <style>{`
        .article-link-hover:hover {
          padding-left: 8px !important;
        }
        .article-link-hover:hover h3 {
          color: var(--ed-accent-gold) !important;
        }
        @media (max-width: 768px) {
          .sec > .wrap { flex-direction: column !important; }
          .filters-sidebar { width: 100% !important; position: static !important; }
        }
      `}</style>
    </>
  )
}
