import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WorkListingPage from './pages/WorkListingPage'
import About from './pages/About'
import GehcCaseStudy from './pages/GehcCaseStudy'
import GehcGuard from './components/GehcGuard'
import HomegroundCaseStudy from './pages/HomegroundCaseStudy'
import R360CaseStudy from './pages/R360CaseStudy'
import TireRackCaseStudy from './pages/TireRackCaseStudy'
import K12CaseStudy from './pages/K12CaseStudy'

function App() {
  return (
    <BrowserRouter basename="/portfolio-new">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkListingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/gehc" element={
          <GehcGuard><GehcCaseStudy /></GehcGuard>
        } />
        <Route path="/work/homeground" element={<HomegroundCaseStudy />} />
        <Route path="/work/remote360" element={<R360CaseStudy />} />
        <Route path="/work/tirerack" element={<TireRackCaseStudy />} />
        <Route path="/work/k12" element={<K12CaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
