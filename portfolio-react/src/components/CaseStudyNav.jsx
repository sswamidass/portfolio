import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './CaseStudyNav.css'

export default function CaseStudyNav() {
  const location = useLocation()
  const trackRef = useRef(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const active = track.querySelector('.cs-nav-link.active')
    if (active) {
      setIndicator({ left: active.offsetLeft, width: active.offsetWidth, ready: true })
    }
  }, [location.pathname])

  return (
    <nav className="cs-nav" aria-label="Site navigation">
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
