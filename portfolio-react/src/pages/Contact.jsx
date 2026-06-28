import { useEffect } from 'react'
import CaseStudyNav from '../components/CaseStudyNav'
import CaseStudyFooter from '../components/CaseStudyFooter'
import { img } from '../utils/img'
import './Contact.css'

const links = [
  { label: 'Email', value: 'swamidass.sanjay@gmail.com', href: 'mailto:swamidass.sanjay@gmail.com', external: false },
  { label: 'LinkedIn', value: 'linkedin.com/in/sanjay-swamidass', href: 'https://linkedin.com/in/sanjay-swamidass-a860103a/', external: true },
  { label: 'Instagram', value: '@tha_sanj', href: 'https://instagram.com/tha_sanj/', external: true },
  { label: 'Resume', value: 'sswamidass_resume.pdf', href: img('/sswamidass_resume.pdf'), external: true },
]

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Sanjay Swamidass'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="contact-page">
      <CaseStudyNav />
      <main className="contact-main">
        <div className="contact-col">
          <h1 className="contact-heading">Contact.</h1>
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
      <CaseStudyFooter />
    </div>
  )
}
