import { useEffect } from 'react'
import CaseStudyNav from '../components/CaseStudyNav'
import CaseStudyFooter from '../components/CaseStudyFooter'
import { img } from '../utils/img'
import './About.css'

const experience = [
  { role: 'Sr. IxD & UX Lead', company: 'GE HealthCare', years: '2021 – Present' },
  { role: 'Co-Founder', company: 'Homeground', years: '2025 – Present' },
  { role: 'UI/UX Engineer', company: 'Mitsubishi EDM/Laser', years: '2018 – 2021' },
  { role: 'UI/UX Designer', company: 'Mitsubishi EDM/Laser', years: '2015 – 2018' },
  { role: 'Web Designer', company: 'Tire Rack', years: '2012 – 2015' },
]

const values = [
  {
    icon: '🚗',
    heading: 'Tech and car enthusiast.',
    body: "If it has a screen or an engine, I'm interested. I read too much about cars and gadgets, and I have opinions about the software in both.",
  },
  {
    icon: '☕',
    heading: 'Coffee obsessive.',
    body: "I weigh the beans and time the pour, and I'm not sorry about it. Homeground started, honestly, as an excuse to find better coffee and get it into more kitchens.",
  },
  {
    icon: '📦',
    heading: 'Co-founder, Homeground.',
    body: "Homeground is a Midwest-themed seasonal subscription box that pairs curated books with small-batch, Midwest-roasted coffee, built around reading together and slowing down. Sara runs curation and operations; I do everything a customer sees, from the brand and the store to the emails and the cards in the box.",
  },
  {
    icon: '🎨',
    heading: 'Design is a craft.',
    body: "The best work I've done came from spending time with the people using the thing: what they're dealing with, what annoys them, what they're trying to get done.",
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'Sanjay Swamidass | Senior Product Designer'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">
      <CaseStudyNav />
      <main className="about-main">
        <div className="about-col">
          <h1 className="about-heading">Hi, I'm Sanjay.</h1>

          <div className="about-profile">
            <img src={img('/images/about.jpg')} alt="Sanjay Swamidass" className="about-photo" />
            <div>
              <p className="about-bio">
                I'm a Senior Product Designer with 14+ years of experience, currently leading interaction design at GE HealthCare. I design for complexity: healthcare systems, industrial tools, e-commerce. I believe the best interfaces are the ones that get out of the way.
              </p>
              <p className="about-bio">
                Outside of work, I co-founded Homeground with my wife Sara, a Midwest-themed subscription box pairing kids' books with small-batch, Midwest-roasted coffee. I live in Chicago, and when I'm not designing, I'm probably tending a sourdough starter or dialing in a pour-over.
              </p>
            </div>
          </div>

          <div className="about-grid">
            <section>
              <p className="about-section-label">Experience</p>
              <ul className="about-exp-list">
                {experience.map(e => (
                  <li key={e.years} className="about-exp-item">
                    <span className="about-exp-role">{e.role} @ {e.company}</span>
                    <span className="about-exp-years">{e.years}</span>
                  </li>
                ))}
              </ul>
              <a href={img('/sswamidass_resume.pdf')} target="_blank" rel="noopener noreferrer" className="about-resume-link">
                Download full resume ↓
              </a>
            </section>

            <section>
              <p className="about-section-label">Outside the office</p>
              <ul className="about-values-list">
                {values.map(v => (
                  <li key={v.heading} className="about-value-item">
                    <span className="about-value-icon">{v.icon}</span>
                    <div>
                      <strong className="about-value-heading">{v.heading}</strong>
                      <p className="about-value-body">{v.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
      <CaseStudyFooter />
    </div>
  )
}
