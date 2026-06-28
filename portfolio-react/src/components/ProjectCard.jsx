import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ variant = 'light', eyebrow, title, summary, href }) {
  return (
    <Link to={href} className={`pc pc--${variant}`}>
      <div className="pc-header">
        {eyebrow && <span className="pc-eyebrow">{eyebrow}</span>}
        <h3 className="pc-title">{title}</h3>
        {summary && <p className="pc-summary">{summary}</p>}
      </div>
      <div className="pc-media" />
    </Link>
  )
}
