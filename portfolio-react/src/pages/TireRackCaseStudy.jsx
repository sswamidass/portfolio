import { useEffect } from 'react'
import CaseStudyLayout from '../components/layout/CaseStudyLayout'
import AnimateBox from '../components/AnimateBox'

export default function TireRackCaseStudy() {
  useEffect(() => {
    document.title = 'Tire Rack Case Study - Sanjay Swamidass'
  }, [])

  return (
    <CaseStudyLayout bodyId="case-study-tirerack">
      <style>{`img { border-radius: 25px; }`}</style>

      <section>
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
            <div className="text-center">
              <h1 id="portfolio-logo"></h1>
              <span className="position"></span>
            </div>
          </AnimateBox>
        </div>
      </section>

      {/* Intro */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc intro-desc">
                    <span className="heading-meta">Case Study</span>
                    <img style={{ borderRadius: 0 }} className="r360" src="/images/tirerack_lg.png" width="280" alt="Tire Rack" />
                    <AnimateBox effect="fadeInLeft" className="col-md-12" style={{ padding: 0 }}>
                      <div className="col-md-12 text-center" style={{ padding: 0 }}>
                        <img src="/images/responsive_group_tr.png" width="100%" alt="Tire Rack responsive" />
                      </div>
                    </AnimateBox>
                  </div>
                  <p><strong>Tire Rack</strong> is the second-largest online tire retailer in North America, headquartered in South Bend, Indiana. They've built their reputation on helping drivers — from everyday commuters to serious enthusiasts — find the right tires and get them shipped directly to their door or a local installer.</p>
                </div>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">tirerack.com</span>
                    <h2 className="portfolio-heading">The Challenge</h2>
                  </div>
                  <p>Tire Rack was my first professional role after college. The timing was significant — in 2012, the retail site was running on an architecture built in the early 2000s. It didn't meet the standards customers expected: no responsive design, no HTML5 or CSS3, and a visual language rooted in skeuomorphism that had aged poorly.</p>
                  <p>
                    <AnimateBox effect="fadeInLeft" className="col-md-12">
                      <div className="col-md-12 text-center">
                        <img src="/images/old-tr.png" width="90%" alt="Old Tire Rack site" /> <br /><br />
                      </div>
                    </AnimateBox>
                  </p>
                  <p>The goal was a ground-up redesign: a modern retail experience that would strengthen the brand, improve usability, and grow online traffic and conversions.</p>
                </div>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* Users & Audience */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">tirerack.com</span>
                    <h2 className="portfolio-heading">Users &amp; Audience</h2>
                  </div>
                  <p>Tire Rack's audience spans a wide range — from first-time tire buyers who just need the right fit, to seasoned car enthusiasts who know exactly what they want. The existing site had a reasonably clear purchase flow, but the experience around it didn't hold up. The redesign had to serve both ends of that spectrum without alienating either.</p>
                </div>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Role */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">tirerack.com</span>
                    <h2 className="portfolio-heading">Team &amp; Role</h2>
                  </div>
                  <p>I joined a team of six web designers on the marketing team. UX planning and prototyping were led by the company's UI/UX Designer; our team translated those into high-fidelity mockups and front-end code. As the newest member of the team, I owned specific sections of the site while collaborating closely with the lead to stay aligned on the design system as it evolved.</p>
                </div>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">tirerack.com</span>
                    <h2 className="portfolio-heading">Design Process</h2>
                  </div>
                  <p>The style guide was finalized from three concepts the team presented, and became the visual foundation everything else was built from. Working from UX flows defined by the lead designer, we designed mockups section by section — ensuring consistency across a site with significant scale and complexity.</p>
                  <AnimateBox className="col-md-12 text-center">
                    <img src="/images/mockups_tr.jpg" width="100%" alt="Tire Rack mockups" />
                  </AnimateBox>
                </div>
                <p>Each section was designed with the full user journey in mind — accounting for entry points, edge cases, and the gaps the old site left unaddressed.</p>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* User Interface Design */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">tirerack.com</span>
                    <h2 className="portfolio-heading">User Interface Design</h2>
                  </div>
                  <p>The design direction was familiar but elevated — Tire Rack's signature red stayed front and center, while the overall palette shifted to clean, restrained secondary and tertiary tones. Flat design replaced the dated skeuomorphic aesthetic, and strong product photography gave the site a more premium feel. The result was a site that felt both recognizable and genuinely modern.</p>
                </div>
                <AnimateBox className="col-md-12 text-center">
                  <img src="/images/ui-tr.png" width="100%" alt="Tire Rack UI" />
                </AnimateBox>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* Front-End Development */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">tirerack.com</span>
                    <h2 className="portfolio-heading">Front-End Development</h2>
                  </div>
                  <p>As mockups were approved, our team built out the front end in HTML5, CSS3, and JavaScript. Completed front-end code was handed off to back-end developers for data integration and platform deployment. Working within that handoff model taught me early how important precision in design and code quality is — the cleaner the handoff, the faster the build.</p>
                </div>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">tirerack.com</span>
                    <h2 className="portfolio-heading">Outcome</h2>
                  </div>
                  <p>The redesigned site launched in 2014 and delivered measurable results — overall site traffic and sales increased following the launch. More importantly, the project established a modern design foundation that the company continued to build on in the years that followed.</p>
                  <p>For me, Tire Rack was formative. Working on a site of that scale — with a real design system, a structured team process, and clear accountability — shaped how I approach large, collaborative design projects to this day.</p>
                </div>
                <AnimateBox className="col-md-12 text-center">
                  <img src="/images/final_tr.jpg" width="100%" alt="Final Tire Rack" />
                </AnimateBox>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  )
}
