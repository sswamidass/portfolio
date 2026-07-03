import { useEffect, useState } from 'react'
import CaseStudyNav from '../components/CaseStudyNav'
import ProjectCard from '../components/ProjectCard'
import CaseStudyFooter from '../components/CaseStudyFooter'
import PasswordModal from '../components/PasswordModal'
import { workItems } from '../data/work'
import './WorkListingPage.css'

export default function WorkListingPage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    document.title = 'Work — Sanjay Swamidass'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="wl-page">
      <CaseStudyNav />

      <main className="wl-main">
        <div className="wl-col">

          {/* Selected Work */}
          <section className="wl-section">
            <header className="wl-section-head">
              <h2 className="wl-section-heading">Selected Work.</h2>
            </header>
            <div className="wl-cards">
              {workItems.map(item => (
                <ProjectCard
                  key={item.id}
                  variant={item.cardVariant}
                  eyebrow={item.eyebrow}
                  title={item.company}
                  logo={item.logo}
                  logoStyle={item.cardLogoStyle}
                  summary={item.summary}
                  href={`/work/${item.slug}`}
                  gated={item.gated}
                  onGatedClick={item.gated ? () => setShowModal(true) : undefined}
                  media={item.cardMedia}
                />
              ))}
            </div>
          </section>

          {/* In Progress — placeholder */}
          <section className="wl-section">
            <header className="wl-section-head">
              <h2 className="wl-section-heading">In Progress.</h2>
              <p className="wl-section-sub">Work in various states of design and development. Check back soon.</p>
            </header>
            <div className="wl-placeholder">
              <div className="wl-placeholder-inner">
                <span className="wl-placeholder-label">Something's cooking</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      <CaseStudyFooter />
      {showModal && <PasswordModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
