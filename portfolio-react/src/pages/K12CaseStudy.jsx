import { useEffect } from 'react'
import CaseStudyLayout from '../components/layout/CaseStudyLayout'
import AnimateBox from '../components/AnimateBox'

export default function K12CaseStudy() {
  useEffect(() => {
    document.title = 'Elevate K12 Case Study - Sanjay Swamidass'
  }, [])

  return (
    <CaseStudyLayout bodyId="case-study-k12">
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
                    <img style={{ borderRadius: 0 }} className="r360" src="/images/k12_logo.png" width="130" alt="Elevate K12" />
                    <AnimateBox effect="fadeInLeft" className="col-md-12" style={{ padding: 0 }}>
                      <div className="col-md-12 text-center" style={{ padding: 0 }}>
                        <img src="/images/responsive_group_k12.png" width="100%" alt="K12 responsive" />
                      </div>
                    </AnimateBox>
                  </div>
                  <p><strong>Elevate K-12</strong> connects schools facing teacher shortages with certified remote instructors — bringing high-quality, standardized instruction to students regardless of where they live. Their mission is simple: every student deserves a great teacher.</p>
                  <p>I was brought in to redesign their marketing website, with a hard three-week deadline to go live.</p>
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
                    <span className="heading-meta">elevatek12.com</span>
                    <h2 className="portfolio-heading">The Challenge</h2>
                  </div>
                  <p>The existing site was dense. Landing pages were overloaded with information, and first-time visitors struggled to understand what Elevate K-12 actually did — let alone why it mattered. The experience felt like reading a brochure, not discovering a solution.</p>
                  <AnimateBox className="col-md-12 text-center">
                    <img src="/images/old-k12.png" width="90%" style={{ position: 'relative', top: '50px' }} alt="Old K12 site" /> <br /><br />
                  </AnimateBox>
                  <p>The ask was to transform the site into something that felt like an <em>experience</em> — letting the company's mission and services land quickly, with content structured for the way real users actually read online.</p>
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
                    <span className="heading-meta">elevatek12.com</span>
                    <h2 className="portfolio-heading">Users &amp; Audience</h2>
                  </div>
                  <p>The primary audience was school administrators and education decision-makers — people evaluating whether a remote teaching platform could solve a staffing crisis in their district. They weren't casual browsers; they were coming to the site with a specific problem and a short window of attention. The redesign needed to meet them where they were: give them clarity fast, and make a compelling case for why Elevate K-12 was the right answer.</p>
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
                    <span className="heading-meta">elevatek12.com</span>
                    <h2 className="portfolio-heading">Team &amp; Role</h2>
                  </div>
                  <p>This was a focused UI design engagement. I worked directly with the company's Brand Manager to audit existing content, align on priorities, and determine what could realistically ship within the deadline. I owned the full visual design — layouts, typography, color, components — and delivered handoff-ready files for their development team.</p>
                </div>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframing & Planning */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">elevatek12.com</span>
                    <h2 className="portfolio-heading">Wireframing &amp; Planning</h2>
                  </div>
                  <p>Given the tight timeline, I kept the site hierarchy close to what already existed — reducing risk while maximizing design impact. The real work was in restructuring how content was presented within each page.</p>
                  <AnimateBox className="col-md-12 text-center">
                    <img src="/images/k12_sitemap.png" width="100%" style={{ position: 'relative', bottom: '20px' }} alt="K12 sitemap" />
                  </AnimateBox>
                  <p>The guiding principle was one idea at a time. Instead of presenting everything at once, I designed a flow that let users absorb the company's value proposition in stages — building understanding before asking for any action.</p>
                  <AnimateBox className="col-md-12 text-center">
                    <img style={{ borderRadius: 0 }} src="/images/k12_wireframe.png" width="100%" alt="K12 wireframe" />
                  </AnimateBox>
                </div>
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
                    <span className="heading-meta">elevatek12.com</span>
                    <h2 className="portfolio-heading">User Interface Design</h2>
                  </div>
                  <AnimateBox className="col-md-12 text-center">
                    <img style={{ position: 'relative', top: '10px' }} src="/images/ui-k12.png" width="60%" alt="K12 UI" />
                  </AnimateBox>
                  <p>I kept the brand's primary green and secondary purple, but shifted how they were used — from large, dominant color blocks to intentional accent moments. The result felt more modern and gave the content room to breathe. Clean typography and generous white space did the heavy lifting.</p>
                </div>
                <AnimateBox className="col-md-12 text-center">
                  <img style={{ position: 'relative', top: '60px', borderRadius: 0 }} src="/images/k12_flow.png" width="60%" alt="K12 flow" />
                </AnimateBox>
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
                    <span className="heading-meta">elevatek12.com</span>
                    <h2 className="portfolio-heading">Outcome</h2>
                  </div>
                  <p>The redesign shipped on time. Development was handled by the company's internal team from my handoff files, and the site launched on schedule. The new design gave Elevate K-12 a cleaner, more credible presence — one that reflected the professionalism of their mission and made it far easier for prospective clients to understand their offering at a glance.</p>
                </div>
                <AnimateBox className="col-md-12 text-center">
                  <img src="/images/final_k12.jpg" width="80%" alt="Final K12" />
                </AnimateBox>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  )
}
