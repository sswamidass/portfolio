import { useEffect } from 'react'
import Layout from '../components/Layout'
import { img } from '../utils/img'
import './About.css'

const experience = [
  { role: 'Sr. IxD & UX Lead', company: 'GE HealthCare', years: '2021 – Present' },
  { role: 'UI/UX Engineer', company: 'Mitsubishi EDM/Laser', years: '2015 – 2021' },
  { role: 'Web Designer', company: 'Tire Rack', years: '2012 – 2015' },
  { role: 'Web Designer', company: 'Andrews University', years: '2011 – 2012' },
  { role: 'Web Designer', company: 'Simple Updates', years: '2010 – 2011' },
]

const values = [
  {
    icon: '🚗',
    heading: 'Tech and car enthusiast.',
    body: "If it has a screen or an engine, I'm probably interested. I love following the intersection of technology and automotive design — two spaces where good UX really matters.",
  },
  {
    icon: '☕',
    heading: 'Coffee obsessive.',
    body: 'Dial it in or go home. Homeground started as an excuse to drink better coffee and share it with people who care.',
  },
  {
    icon: '📦',
    heading: 'Co-founder, Homeground.',
    body: "Built with my partner Sara. A subscription box for Great Lakes families: coffee for the grown-ups, kids' books for everyone else.",
  },
  {
    icon: '🎨',
    heading: 'Design is a craft.',
    body: 'I believe the best work comes from understanding people deeply — their context, their frustrations, and what they\'re really trying to do.',
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'About — Sanjay Swamidass'
  }, [])

  return (
    <Layout>
      <div className="about-page page-container page-content">
        <div className="about-left">
          <img src={img('/images/about.jpg')} alt="Sanjay Swamidass" className="about-photo" />

          <p className="about-eyebrow">A little about me</p>
          <h1 className="about-greeting">Hi, I'm Sanjay!</h1>

          <p className="about-bio">
            I'm a Senior Product Designer with 10+ years of experience, currently leading interaction design at GE HealthCare. I design for complexity — healthcare systems, industrial tools, e-commerce — and believe the best interfaces are the ones that get out of the way.
          </p>
          <p className="about-bio">
            Outside of work, I co-founded Homeground with my partner Sara, a Great Lakes coffee and kids' book subscription box built on the same principle: good things, thoughtfully made. I live in Chicago, and when I'm not designing, I'm probably tending a sourdough starter or dialing in a pour-over.
          </p>

          <section className="about-experience">
            <p className="about-eyebrow">Experience</p>
            <ul className="about-exp-list">
              {experience.map(e => (
                <li key={e.years} className="about-exp-item">
                  <strong>{e.role} @ {e.company}</strong>
                  <span>{e.years}</span>
                </li>
              ))}
            </ul>
            <a href="/sswamidass_resume.pdf" target="_blank" rel="noopener noreferrer" className="about-resume-link">
              Download full résumé ↓
            </a>
          </section>
        </div>

        <div className="about-right">
          <section className="about-values">
            <p className="about-eyebrow">Outside the office</p>
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

          <div className="about-photo-secondary-wrap">
            <img src={img('/images/about-winter.jpg')} alt="" className="about-photo-secondary" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
