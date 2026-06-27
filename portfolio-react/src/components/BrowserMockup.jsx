import './BrowserMockup.css'

export default function BrowserMockup({ children, twoUp = false, dots = true }) {
  return (
    <div className={`bm${twoUp ? ' bm--two-up' : ''}`}>
      <div className="bm-chrome">
        {dots && (
          <div className="bm-dots">
            <span className="bm-dot bm-dot--red" />
            <span className="bm-dot bm-dot--yellow" />
            <span className="bm-dot bm-dot--green" />
          </div>
        )}
        <div className="bm-urlbar" />
      </div>
      <div className={`bm-content${twoUp ? ' bm-content--two-up' : ''}`}>
        {children}
      </div>
    </div>
  )
}
