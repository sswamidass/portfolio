import { useEffect } from 'react'
import BackButton from '../BackButton'

export default function CaseStudyLayout({ bodyId, children }) {
  useEffect(() => {
    document.body.id = bodyId
    return () => { document.body.id = '' }
  }, [bodyId])

  return (
    <div id="portfolio-page">
      <BackButton />
      <div className="container-wrap">
        <div id="case-main">
          {children}
        </div>
      </div>
    </div>
  )
}
