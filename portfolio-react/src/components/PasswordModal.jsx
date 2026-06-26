import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PasswordModal.css'

export default function PasswordModal({ onClose }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (password === import.meta.env.VITE_GEHC_PASSWORD) {
      sessionStorage.setItem('gehc_auth', 'true')
      onClose()
      navigate('/work/gehc')
    } else {
      setError(true)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h2 className="modal-heading">This case study is password protected.</h2>
        <p className="modal-body">
          This work is protected by NDA — not because it isn't worth sharing, but because the people and systems involved deserve that care. If you're a recruiter, hiring manager, or fellow designer, I'm happy to walk you through it directly.
        </p>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(false) }}
            className={`modal-input${error ? ' modal-input--error' : ''}`}
            autoFocus
          />
          {error && (
            <p className="modal-error">
              Incorrect password. Need access?{' '}
              <a href="mailto:swamidass.sanjay@gmail.com?subject=GEHC%20Case%20Study%20Access">Request it below.</a>
            </p>
          )}
          <button type="submit" className="modal-submit">View case study</button>
          <a
            href="mailto:swamidass.sanjay@gmail.com?subject=GEHC%20Case%20Study%20Access"
            className="modal-request"
          >
            Request access
          </a>
        </form>
      </div>
    </div>
  )
}
