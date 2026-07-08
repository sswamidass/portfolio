import AnimateBox from '../AnimateBox'

const areas = [
  {
    title: 'Product Design',
    description:
      'End-to-end product design, from early-stage concepts and user flows through high-fidelity prototypes that teams can ship with confidence.',
    skills: [
      'UX Design',
      'Interaction Design',
      'Wireframing & Prototyping',
      'User Flows & IA',
    ],
  },
  {
    title: 'Visual & UI Design',
    description:
      'Crafting visually compelling, accessible interfaces with consistent attention to typography, color systems, and component-level detail.',
    skills: [
      'High-Fidelity UI',
      'Design Systems',
      'Style Guides',
      'Brand-Aligned Interfaces',
    ],
  },
  {
    title: 'Front-End Development',
    description:
      'Bridging design and engineering, translating designs into pixel-perfect, responsive code that actually behaves the way it looks.',
    skills: [
      'HTML5 / CSS / SCSS',
      'JavaScript & React',
      'Responsive Web',
      'Design-Dev Handoff',
    ],
  },
  {
    title: 'UX Research & Strategy',
    description:
      'Grounding design decisions in real user insight, from participatory workshops and interviews to synthesized findings that drive product direction.',
    skills: [
      'User Interviews',
      'Participatory Design',
      'Personas & Journey Maps',
      'Stakeholder Facilitation',
    ],
  },
]

export default function Expertise() {
  return (
    <section className="portfolio-expertise" data-section="skills">
      <div className="portfolio-narrow-content">
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="col-md-12">
            <span className="heading-meta expertise-meta">My Strengths</span>
            <h2 className="portfolio-heading expertise-heading">My Areas of Expertise</h2>
            <p className="expertise-sub">
              The full design cycle: research, strategy, and execution, backed by the technical depth to see it through to production.
            </p>
          </AnimateBox>
        </div>
        <div className="expertise-grid">
          {areas.map((area, i) => (
            <AnimateBox key={i} effect="fadeInUp" className="expertise-card">
              <h3 className="expertise-card-title">{area.title}</h3>
              <p className="expertise-card-desc">{area.description}</p>
              <ul className="expertise-skills">
                {area.skills.map((skill, j) => (
                  <li key={j}>
                    <span className="expertise-check">&#10003;</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </AnimateBox>
          ))}
        </div>
      </div>
    </section>
  )
}
