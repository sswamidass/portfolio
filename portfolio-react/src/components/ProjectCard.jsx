import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ variant = 'light', eyebrow, title, summary, href, media }) {
  return (
    <Link to={href} className={`pc pc--${variant}`}>
      <div className="pc-header">
        {eyebrow && <span className="pc-eyebrow">{eyebrow}</span>}
        <h3 className="pc-title">{title}</h3>
        {summary && <p className="pc-summary">{summary}</p>}
      </div>
      {media && (
        <div className="pc-media">
          <img src={media} alt={title} loading="lazy" />
        </div>
      )}
    </Link>
  )
}
