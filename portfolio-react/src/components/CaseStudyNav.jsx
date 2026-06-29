import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './CaseStudyNav.css'

export default function CaseStudyNav() {
  const location = useLocation()
  const trackRef = useRef(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false })

  // Show back arrow on case study routes: /work/something (not just /work)
  const isCaseStudy = location.pathname.startsWith('/work/') && location.pathname.length > '/work/'.length

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const active = track.querySelector('.cs-nav-link.active')
    if (active) {
      setIndicator({ left: active.offsetLeft, width: active.offsetWidth, ready: true })
    }
  }, [location.pathname])

  return (
    <nav className={`cs-nav${isCaseStudy ? ' cs-nav--with-back' : ''}`} aria-label="Site navigation">
      {isCaseStudy && (
        <Link to="/work" className="cs-back-pill">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="cs-back-label">Work</span>
        </Link>
      )}
      <div className="cs-nav-pill" ref={trackRef}>
        <span
          className="cs-nav-indicator"
          style={{
            left: indicator.left,
            width: indicator.width,
            opacity: indicator.ready ? 1 : 0,
          }}
        />
        <NavLink to="/" end className={({ isActive }) => `cs-nav-link${isActive ? ' active' : ''}`}>
          About
        </NavLink>
        <NavLink to="/work" end={false} className={({ isActive }) => `cs-nav-link${isActive ? ' active' : ''}`}>
          Work
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `cs-nav-link${isActive ? ' active' : ''}`}>
          Contact
        </NavLink>
      </div>
    </nav>
  )
}
