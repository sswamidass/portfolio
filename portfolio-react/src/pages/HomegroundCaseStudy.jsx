import { useEffect } from 'react'
import CaseStudyLayout from '../components/layout/CaseStudyLayout'
import AnimateBox from '../components/AnimateBox'

export default function HomegroundCaseStudy() {
  useEffect(() => {
    document.title = 'Homeground Case Study - Sanjay Swamidass'
  }, [])

  return (
    <CaseStudyLayout bodyId="case-study-homeground">
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
                    <img style={{ borderRadius: 0 }} className="r360" src="/images/homeground-logo.png" width="220" alt="Homeground" />
                    <AnimateBox effect="fadeInLeft" className="col-md-12" style={{ padding: 0 }}>
                      <div className="col-md-12 text-center" style={{ padding: 0 }}>
                        <img src="/images/homeground-fall.jpg" width="100%" alt="Homeground — autumn landscape" />
                      </div>
                    </AnimateBox>
                  </div>
                  <p><strong>Homeground</strong> is a nature-inspired subscription box bringing together curated children's and adult books, a featured Great Lakes coffee roaster, and seasonal goods chosen around a central theme. The brand lives at the intersection of family ritual, literary life, and regional craft. I co-founded it with my family, and designed everything from the name up.</p>
                  <p>This case study covers the full design arc: brand identity, Shopify storefront, email marketing infrastructure, and the pre-launch experience that had to exist before a single box could ship.</p>
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
                    <span className="heading-meta">Homeground</span>
                    <h2 className="portfolio-heading">The Challenge</h2>
                  </div>
                  <p>Most design projects start with something — a brief, a style guide, a direction. Homeground started with a conversation and a blank canvas. We had a clear emotional vision for what the brand should feel like, but nothing built: no identity, no color system, no store, no audience. The design challenge wasn't just to make things look good — it was to construct a brand world coherent enough that a stranger could land on the site and immediately understand what Homeground was and why it was worth subscribing to.</p>
                  <p>The constraint was that the brand had to work across every touchpoint simultaneously. There was no room to figure out the logo first, then the store, then the emails. Everything had to speak the same language from the start.</p>
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
                    <span className="heading-meta">Homeground</span>
                    <h2 className="portfolio-heading">Users &amp; Audience</h2>
                  </div>
                  <p>The Homeground subscriber is someone who values the ritual of receiving something carefully chosen. They're parents who read alongside their kids, adults who treat coffee as a practice rather than a habit, and people who find meaning in things made with intention — a small-batch roast, a thoughtfully selected book, a seasonal item tied to where they live. They weren't looking for convenience; they were looking for connection.</p>
                  <p>Understanding that audience shaped every design decision. The brand couldn't be loud or transactional. It had to feel like a recommendation from someone with taste.</p>
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
                    <span className="heading-meta">Homeground</span>
                    <h2 className="portfolio-heading">Team &amp; Role</h2>
                  </div>
                  <p>I was co-founder and the sole designer on the project. That meant owning everything from brand strategy through execution: naming, visual identity, information architecture, Shopify storefront design and theme development, email campaign design, and the pre-launch infrastructure. My co-founder handled operations and product curation; I handled everything the customer sees.</p>
                </div>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">Homeground</span>
                    <h2 className="portfolio-heading">Brand Identity</h2>
                  </div>
                  <p>The identity started with the name — Homeground — and the associations it carries: the ground beneath your feet, home as a place you return to, the grounds in a coffee cup. From that, I built out a visual language rooted in the natural world: a botanical illustration system, an earthy palette anchored by deep greens and warm neutrals, and typography that balanced warmth with literary credibility.</p>
                  <p>Every element was codified into a living style guide — color tokens, type scale, illustration usage rules, logo clearance, and voice guidelines — so the brand could grow without drifting.</p>
                  <AnimateBox className="col-md-12 text-center">
                    <img src="/images/homeground-founders.jpg" width="80%" alt="Homeground brand — Meet the Founders" />
                  </AnimateBox>
                </div>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* Storefront Design */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">Homeground</span>
                    <h2 className="portfolio-heading">Storefront Design</h2>
                  </div>
                  <p>The Shopify storefront was built on the Horizon theme, migrated and rebuilt to reflect the Homeground brand system. I designed and developed six core pages: homepage, subscribe, FAQ, About Us, manage subscription, and a seasonal landing page. The information architecture was straightforward by design — the subscription model is simple, and the store needed to get out of its own way and let the brand do the convincing.</p>
                  <p>The subscribe page was the most considered. It had to answer the three questions every prospective subscriber has — what's in it, how much does it cost, and how do I cancel — without making the page feel like a legal document. Clear hierarchy, honest copy, and enough warmth to make the decision feel good rather than transactional.</p>
                  {/* TODO: Replace with Shopify storefront screenshots when available */}
                  <AnimateBox className="col-md-12 text-center">
                    <img src="/images/responsive_group_k12.png" width="100%" alt="Homeground storefront — responsive design" />
                  </AnimateBox>
                </div>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>

      {/* Email & Pre-Launch */}
      <section className="portfolio-about" data-section="about">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">Homeground</span>
                    <h2 className="portfolio-heading">Email &amp; Pre-Launch</h2>
                  </div>
                  <p>Before launch, the priority was building an audience. I designed and built a pre-launch email capture landing page — a standalone experience that conveyed the brand and collected sign-ups before the store opened. The page had to do what the full site would eventually do, in a single scroll.</p>
                  <p>Email infrastructure was built on Omnisend: welcome flows, subscriber confirmation, campaign templates, and DNS and email authentication setup (SPF, DKIM, DMARC) to ensure deliverability from day one. The campaign designs followed the same visual system as the storefront — consistent type, consistent color, consistent voice.</p>
                  <AnimateBox className="col-md-12 text-center">
                    <img src="/images/homeground-email-hero.png" width="80%" alt="Homeground pre-launch email — We've been waiting to tell someone" />
                  </AnimateBox>
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
                    <span className="heading-meta">Homeground</span>
                    <h2 className="portfolio-heading">Outcome</h2>
                  </div>
                  <p>By the time the store opened, the brand was fully built and every customer touchpoint was live and cohesive. The pre-launch list gave us a warm audience for the first order push.</p>
                  <p>More than the infrastructure, though, what Homeground represents is design ownership at its most complete — every decision, from the name to the email footer, made with intention and made by hand. It's the project I'm most personally invested in, and the one that most clearly shows what I'm capable of when given full creative latitude.</p>
                </div>
                <AnimateBox className="col-md-12 text-center">
                  <img src="/images/homeground-family.jpg" width="60%" alt="The Swamidass family — the people behind Homeground" />
                </AnimateBox>
              </AnimateBox>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  )
}
