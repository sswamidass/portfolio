import { useEffect } from 'react'
import CaseStudyLayout from '../components/layout/CaseStudyLayout'
import AnimateBox from '../components/AnimateBox'

export default function R360CaseStudy() {
  useEffect(() => {
    document.title = 'remote360 Case Study - Sanjay Swamidass'
  }, [])

  return (
    <CaseStudyLayout bodyId="case-study-r360">
      <style>{`img { border-radius: 25px; }`}</style>

      <section>
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
            <div className="text-center">
              <h1 id="portfolio-logo"><a href="/"></a></h1>
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
                    <img style={{ borderRadius: 0 }} className="r360" src="/images/r360.png" width="280" alt="remote360" />
                    <AnimateBox effect="fadeInLeft" className="col-md-12" style={{ padding: 0 }}>
                      <div className="col-md-12 text-center" style={{ padding: 0 }}>
                        <img src="/images/responsive_group.png" width="100%" alt="remote360 responsive" />
                      </div>
                    </AnimateBox>
                  </div>
                  <p><strong>remote360®</strong> is a real-time production monitoring platform for the machining and fabrication industry. It gives operators and service teams live visibility into machine performance, maintenance metrics, and productivity data — from any device, anywhere.</p>
                  <p>I designed and built remote360 from the ground up, taking it from a limited Java desktop tool to a fully responsive, modern web application. This is the story of how that happened.</p>
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
                    <span className="heading-meta">remote360</span>
                    <h2 className="portfolio-heading">The Challenge</h2>
                  </div>
                  <p>When I joined MC Machinery, a basic version of remote360 already existed — a desktop Java application built by an IoT partner. It proved the concept, but the experience fell flat. Customers wanted real-time data on the go; the tool gave them a clunky, desktop-only interface that hadn't been designed with them in mind.</p>
                  <p>
                    <AnimateBox effect="fadeInLeft" className="col-md-12">
                      <div className="col-md-12 text-center">
                        <img src="/images/ignition.png" width="90%" style={{ borderRadius: 0 }} alt="Java application" /><br /><br />
                      </div>
                    </AnimateBox>
                  </p>
                  <p>The IoT partner specialized in data infrastructure, not design. My role was to take ownership of everything else: UX strategy, visual design, and front-end development. Coming from a full design team at Tire Rack to being the sole designer here was a significant shift — but it meant I had the freedom to shape the product end-to-end.</p>
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
                    <span className="heading-meta">remote360</span>
                    <h2 className="portfolio-heading">Users &amp; Audience</h2>
                  </div>
                  <p>The core audience was operators and managers in the fabrication and machining industry — people who needed fast answers about their machines without digging through spreadsheets or waiting on a service call. Many were working in industrial environments where time is money and downtime is a serious cost.</p>
                  <p>Through interviews with customers, engineers, technicians, and sales reps, I built out a primary persona that shaped every subsequent design decision:</p>
                  <div className="col-md-12 text-center">
                    <AnimateBox tag="span" effect="fadeInUp">
                      <img className="persona" src="/images/persona.svg" width="100%" alt="User persona" />
                      <img className="persona-mobile" src="/images/persona_mobile.svg" width="100%" alt="User persona mobile" />
                    </AnimateBox>
                    <br /><br />
                  </div>
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
                    <span className="heading-meta">remote360</span>
                    <h2 className="portfolio-heading">Team &amp; Role</h2>
                  </div>
                  <p>I was embedded in the Business Systems team alongside a back-end developer, a network support technician, and a department manager who had championed the original concept. I was the only designer on the project.</p>
                  <p>My responsibilities spanned the full product lifecycle: user research, information architecture, UX flows, interaction design, visual design, prototyping, and front-end development (HTML5, SCSS, JavaScript, PHP, MySQL). Being the sole designer and front-end developer gave me a level of coherence across the product that a larger, siloed team often can't achieve.</p>
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
                    <span className="heading-meta">remote360</span>
                    <h2 className="portfolio-heading">Wireframing &amp; Planning</h2>
                  </div>
                  <p>Before designing anything new, I needed to understand what was working. I recruited a range of current remote360 users — veteran users who knew the product well, and newer users who hadn't yet formed habits around it. Their contrast was revealing: long-time users had workarounds; new users hit walls.</p>
                  <p>The feedback was clear: the core functionality had value, but the path to it was too slow. We decided to bring the product to the web and launch an MVP that preserved what worked while eliminating what didn't.</p>
                  <AnimateBox className="col-md-12 text-center">
                    <img className="persona" src="/images/ia.jpg" width="100%" style={{ marginBottom: '50px' }} alt="Information architecture" />
                  </AnimateBox>
                  <AnimateBox className="col-md-12 text-center">
                    <img className="persona-mobile" src="/images/ia-mobile.jpg" width="100%" style={{ marginBottom: '50px' }} alt="Information architecture mobile" />
                  </AnimateBox>
                  <p>I structured the information architecture around speed of access — the goal was to surface the most relevant data within one or two taps, regardless of device.</p>
                  <AnimateBox className="col-md-12 text-center">
                    <img src="/images/wireframes.jpg" width="100%" alt="Wireframes" /><br /><br />
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
                    <span className="heading-meta">remote360</span>
                    <h2 className="portfolio-heading">User Interface Design</h2>
                  </div>
                  <p>I ran A/B testing on theme direction with technicians, product managers, and leadership. The clear winner was a dark interface — it felt right for an industrial monitoring context, reduced eye strain in production environments, and gave the product a sharp, professional identity.</p>
                  <AnimateBox className="col-md-12 text-center">
                    <img src="/images/mockups.jpg" width="100%" style={{ marginBottom: '50px' }} alt="Mockups" />
                  </AnimateBox>
                  <p>I rebuilt the color system from scratch using the existing Java app's red, green, and yellow as a foundation — pulling them back to softer, more readable tones and adding a secondary and tertiary palette for supporting content. Every icon was redrawn for the new product line. The result was a cohesive, modern interface that felt like a different product.</p>
                </div>
                <AnimateBox className="col-md-12 text-center">
                  <img src="/images/ui-1.jpg" width="100%" alt="UI design" />
                </AnimateBox>
                <AnimateBox className="col-md-12 text-center">
                  <img style={{ width: '50%' }} src="/images/r360_StyleGuide.jpg" width="100%" alt="Style guide" />
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
                    <span className="heading-meta">remote360</span>
                    <h2 className="portfolio-heading">Front-End Development</h2>
                  </div>
                  <p>I built the front end using HTML5, SCSS, and JavaScript, working with PHP and MySQL for data integration. Owning both design and development was a significant advantage — I could make real-time decisions at the intersection of what was designed and what was buildable, without the translation loss that comes from handoff.</p>
                  <p>The app was built mobile-first and tested across devices and screen sizes from the start, ensuring the responsive experience matched the quality of the desktop.</p>
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
                    <span className="heading-meta">remote360</span>
                    <h2 className="portfolio-heading">Outcome</h2>
                  </div>
                  <p>The launch went well. Beta testing with local customers confirmed the new direction, and the application quickly became a differentiator for the company's service offering. Since the 2016 launch, the platform has continued to evolve — streamlined color usage, refined typography, improved data visualizations, and new features like PDF production reports delivered to customers' inboxes.</p>
                  <AnimateBox className="col-md-12 text-center">
                    <img src="/images/reports.png" width="100%" alt="Reports" />
                  </AnimateBox>
                  <p>remote360 made headlines in several industry publications, reflecting the impact the platform had on how fabrication and machining companies approached production monitoring:</p>
                  <ul>
                    <li><a href="https://www.canadianmetalworking.com/canadianfabricatingandwelding/article/fabricating/data-driven-manufacturing" target="blank"><strong>Data-Driven Manufacturing</strong> — Canadian Fabricating &amp; Welding</a></li>
                    <li><a href="https://s3-us-west-1.amazonaws.com/mcmachinery-uploads/uploads/diamonds/CoverStory_Spring19_r2.pdf" target="blank"><strong>#1 in EDM Sales, Support and Innovation</strong> — MC Machinery</a></li>
                    <li><a href="https://www.mcmachinery.com/blog/customer-story-principal-manufacturing/" target="blank"><strong>Machine Monitoring Optimizes Operations</strong> — MC Machinery Blog</a></li>
                    <li><a href="http://www.metalmecanica.com/temas/Remote-360,-monitoreo-remoto-de-servicio-y-soporte+125577" target="blank"><strong>remote360: monitoreo remoto de servicio y soporte</strong> — Metal Mecánica</a></li>
                    <li><a href="https://www.canadianmetalworking-digital.com/canadianmetalworking/202011/MobilePagedReplica.action?pm=2&folio=FW30#pg76" target="blank"><strong>Remote Monitoring to Make Better Decisions</strong> — Canadian Metalworking</a></li>
                  </ul>
                  <AnimateBox className="col-md-12 text-center">
                    <img style={{ borderRadius: '25px' }} className="persona" src="/images/beforeafter.jpg" width="100%" alt="Before and after" />
                    <img style={{ borderRadius: '25px' }} className="persona-mobile" src="/images/beforeafter_mobile.jpg" width="100%" alt="Before and after mobile" />
                    <br /><br />
                  </AnimateBox>
                  <p>Building remote360 taught me what it means to own a product. When you're the designer, the developer, and the researcher — every decision is yours to make and live with. That accountability sharpened how I think about every project since.</p>
                </div>
                <AnimateBox className="col-md-12 text-center">
                  <img src="/images/final_group.jpg" width="70%" alt="Final group" />
                </AnimateBox>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  )
}
