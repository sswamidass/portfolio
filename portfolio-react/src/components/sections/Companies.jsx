import AnimateBox from '../AnimateBox'

export default function Companies() {
  return (
    <section>
      <div className="row">
        <AnimateBox effect="fadeInLeft" className="col-md-12">
          <div className="hire">
            <h2>I've Worked for Some Cool Companies!</h2>
            <div className="col-md-4 text-center company-1">
              <a href="https://www.gehealthcare.com/" target="blank" style={{ position: 'relative', bottom: '15px' }}>
                <img src="images/ge.png" width="60" alt="GE Healthcare" />
              </a>
            </div>
            <div className="col-md-4 text-center company-1">
              <a href="https://www.mcmachinery.com/" target="blank">
                <img src="images/mms.png" width="180" alt="MC Machinery" />
              </a>
            </div>
            <div className="col-md-4 text-center company-2">
              <a href="https://www.tirerack.com/content/tirerack/desktop/en/homepage.html" target="blank">
                <img src="images/tirerack.png" width="140" alt="Tire Rack" />
              </a>
            </div>
          </div>
        </AnimateBox>
      </div>
    </section>
  )
}
