import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner page-container">
        <div className="nav-brand">
          <Link to="/" className="nav-name">Sanjay Swamidass</Link>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/work">Work</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
