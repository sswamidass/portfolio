import { useEffect } from 'react'
import CaseStudyNav from '../components/CaseStudyNav'
import { contactLinks as links } from '../data/contact'
import './Contact.css'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Sanjay Swamidass'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="contact-page">
      <CaseStudyNav />
      <main className="contact-main">
        <div className="contact-col">
          <ul className="contact-links">
            {links.map(link => (
              <li key={link.label} className="contact-link-item">
                <a
                  href={link.href}
                  className="contact-link"
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-value">{link.value}</span>
                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
