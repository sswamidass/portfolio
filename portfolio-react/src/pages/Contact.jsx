import { useEffect } from 'react'
import Layout from '../components/Layout'
import './Contact.css'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Sanjay Swamidass'
  }, [])

  return (
    <Layout>
      <div className="page-container page-content">
        <h1 className="page-heading">Contact</h1>
        <p className="page-subheading">Say, "Hello."</p>
        <ul className="contact-links">
          <li><a href="mailto:swamidass.sanjay@gmail.com">swamidass.sanjay@gmail.com</a></li>
          <li><a href="https://linkedin.com/in/sanjay-swamidass-a860103a/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sanjay-swamidass-a860103a</a></li>
          <li><a href="https://instagram.com/tha_sanj/" target="_blank" rel="noopener noreferrer">instagram.com/tha_sanj</a></li>
          <li><a href="/sswamidass_resume.pdf" target="_blank" rel="noopener noreferrer">Résumé PDF</a></li>
        </ul>
      </div>
    </Layout>
  )
}
