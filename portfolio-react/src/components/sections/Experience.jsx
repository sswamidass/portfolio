import { useState } from 'react'
import AnimateBox from '../AnimateBox'

const companies = [
  {
    name: 'GE Healthcare',
    location: 'Chicago, Illinois',
    logoText: 'GE',
    logoBg: '#6b21a8',
    roles: [
      {
        title: 'Sr. IxD & UX Lead',
        years: '2021 – Present',
        bullets: [
          'Lead experience design across a portfolio of complex enterprise healthcare software products',
          'Facilitate participatory design sessions: card sorting, co-creation workshops, and paper prototyping, to surface user needs and align product direction',
          'Translate research insights into annotated wireframes and prototypes that communicate interaction behavior clearly to engineering and product teams',
          'Shape business-wide UX strategy, contributing to design standards and influencing the long-term direction of product experience',
        ],
        full: 'I joined GE Healthcare to lead experience design across a portfolio of enterprise healthcare software products, complex, high-stakes tools used by clinicians and healthcare professionals. My work spans the full design process: facilitating participatory workshops with stakeholders and end users, synthesizing research into actionable insights, and delivering annotated wireframes and prototypes that engineering teams can build from with confidence. I also contribute to broader UX strategy, influencing product direction, establishing design standards, and helping the organization think more cohesively about experience across its product lines.',
      },
    ],
  },
  {
    name: 'MC Machinery / Mitsubishi EDM',
    location: 'Wood Dale, Illinois',
    logoText: 'MC',
    logoBg: '#c8102e',
    roles: [
      {
        title: 'UI/UX Engineer',
        years: '2015 – 2021',
        bullets: [
          'Served as the sole designer and front-end developer for remote360®, a real-time machine monitoring web application',
          'Owned the end-to-end design process: user research, information architecture, visual design, and front-end implementation',
          'Conducted research with engineers, technicians, and customers to define requirements and validate design decisions',
          'Presented concepts and prototypes to internal teams and executive leadership throughout the product lifecycle',
        ],
        full: "Brought on as the company's first in-house designer, I built remote360® from the ground up, a web-based machine monitoring application that replaced a dated Java desktop tool. I owned every stage of the product: researching user needs with engineers, technicians, and customers; designing the information architecture and dashboard UI; building interactive prototypes; and developing the front end using HTML, SCSS, and JavaScript. Having end-to-end ownership across both design and development gave me a big-picture perspective that shaped not just how the product looked, but how well it worked.",
      },
    ],
  },
  {
    name: 'The Tire Rack',
    location: 'South Bend, Indiana',
    logoText: 'TR',
    logoBg: '#1a1a1a',
    roles: [
      {
        title: 'Web Designer',
        years: '2012 – 2015',
        bullets: [
          'Designed and produced web projects with a focus on visual design, navigation, usability, and brand consistency',
          'Collaborated with marketing leadership to translate ecommerce goals into compelling visual solutions',
          'Contributed across online advertising, mobile platforms, social media, and email marketing campaigns',
        ],
        full: "My first role out of college, working within a growing marketing team at one of North America's largest online tire retailers. I designed and produced web projects spanning the full marketing mix: retail pages, online advertising, email campaigns, and mobile experiences. Working closely with the online marketing manager and department leads, I helped translate business goals into visual solutions that balanced brand consistency with clear, conversion-focused design.",
      },
    ],
  },
  {
    name: 'Andrews University',
    location: 'Berrien Springs, Michigan',
    logoText: 'AU',
    logoBg: '#002d72',
    roles: [
      {
        title: 'Web Designer',
        years: '2011 – 2012',
        bullets: [
          'Designed and maintained the Distant Learning department website for online course students',
          'Produced supporting marketing materials including brochures and digital banner ads',
        ],
        full: "Held a student design position within Andrews University's Distant Learning department, where I designed and maintained the department's website for students enrolled in online courses. I also produced supporting materials, brochures and banner ads, as the department's needs evolved.",
      },
    ],
  },
  {
    name: 'Simple Updates',
    location: 'Remote',
    logoText: 'SU',
    logoBg: '#0e7490',
    roles: [
      {
        title: 'Web Designer',
        years: '2010 – 2011',
        bullets: [
          'Designed and built web templates for the Simple Updates CMS platform',
          'Earned a full-time position after the internship, joining the company\'s core development team',
        ],
        full: "Started as a paid intern designing and building web templates for the Simple Updates content management system. The quality of the work led to a full-time offer, and I joined the company's development team, my first professional experience turning design ideas into functional, publishable web products.",
      },
    ],
  },
]

export default function Experience() {
  const [openRoles, setOpenRoles] = useState({})

  function toggleRole(companyIdx, roleIdx) {
    const key = `${companyIdx}-${roleIdx}`
    setOpenRoles((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section className="portfolio-experience" data-section="experience">
      <div className="portfolio-narrow-content">
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="col-md-12">
            <span className="heading-meta">Where Have I Worked?</span>
            <h2 className="portfolio-heading">Work History</h2>
            <p className="exp-intro">
              A summary of my professional experience across full-time and contract roles. Download my{' '}
              <a href="/sswamidass_resume.pdf" target="_blank" rel="noreferrer">full resume</a>{' '}
              for additional detail.
            </p>
          </AnimateBox>
        </div>

        <div className="exp-companies">
          {companies.map((company, ci) => (
            <AnimateBox key={ci} effect="fadeInUp" className="exp-company">
              {/* Company header */}
              <div className="exp-company-header">
                <div
                  className="exp-logo"
                  style={{ background: company.logoBg }}
                >
                  {company.logoText}
                </div>
                <div>
                  <div className="exp-company-name">{company.name}</div>
                  <div className="exp-company-location">{company.location}</div>
                </div>
              </div>

              {/* Roles */}
              <div className="exp-roles">
                {company.roles.map((role, ri) => {
                  const key = `${ci}-${ri}`
                  const isOpen = !!openRoles[key]
                  return (
                    <div key={ri} className="exp-role">
                      <div className="exp-role-header">
                        <span className="exp-role-title">{role.title}</span>
                        <span className="exp-role-years">{role.years}</span>
                      </div>
                      <ul className="exp-bullets">
                        {role.bullets.map((b, bi) => (
                          <li key={bi}>{b}</li>
                        ))}
                      </ul>
                      <button
                        className="exp-toggle"
                        onClick={() => toggleRole(ci, ri)}
                        aria-expanded={isOpen}
                      >
                        <span className="exp-toggle-icon">{isOpen ? '−' : '+'}</span>
                        {isOpen ? 'Hide description' : 'Full description'}
                      </button>
                      {isOpen && (
                        <p className="exp-full">{role.full}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </AnimateBox>
          ))}
        </div>
      </div>
    </section>
  )
}
