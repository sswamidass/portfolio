import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CaseStudyNav from './CaseStudyNav'
import BrowserMockup from './BrowserMockup'
import CaseStudyFooter from './CaseStudyFooter'
import './CaseStudyTemplate.css'

function isCardSection(section) {
  return section.items.some(it => it.image || it.images || it.links)
}

export default function CaseStudyTemplate({ item, intro, introPhoto, sections }) {
  useEffect(() => {
    document.title = `${item.company} — Sanjay Swamidass`
    window.scrollTo(0, 0)
  }, [item.company])

  return (
    <div className="cs-page">
      <CaseStudyNav />

      {/* Hero */}
      <div className="cs-hero" style={{ backgroundColor: item.bgColor }}>
        {item.heroImage && (
          <div
            className="cs-hero-bg"
            style={{
              backgroundImage: `url(${item.heroImage})`,
              backgroundPosition: item.bgPosition || 'center center',
            }}
          />
        )}
        <div className="cs-hero-overlay" />
        <div className="cs-hero-content">
          {item.logo
            ? <img src={item.logo} alt={item.company} className="cs-hero-logo"
                style={item.logoInvert === false ? { filter: 'none' } : {}} />
            : <h1 className="cs-hero-company">{item.company}</h1>
          }
          <div className="cs-hero-meta">
            {[['Role', item.role], ['Duration', item.duration], ['Tools', item.tools], ['Team', item.team]]
              .filter(([, v]) => v)
              .map(([label, val]) => (
                <div key={label} className="cs-hero-meta-row">
                  <span className="cs-meta-label">{label}</span>
                  <span className="cs-meta-value">{val}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="cs-hero-scroll" aria-hidden="true">&#8595;</div>
      </div>

      {/* Intro — statement block on bare sand */}
      <div className="cs-col">
        <div className="cs-statement cs-statement--intro">
          <p className="cs-eyebrow">{item.caseStudyTitle || item.company}{item.caseStudySubtitle ? ` — ${item.caseStudySubtitle}` : ''}</p>
          {intro.map((p, i) => (
            <p key={i} className={i === 0 ? 'cs-lead' : 'cs-body-text'}>{p}</p>
          ))}
        </div>
      </div>

      {/* Full-bleed intro photo */}
      {introPhoto && (
        <div className="cs-photo-strip">
          <BrowserMockup>
            <img src={introPhoto} alt="" />
          </BrowserMockup>
        </div>
      )}

      {/* Sections */}
      <div className="cs-col cs-sections">
        {sections.map((section, i) => {
          const card = isCardSection(section)
          return card ? (
            <div key={i} className="cs-card">
              <p className="cs-card-eyebrow">{section.label}</p>
              <div className="cs-card-body">
                {section.items.map((it, j) => (
                  <div key={j} className="cs-card-item">
                    {it.heading && <h3 className="cs-card-heading">{it.heading}</h3>}
                    {it.body && <p className="cs-card-para">{it.body}</p>}
                    {it.image && (
                      <BrowserMockup>
                        <img src={it.image} alt={it.heading || ''} />
                      </BrowserMockup>
                    )}
                    {it.images && (
                      <BrowserMockup twoUp>
                        {it.images.map((src, k) => <img key={k} src={src} alt="" />)}
                      </BrowserMockup>
                    )}
                    {it.links && (
                      <ul className="cs-card-links">
                        {it.links.map((l, k) => (
                          <li key={k}>
                            <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div key={i} className="cs-statement">
              <p className="cs-eyebrow">{section.label}</p>
              {section.items.map((it, j) => (
                <div key={j}>
                  {it.heading && <h3 className="cs-statement-heading">{it.heading}</h3>}
                  {it.body && <p className="cs-body-text">{it.body}</p>}
                </div>
              ))}
            </div>
          )
        })}

        <div className="cs-back">
          <Link to="/work">&#8592; All work</Link>
        </div>
      </div>

      <CaseStudyFooter />
    </div>
  )
}
