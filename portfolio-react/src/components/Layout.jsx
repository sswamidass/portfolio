import CaseStudyNav from './CaseStudyNav'
import Footer from './Footer'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <CaseStudyNav />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
