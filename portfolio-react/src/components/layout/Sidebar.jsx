import { useEffect, useRef } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'

const NAV_SECTIONS = ['about', 'services', 'skills', 'education', 'experience', 'work']

export default function Sidebar({ menuOpen, onMenuClose }) {
  const activeSection = useActiveSection(NAV_SECTIONS)
  const sidebarRef = useRef(null)

  // Close menu on outside click
  useEffect(() => {
    function handleClick(e) {
      if (!menuOpen) return
      const toggle = document.querySelector('.js-portfolio-nav-toggle')
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        toggle &&
        !toggle.contains(e.target)
      ) {
        onMenuClose()
      }
    }
    function handleScroll() {
      if (menuOpen) onMenuClose()
    }
    document.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuOpen, onMenuClose])

  function scrollToSection(e, sectionId) {
    e.preventDefault()
    const target = document.querySelector(`[data-section="${sectionId}"]`)
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 55
      window.scrollTo({ top, behavior: 'smooth' })
    }
    onMenuClose()
  }

  return (
    <aside id="portfolio-aside" ref={sidebarRef} role="complementary" className="border js-fullheight">
      <div className="text-center">
        <div className="author-img" style={{ backgroundImage: 'url(images/about-winter.jpg)' }}></div>
        <h1 id="portfolio-logo"><a href="/">Sanjay Swamidass</a></h1>
        <span className="position"><a href="#">Senior Product Designer</a></span>
      </div>

      <nav id="portfolio-main-menu" role="navigation" className="navbar">
        <div id="navbar" className={menuOpen ? 'collapse in' : 'collapse'}>
          <ul>
            {NAV_SECTIONS.map((section) => (
              <li key={section} className={activeSection === section ? 'active' : ''}>
                <a
                  href="#"
                  data-nav-section={section}
                  onClick={(e) => scrollToSection(e, section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="portfolio-footer">
        <ul>
          <li><a href="https://www.facebook.com/SanjaySwamidass" target="blank"><i className="icon-facebook2"></i></a></li>
          <li><a href="https://www.instagram.com/tha_sanj/" target="blank"><i className="icon-instagram"></i></a></li>
          <li><a href="https://www.linkedin.com/in/sanjay-swamidass-a860103a/" target="blank"><i className="icon-linkedin2"></i></a></li>
          <li><a href="/sswamidass_resume.pdf" download="Resume" target="blank"><i className="icon-file"></i></a></li>
        </ul>
      </div>
    </aside>
  )
}
