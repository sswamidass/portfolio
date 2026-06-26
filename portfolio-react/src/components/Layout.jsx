import Nav from './Nav'
import Footer from './Footer'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
