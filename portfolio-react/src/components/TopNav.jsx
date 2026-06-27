import { useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { img } from '../utils/img'

const NAV_SECTIONS = ['about', 'services', 'skills', 'education', 'experience', 'work']
const NAV_LABELS = {
  about: 'About',
  services: 'Projects',
  skills: 'Expertise',
  education: 'Education',
  experience: 'Experience',
  work: 'Work',
}

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(NAV_SECTIONS)

  function scrollToSection(e, sectionId) {
    e.preventDefault()
    const target = document.querySelector(`[data-section="${sectionId}"]`)
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <nav id="top-nav">
      <a href="/" className="nav-logo">
        <img className="nav-avatar" src={img('/images/about-winter.jpg')} alt="Sanjay Swamidass" />
        Sanjay Swamidass
      </a>

      {/* Desktop links */}
      <ul className="nav-links">
        {NAV_SECTIONS.map((section) => (
          <li key={section} className={activeSection === section ? 'active' : ''}>
            <a href="#" onClick={(e) => scrollToSection(e, section)}>
              {NAV_LABELS[section]}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile burger */}
      <button
        className={`nav-burger${mobileOpen ? ' open' : ''}`}
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile dropdown */}
      <div className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`}>
        <ul>
          {NAV_SECTIONS.map((section) => (
            <li key={section}>
              <a href="#" onClick={(e) => scrollToSection(e, section)}>
                {NAV_LABELS[section]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
