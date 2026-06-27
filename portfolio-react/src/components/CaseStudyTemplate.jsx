import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
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
      <Nav />

      {/* Page hero — title on sand, no photo */}
      <div className="cs-col">
        <div className="cs-page-hero">
          {item.logo && (
            <img
              src={item.logo}
              alt={item.company}
              className="cs-page-logo"
            />
          )}
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
                <span className="cs-page-meta-label">Tools</span>
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
