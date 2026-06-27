import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import AnimateBox from '../AnimateBox'
import { Link } from 'react-router-dom'
import { img } from '../../utils/img'

const galleries = {
  kiosks: [
    { src: img('/images/pk/pk-1.jpg') },
    { src: img('/images/pk/pk-2.jpg') },
    { src: img('/images/pk/pk-3.jpg') },
    { src: img('/images/pk/pk-4.jpg') },
    { src: img('/images/pk/pk-5.jpg') },
    { src: img('/images/pk/pk-6.jpg') },
    { src: img('/images/pk/pk-7.jpg') },
    { src: img('/images/pk/pk-8.jpg') },
    { src: img('/images/pk/pk-9.jpg') },
    { src: img('/images/pk/pk-10.jpg') },
    { src: img('/images/pk/uxflow_kiosks.jpg') },
  ],
  ncell: [
    { src: img('/images/ncell-1.jpg') },
    { src: img('/images/ncell-2.jpg') },
    { src: img('/images/ncell-3.jpg') },
  ],
  wallboards: [
    { src: img('/images/wb-1.jpg') },
    { src: img('/images/wb-2.jpg') },
    { src: img('/images/wb-3.jpg') },
    { src: img('/images/wb-4.jpg') },
  ],
}

export default function Work() {
  const [lightbox, setLightbox] = useState({ open: false, slides: [], index: 0 })

  function openGallery(e, galleryKey) {
    e.preventDefault()
    setLightbox({ open: true, slides: galleries[galleryKey], index: 0 })
  }

  return (
    <section className="portfolio-work" data-section="work">
      <div className="portfolio-narrow-content">
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="col-md-6 col-md-offset-3 col-md-pull-3">
            <span className="heading-meta">Portfolio</span>
            <h2 className="portfolio-heading">Recent Work</h2>
          </AnimateBox>
        </div>
        <div className="row">
          <AnimateBox effect="fadeInLeft" className="col-md-6">
            <div className="project" style={{ backgroundImage: `url(${img('/images/img-1.jpg')})` }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="https://mcremote360.com">remote360&reg; - Mitsubishi EDM/Laser</a></h3>
                  <span>
                    &bull; UX Research<br />
                    &bull; UX Design<br />
                    &bull; UI Design<br />
                    &bull; Front-End Development
                  </span>
                  <p className="icon">
                    <span><Link to="/r360">View Case Study</Link></span>
                  </p>
                </div>
              </div>
            </div>
          </AnimateBox>

          <AnimateBox effect="fadeInRight" className="col-md-6">
            <div className="project" style={{ backgroundImage: `url(${img('/images/img-2.jpg')})` }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="https://tirerack.com">tirerack.com - Tire Rack</a></h3>
                  <span>
                    &bull; UI Design<br />
                    &bull; Front-End Development
                  </span>
                  <p className="icon">
                    <span><Link to="/tirerack">View Case Study</Link></span>
                  </p>
                </div>
              </div>
            </div>
          </AnimateBox>

          <AnimateBox effect="fadeInRight" className="col-md-6">
            <div className="project" style={{ backgroundImage: `url(${img('/images/img-7.jpg')})` }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="https://elevatek12.com">elevetatek12.com - Elevate K12</a></h3>
                  <span>&bull; UI Design</span>
                  <p className="icon">
                    <span><Link to="/k12">View Case Study</Link></span>
                  </p>
                </div>
              </div>
            </div>
          </AnimateBox>

          <AnimateBox effect="fadeInLeft" className="col-md-6">
            <div className="project project--homeground" style={{ backgroundImage: `url(${img('/images/homeground-fall.jpg')})` }}>
              <img src={img('/images/homeground-logo.png')} alt="Homeground" className="project-logo" />
              <div className="desc">
                <div className="con">
                  <h3>Homeground</h3>
                  <span>
                    &bull; Brand Identity<br />
                    &bull; UX Design<br />
                    &bull; Shopify Development<br />
                    &bull; Email Marketing
                  </span>
                  <p className="icon">
                    <span><Link to="/homeground">View Case Study</Link></span>
                  </p>
                </div>
              </div>
            </div>
          </AnimateBox>

          <AnimateBox effect="fadeInTop" className="col-md-6">
            <div className="project" style={{ backgroundImage: `url(${img('/images/img-8.jpg')})` }}>
              <div className="desc">
                <div className="con">
                  <h3>Product Kiosks - Mitsubishi EDM/Laser</h3>
                  <span>&bull; UX Design</span>
                  <span>&bull; UI Design</span>
                  <span>&bull; React WP Theme Front-End Development</span>
                  <p className="icon">
                    <span>
                      <a href="#" onClick={(e) => openGallery(e, 'kiosks')}>View Samples</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </AnimateBox>

          <AnimateBox effect="fadeInTop" className="col-md-6">
            <div className="project" style={{ backgroundImage: `url(${img('/images/img-5.jpg')})` }}>
              <div className="desc">
                <div className="con">
                  <h3>N-Cell - Mitsubishi EDM/Laser</h3>
                  <span>&bull; UI Design</span>
                  <p className="icon">
                    <span>
                      <a href="#" onClick={(e) => openGallery(e, 'ncell')}>View Samples</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </AnimateBox>

          <AnimateBox effect="fadeInTop" className="col-md-6">
            <div className="project" style={{ backgroundImage: `url(${img('/images/img-3.jpg')})` }}>
              <div className="desc">
                <div className="con">
                  <h3>Office Wallboards - Mitsubishi EDM/Laser</h3>
                  <span>
                    &bull; UI Design<br />
                    &bull; Front-End Development
                  </span>
                  <p className="icon">
                    <span>
                      <a href="#" onClick={(e) => openGallery(e, 'wallboards')}>View Samples</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </AnimateBox>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load More <i className="icon-reload"></i></a></p>
          </div>
        </div>
      </div>

      <Lightbox
        open={lightbox.open}
        close={() => setLightbox((prev) => ({ ...prev, open: false }))}
        slides={lightbox.slides}
        index={lightbox.index}
      />
    </section>
  )
}
