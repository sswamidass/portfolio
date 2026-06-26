import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-container footer-inner">
        <div className="footer-left">
          <p className="footer-name">Sanjay Swamidass</p>
          <p className="footer-tagline">Senior Product Designer — Chicago, IL</p>
        </div>
        <div className="footer-right">
          <p className="footer-say-hello">Say, "Hello."</p>
          <ul className="footer-links">
            <li><a href="mailto:swamidass.sanjay@gmail.com">swamidass.sanjay@gmail.com</a></li>
            <li><a href="https://linkedin.com/in/sanjay-swamidass-a860103a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://instagram.com/tha_sanj/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="/sswamidass_resume.pdf" target="_blank" rel="noopener noreferrer">Résumé PDF</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
