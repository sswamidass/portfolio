import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import PasswordModal from '../components/PasswordModal'
import { workItems } from '../data/work'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './WorkPage.css'

export default function WorkPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [gatedItem, setGatedItem] = useState(null)
  const sectionRefs = useRef([])
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Work — Sanjay Swamidass'
  }, [])

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i) },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  function scrollTo(i) {
    sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleViewProject(item) {
    if (item.gated) {
      setGatedItem(item)
    } else {
      navigate(`/work/${item.slug}`)
    }
  }

  return (
    <div className="work-page">
      <div className="work-nav-wrapper">
        <Nav />
      </div>

      <div className="work-slides">
        {workItems.map((item, i) => (
          <section
            key={item.id}
            ref={el => sectionRefs.current[i] = el}
            className="work-slide"
            style={{ '--bg-color': item.bgColor, '--overlay': item.overlayOpacity }}
          >
            {item.heroImage && (
              <div
                className="work-slide-bg"
                style={{
                  backgroundImage: `url(${item.heroImage})`,
                  backgroundPosition: item.bgPosition || 'center center',
                }}
              />
            )}
            <div className="work-slide-overlay" />

            <div className="work-slide-content">
              <div className="work-slide-left">
                {item.logo
                  ? <img
                      src={item.logo}
                      alt={item.company}
                      className="work-slide-logo-heading"
                      style={item.logoInvert === false ? { filter: 'none' } : {}}
                    />
                  : <h2 className="work-slide-company">{item.company}</h2>
                }
                <div className="work-slide-meta">
                  <div className="work-slide-meta-row">
                    <span className="meta-label">Role</span>
                    <span className="meta-value">{item.role}</span>
                  </div>
                  <div className="work-slide-meta-row">
                    <span className="meta-label">Duration</span>
                    <span className="meta-value">{item.duration}</span>
                  </div>
                  <div className="work-slide-meta-row">
                    <span className="meta-label">Tools</span>
                    <span className="meta-value">{item.tools}</span>
                  </div>
                  <div className="work-slide-meta-row">
                    <span className="meta-label">Team</span>
                    <span className="meta-value">{item.team}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-slide-cta">
              <button className="work-slide-btn" onClick={() => handleViewProject(item)}>
                View Project
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* Dot navigation */}
      <nav className="work-dots" aria-label="Project navigation">
        {workItems.map((item, i) => (
          <button
            key={item.id}
            className={`work-dot${i === activeIndex ? ' work-dot--active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={item.company}
          />
        ))}
      </nav>

      <div className="work-footer-wrapper">
        <Footer />
      </div>

      {gatedItem && (
        <PasswordModal onClose={() => setGatedItem(null)} />
      )}
    </div>
  )
}
