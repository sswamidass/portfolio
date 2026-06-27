import { Link } from 'react-router-dom'
import AnimateBox from '../AnimateBox'
import { img } from '../../utils/img'

const projects = [
  {
    eyebrow: 'GE Healthcare',
    title: 'Designing enterprise UX for the healthcare industry',
    description:
      'Leading UX design across complex, high-stakes software products for the healthcare industry — from participatory research and card sorting through annotated prototypes, design systems, and stakeholder alignment.',
    stat: null,
    statLabel: null,
    image: img('/images/ge-work.jpg'),
    imageAlt: 'GE Healthcare product design',
    imageRight: true,
    link: null,
    linkLabel: null,
  },
  {
    eyebrow: 'Mitsubishi EDM / Laser',
    title: 'Building a machine monitoring platform from zero',
    description:
      'Designed and built remote360®, a real-time production monitoring web application that replaced a legacy desktop Java tool — owning everything from user research and wireframing to visual design and front-end development.',
    stat: null,
    statLabel: null,
    image: img('/images/responsive_group.png'),
    imageAlt: 'remote360 responsive design',
    imageRight: false,
    link: '/r360',
    linkLabel: 'View Case Study',
  },
  {
    eyebrow: 'Homeground',
    title: 'Brand identity and design system for an artisanal brand',
    description:
      'Crafted a complete brand identity and design system for Homeground — a nature-inspired, literary artisanal brand built on Shopify — including custom color tokens, typography, botanical illustration language, and a living style guide.',
    stat: null,
    statLabel: null,
    image: img('/images/homeground-fall.jpg'),
    imageLogo: img('/images/homeground-logo.png'),
    imageAlt: 'Homeground brand — autumn landscape',
    imageRight: true,
    link: null,
    linkLabel: null,
  },
]

export default function FeaturedWork() {
  return (
    <section className="portfolio-featured-work" data-section="services">
      <div className="portfolio-narrow-content">
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="col-md-6 col-md-offset-3 col-md-pull-3">
            <span className="heading-meta">Featured Work</span>
            <h2 className="portfolio-heading">Design that gets results</h2>
          </AnimateBox>
        </div>

        <div className="fw-cards">
          {projects.map((project, i) => (
            <AnimateBox key={i} effect="fadeInUp" className="fw-card">
              <div className={`fw-card-inner${project.imageRight ? '' : ' fw-card-inner--reverse'}`}>
                <div className="fw-card-text">
                  <span className="fw-eyebrow">{project.eyebrow}</span>
                  <h3 className="fw-title">{project.title}</h3>
                  <p className="fw-desc">{project.description}</p>
                  {project.stat && (
                    <div className="fw-stat">
                      <span className="fw-stat-number">{project.stat}</span>
                      <span className="fw-stat-label">{project.statLabel}</span>
                    </div>
                  )}
                  {project.link && (
                    <Link to={project.link} className="fw-link">
                      {project.linkLabel} →
                    </Link>
                  )}
                </div>
                <div className="fw-card-image">
                  <img src={project.image} alt={project.imageAlt} />
                  {project.imageLogo && (
                    <img src={project.imageLogo} alt={`${project.eyebrow} logo`} className="fw-card-logo-overlay" />
                  )}
                </div>
              </div>
            </AnimateBox>
          ))}
        </div>
      </div>
    </section>
  )
}
