import { useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordModal from './PasswordModal'
import './WorkCard.css'

function HomegroundPlaceholder() {
  return (
    <div className="work-card-placeholder">
      <span>Homeground</span>
    </div>
  )
}

export default function WorkCard({ item }) {
  const [showModal, setShowModal] = useState(false)

  const thumbnail = item.thumbnail
    ? <img src={item.thumbnail} alt={item.company} className="work-card-img" />
    : <HomegroundPlaceholder />

  const heading = item.gated
    ? <button className="work-card-title-btn" onClick={() => setShowModal(true)}>{item.company}</button>
    : <Link to={`/work/${item.slug}`} className="work-card-title-link">{item.company}</Link>

  return (
    <>
      <article className="work-card">
        <div className="work-card-thumb">
          {item.gated
            ? <button className="work-card-thumb-btn" onClick={() => setShowModal(true)}>{thumbnail}</button>
            : <Link to={`/work/${item.slug}`}>{thumbnail}</Link>
          }
        </div>
        <div className="work-card-body">
          {heading}
          <p className="work-card-role">{item.role}</p>
          <ul className="work-card-tags">
            {item.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </article>
      {showModal && <PasswordModal onClose={() => setShowModal(false)} />}
    </>
  )
}
