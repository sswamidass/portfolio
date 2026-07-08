import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ variant = 'light', eyebrow, title, logo, logoStyle, summary, href, gated = false, onGatedClick, media, mediaPosition, mediaPull }) {
  const inner = (
    <>
      <div className="pc-header">
        {eyebrow && <span className="pc-eyebrow">{eyebrow}</span>}
        {logo
          ? <img src={logo} alt={title} className="pc-logo" style={logoStyle} />
          : <h3 className="pc-title">{title}</h3>
        }
        {summary && <p className="pc-summary">{summary}</p>}
      </div>
      <div className="pc-media" style={{ ...(media ? { backgroundImage: `url(${media})` } : {}), ...(mediaPosition ? { backgroundPosition: mediaPosition } : {}), ...(mediaPull ? { marginTop: `-${mediaPull}px` } : {}) }}>
        {gated && (
          <div className="pc-lock">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="3" y="7" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M5 7V5a3 3 0 1 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Password protected</span>
          </div>
        )}
      </div>
    </>
  )

  if (gated) {
    return (
      <div
        className={`pc pc--${variant}`}
        role="button"
        tabIndex={0}
        onClick={onGatedClick}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onGatedClick?.() } }}
      >
        {inner}
      </div>
    )
  }

  return (
    <Link to={href} className={`pc pc--${variant}`}>
      {inner}
    </Link>
  )
}
