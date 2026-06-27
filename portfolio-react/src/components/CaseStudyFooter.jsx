import { Link } from 'react-router-dom'
import { img } from '../utils/img'
import './CaseStudyFooter.css'

export default function CaseStudyFooter() {
  return (
    <footer className="csf">
      <div className="csf-inner">
        <div className="csf-top">
          <div className="csf-wordmark">Sanjay.</div>
          <div className="csf-cols">
            <div className="csf-col">
              <p className="csf-col-label">Elsewhere</p>
              <ul className="csf-col-links">
                <li><a href="https://linkedin.com/in/sanjay-swamidass-a860103a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://instagram.com/tha_sanj/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href={img('/sswamidass_resume.pdf')} target="_blank" rel="noopener noreferrer">Resume PDF</a></li>
              </ul>
            </div>
            <div className="csf-col">
              <p className="csf-col-label">Contact</p>
              <ul className="csf-col-links">
                <li><a href="mailto:swamidass.sanjay@gmail.com">swamidass.sanjay@gmail.com</a></li>
                <li><Link to="/work">Back to work</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="csf-bottom">
          <span>Senior Product Designer — Chicago, IL</span>
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
