import AnimateBox from '../AnimateBox'

export default function Contact() {
  return (
    <section className="portfolio-contact" data-section="contact">
      <div className="portfolio-narrow-content">
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="col-md-6 col-md-offset-3 col-md-pull-3">
            <span className="heading-meta">Get in Touch</span>
            <h2 className="portfolio-heading">Contact</h2>
          </AnimateBox>
        </div>
        <div className="row">
          <div className="col-md-4">
            <AnimateBox effect="fadeInLeft" className="portfolio-feature portfolio-feature-sm">
              <div className="portfolio-icon">
                <i className="icon-mail"></i>
              </div>
              <div className="portfolio-text">
                <p><a href="mailto:swamidass.sanjay@gmail.com">swamidass.sanjay@gmail.com</a></p>
              </div>
            </AnimateBox>
          </div>
          <div className="col-md-4">
            <AnimateBox effect="fadeInLeft" className="portfolio-feature portfolio-feature-sm">
              <div className="portfolio-icon">
                <i className="icon-location"></i>
              </div>
              <div className="portfolio-text">
                <p>808 W Van Buren St, Chicago, IL 60607</p>
              </div>
            </AnimateBox>
          </div>
          <div className="col-md-4">
            <AnimateBox effect="fadeInLeft" className="portfolio-feature portfolio-feature-sm">
              <div className="portfolio-icon">
                <i className="icon-phone"></i>
              </div>
              <div className="portfolio-text">
                <p><a href="tel://6088437472">(608)-843-7472</a></p>
              </div>
            </AnimateBox>
          </div>
        </div>
      </div>
    </section>
  )
}
