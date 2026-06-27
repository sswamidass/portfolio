import { img } from '../utils/img'

const logos = [
  { src: img('/images/ge.png'), alt: 'GE Healthcare', href: 'https://www.gehealthcare.com/' },
  { src: img('/images/mms.png'), alt: 'MC Machinery / Mitsubishi EDM', href: 'https://www.mcmachinery.com/' },
  { src: img('/images/tirerack.png'), alt: 'Tire Rack', href: 'https://www.tirerack.com/' },
  { src: img('/images/simpleupdates.png'), alt: 'Simple Updates', href: 'https://www.simpleupdates.com/' },
  { src: img('/images/homeground-logo.png'), alt: 'Homeground', href: '#', light: true },
  { text: 'Andrews University', href: 'https://www.andrews.edu/' },
]

// Quadruple so there's always content filling the screen — animate -25% (one set)
const tickerItems = [...logos, ...logos, ...logos, ...logos]

export default function LogoTicker() {
  return (
    <div id="logo-ticker">
      <div className="ticker-label">Companies I've worked with</div>
      <div className="ticker-track-wrap">
        <div className="ticker-track">
          {tickerItems.map((logo, i) => (
            <div className="ticker-logo" key={i}>
              {logo.src ? (
                <a href={logo.href} target="_blank" rel="noreferrer">
                  <img src={logo.src} alt={logo.alt} className={logo.light ? 'ticker-logo-light' : ''} />
                </a>
              ) : (
                <a href={logo.href} target="_blank" rel="noreferrer" className="ticker-logo-text">
                  {logo.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
