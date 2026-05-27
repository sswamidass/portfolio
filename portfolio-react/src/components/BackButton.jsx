import { Link } from 'react-router-dom'

export default function BackButton() {
  return (
    <Link to="/">
      <div className="back-button">
        <div className="arrow-wrap">
          <span className="arrow-part-1"></span>
          <span className="arrow-part-2"></span>
          <span className="arrow-part-3"></span>
        </div>
      </div>
    </Link>
  )
}
