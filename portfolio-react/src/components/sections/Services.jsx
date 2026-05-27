import AnimateBox from '../AnimateBox'

export default function Services() {
  return (
    <section className="portfolio-services" data-section="services">
      <div className="portfolio-narrow-content">
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="col-md-6 col-md-offset-3 col-md-pull-3">
            <span className="heading-meta">What Do I Do?</span>
            <h2 className="portfolio-heading">My Areas of Expertise</h2>
          </AnimateBox>
        </div>
        <div className="row row-pt-md">
          <div className="col-md-4 text-center">
            <div className="services color-2">
              <div className="desc">
                <h3>UX</h3>
                <p>Creating products that provide meaningful and relevant experiences to users.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="services color-2">
              <div className="desc">
                <h3>Design</h3>
                <p>Crafting aesthetically pleasing UIs for all audiences.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="services color-2">
              <div className="desc">
                <h3>Development</h3>
                <p>Bringing beautiful ideas to life in the browser.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
