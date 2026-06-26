import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import './CaseStudyTemplate.css'

export default function CaseStudyTemplate({ item, intro, introPhoto, sections }) {
  useEffect(() => {
    document.title = `${item.company} — Sanjay Swamidass`
  }, [item.company])

  return (
    <>
      {/* Hero — full viewport, outside centered column */}
      <div className="cs-hero" style={{ backgroundColor: item.bgColor }}>
        <Nav />
        {item.heroImage && (
          <div className="cs-hero-bg" style={{
            backgroundImage: `url(${item.heroImage})`,
            backgroundPosition: item.bgPosition || 'center center',
          }} />
        )}
        <div className="cs-hero-overlay" />
        <div className="cs-hero-content">
          {item.logo
            ? <img src={item.logo} alt={item.company} className="cs-hero-logo"
                style={item.logoInvert === false ? { filter: 'none' } : {}} />
            : <h1 className="cs-hero-company">{item.company}</h1>
          }
          <div className="cs-hero-meta">
            {[['Role', item.role], ['Duration', item.duration], ['Tools', item.tools], ['Team', item.team]].map(([label, val]) => (
              <div key={label} className="cs-hero-meta-row">
                <span className="cs-meta-label">{label}</span>
                <span className="cs-meta-value">{val}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="cs-hero-scroll">↓</div>
      </div>

      {/* Intro — uses cs-body width */}
      <div className="cs-body">
        <div className="cs-intro">
          <div className="cs-intro-grid">
            <div className="cs-intro-left">
              <p className="cs-intro-company">{item.caseStudyTitle || item.company}</p>
              {item.caseStudySubtitle && <p className="cs-intro-subtitle">{item.caseStudySubtitle}</p>}
              <p className="cs-intro-meta">{item.role}</p>
              <p className="cs-intro-meta">{item.duration}</p>
            </div>
            <div className="cs-intro-right">
              {intro.map((p, i) => (
                <p key={i} className={i === 0 ? 'cs-intro-lead' : 'cs-intro-body'}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Photo strip — full bleed */}
      {introPhoto && (
        <div className="cs-intro-photo">
          <img src={introPhoto} alt="" />
        </div>
      )}

      {/* Sections column */}
      <div className="cs-body cs-body--sections">

        {sections.map((section, i) => (
          <div key={i} className="cs-section">
            <p className="cs-section-eyebrow">{section.label}</p>
            <div className="cs-section-body">
            {section.items.map((it, j) => (
              <div key={j} className="cs-section-item">
                {it.heading && <h3 className="cs-section-heading">{it.heading}</h3>}
                {it.body && <p className="cs-section-para">{it.body}</p>}
                {it.image && <img src={it.image} alt={it.heading || ''} className="cs-section-img" />}
                {it.images && (
                  <div className="cs-section-imgs">
                    {it.images.map((src, k) => <img key={k} src={src} alt="" />)}
                  </div>
                )}
                {it.links && (
                  <ul className="cs-section-links">
                    {it.links.map((l, k) => (
                      <li key={k}><a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            </div>
          </div>
        ))}

        <div className="cs-back">
          <Link to="/work">← Back to Work</Link>
        </div>

      </div>

      <Footer />
    </>
  )
}
