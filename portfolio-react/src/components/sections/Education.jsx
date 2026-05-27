import { useState } from 'react'
import AnimateBox from '../AnimateBox'

const items = [
  {
    id: 'collapseOne',
    headingId: 'headingOne',
    title: 'Bachelor of Fine Arts: Visual Communication (Web Design)',
    body: '2007-2012 Andrews University - Berrien Springs, MI',
  },
  {
    id: 'collapseTwo',
    headingId: 'headingTwo',
    title: 'Secondary Education: High School Diploma',
    body: '2004-2007 Kingsway College - Oshawa, Ontario',
  },
]

export default function Education() {
  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="portfolio-education" data-section="education">
      <div className="portfolio-narrow-content">
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="col-md-6 col-md-offset-3 col-md-pull-3">
            <span className="heading-meta">Where Did I Learn?</span>
            <h2 className="portfolio-heading">Education</h2>
          </AnimateBox>
        </div>
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="col-md-12">
            <div className="fancy-collapse-panel">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                {items.map((item) => (
                  <div className="panel panel-default" key={item.id}>
                    <div className="panel-heading" role="tab" id={item.headingId}>
                      <h4 className="panel-title">
                        <a
                          className={openId === item.id ? '' : 'collapsed'}
                          onClick={(e) => { e.preventDefault(); toggle(item.id) }}
                          href="#"
                          aria-expanded={openId === item.id}
                          aria-controls={item.id}
                        >
                          {item.title}
                        </a>
                      </h4>
                    </div>
                    <div
                      id={item.id}
                      className={`panel-collapse collapse${openId === item.id ? ' in' : ''}`}
                      role="tabpanel"
                      aria-labelledby={item.headingId}
                    >
                      <div className="panel-body">
                        <p>{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateBox>
        </div>
      </div>
    </section>
  )
}
