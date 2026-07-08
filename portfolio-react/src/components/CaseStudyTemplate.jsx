import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CaseStudyNav from './CaseStudyNav'
import CaseStudyFooter from './CaseStudyFooter'
import './CaseStudyTemplate.css'

export default function CaseStudyTemplate({ item, intro, introPhoto, sections, logoOnly = false, dark = false }) {
  useEffect(() => {
    document.title = `${item.company} | Sanjay Swamidass`
    window.scrollTo(0, 0)
  }, [item.company])

  return (
    <div className={`cs-page${dark ? ' cs-page--dark' : ''}`}>
      <CaseStudyNav />

      {/* Page hero — title on sand, no photo */}
      <div className="cs-col">
        <div className="cs-page-hero">
          {item.logo && (
            <img
              src={item.logo}
              alt={item.company}
              className={`cs-page-logo${logoOnly ? ' cs-page-logo--color' : ''}`}
            />
          )}
          {!logoOnly && (
            <>
              <h1 className="cs-page-title">
                {item.caseStudyTitle || item.company}.
              </h1>
              <div className="cs-page-meta">
                {item.role && (
                  <div className="cs-page-meta-item">
                    <span className="cs-page-meta-label">Role</span>
                    <span className="cs-page-meta-value">{item.role}</span>
                  </div>
                )}
                {item.duration && (
                  <div className="cs-page-meta-item">
                    <span className="cs-page-meta-label">Timeline</span>
                    <span className="cs-page-meta-value">{item.duration}</span>
                  </div>
                )}
                {item.tools && (
                  <div className="cs-page-meta-item">
                    <span className="cs-page-meta-label">Expertise</span>
                    <span className="cs-page-meta-value">{item.tools}</span>
                  </div>
                )}
                {item.team && (
                  <div className="cs-page-meta-item">
                    <span className="cs-page-meta-label">Team</span>
                    <span className="cs-page-meta-value">{item.team}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Intro text — statement block on bare sand */}
      {intro && intro.length > 0 && (
        <div className="cs-col">
          <div className="cs-statement cs-statement--intro">
            {intro.map((p, i) => (
              <p key={i} className={i === 0 ? 'cs-lead' : 'cs-body-text'}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {/* Full-bleed intro photo */}
      {introPhoto && (
        <div className="cs-photo-strip">
          <img src={introPhoto} alt="" className="cs-section-image" />
        </div>
      )}

      {/* Sections */}
      <div className="cs-col cs-sections">
        {sections.map((section, i) => (
          <div key={i} className="cs-section">
            <p className="cs-eyebrow">{section.label}</p>
            {section.items.map((it, j) => (
              <div key={j} className="cs-section-item">
                {it.heading && <h3 className="cs-section-heading">{it.heading}</h3>}
                {it.body && <p className="cs-body-text">{it.body}</p>}
                {it.callout && <blockquote className="cs-callout">{it.callout}</blockquote>}
                {it.image && (
                  <img src={it.image} alt={it.heading || ''} className="cs-section-image" />
                )}
                {it.images && (
                  <div className="cs-section-images">
                    {it.images.map((src, k) => <img key={k} src={src} alt="" />)}
                  </div>
                )}
                {it.links && (
                  <ul className="cs-section-links">
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
        ))}

        <div className="cs-back">
          <Link to="/work">&#8592; All work</Link>
        </div>
      </div>

      <CaseStudyFooter />
    </div>
  )
}
