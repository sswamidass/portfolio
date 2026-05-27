import AnimateBox from '../AnimateBox'

export default function Welcome() {
  return (
    <div className="portfolio-narrow-content">
      <div className="row">
        <div className="col-md-12">
          <AnimateBox effect="fadeInLeft" className="row row-bottom-padded-sm">
            <div className="col-md-12">
              <div className="welcome-desc">
                <p><strong>Hello! My name is Sanjay Swamidass.</strong> I am an experienced, design-minded, Senior Product Designer focused on the creation of experiences between what and how a user uses something to achieve their goals, by making technology accessible and easy to understand for people.</p>
              </div>
            </div>
          </AnimateBox>
        </div>
      </div>
    </div>
  )
}
