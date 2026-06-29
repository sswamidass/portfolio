import { contactLinks } from '../data/contact'
import './CaseStudyFooter.css'

export default function CaseStudyFooter() {
  return (
    <footer className="csf">
      <div className="csf-inner">
        <div className="csf-top">
          <div className="csf-links">
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="csf-link"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="csf-link-label">{link.label}</span>
                <span className="csf-link-value">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="csf-bottom">
          <span>Senior Product Designer, Chicago, IL</span>
          <button className="csf-toggle" aria-label="Toggle theme (coming soon)" title="Theme toggle">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="8" y1="0.5" x2="8" y2="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="8" y1="13.5" x2="8" y2="15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="0.5" y1="8" x2="2.5" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="13.5" y1="8" x2="15.5" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="2.4" y1="2.4" x2="3.8" y2="3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="12.2" y1="12.2" x2="13.6" y2="13.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="13.6" y1="2.4" x2="12.2" y2="3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="3.8" y1="12.2" x2="2.4" y2="13.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
