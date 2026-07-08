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
    document.title = 'Work | Sanjay Swamidass'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="wl-page">
      <CaseStudyNav />

      <main className="wl-main">
        <div className="wl-col">

          {/* Selected Work */}
          <section className="wl-section">
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
                  mediaPosition={item.cardMediaPosition}
                  mediaPull={item.cardMediaPull}
                />
              ))}
            </div>
          </section>

          {/* More work callout */}
          <section className="wl-section">
            <div className="wl-placeholder">
              <div className="wl-placeholder-inner">
                <p className="wl-more-heading">A few favorites from 10+ years of work.</p>
                <p className="wl-more-sub">Healthcare, retail, education, consumer brands, and more. Additional work available on request.</p>
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
