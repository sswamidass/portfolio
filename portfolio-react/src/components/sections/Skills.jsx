import AnimateBox from '../AnimateBox'

const skills = [
  { name: 'HTML', value: 90, label: '90%', effect: 'fadeInLeft' },
  { name: 'SCSS/CSS', value: 90, label: '90%', effect: 'fadeInRight' },
  { name: 'Vanilla JS', value: 65, label: '55%', effect: 'fadeInLeft' },
  { name: 'PHP/MySQL', value: 45, label: '35%', effect: 'fadeInRight' },
  { name: 'Photoshop', value: 90, label: '90%', effect: 'fadeInLeft' },
  { name: 'Illustrator', value: 80, label: '80%', effect: 'fadeInLeft' },
  { name: 'InDesign', value: 90, label: '90%', effect: 'fadeInRight' },
  { name: 'Prototyping/Wireframing', value: 75, label: '85%', effect: 'fadeInLeft' },
  { name: 'GIT', value: 80, label: '80%', effect: 'fadeInRight' },
]

export default function Skills() {
  return (
    <section className="portfolio-skills" data-section="skills">
      <div className="portfolio-narrow-content">
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="col-md-6 col-md-offset-3 col-md-pull-3">
            <span className="heading-meta">What Can I Do?</span>
            <h2 className="portfolio-heading">My Skills</h2>
          </AnimateBox>
        </div>
        <div className="row">
          {skills.map((skill) => (
            <AnimateBox key={skill.name} effect={skill.effect} className="col-md-6">
              <div className="progress-wrap">
                <h3>{skill.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${skill.value}%` }}
                  >
                    <span>{skill.label}</span>
                  </div>
                </div>
              </div>
            </AnimateBox>
          ))}
        </div>
      </div>
    </section>
  )
}
