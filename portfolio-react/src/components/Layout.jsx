import CaseStudyNav from './CaseStudyNav'
import CaseStudyFooter from './CaseStudyFooter'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <CaseStudyNav />
      <main className="layout-main">
        {children}
      </main>
      <CaseStudyFooter />
    </div>
  )
}
