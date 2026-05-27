import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import R360CaseStudy from './pages/R360CaseStudy'
import K12CaseStudy from './pages/K12CaseStudy'
import TireRackCaseStudy from './pages/TireRackCaseStudy'
import HomegroundCaseStudy from './pages/HomegroundCaseStudy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/r360" element={<R360CaseStudy />} />
        <Route path="/k12" element={<K12CaseStudy />} />
        <Route path="/tirerack" element={<TireRackCaseStudy />} />
        <Route path="/homeground" element={<HomegroundCaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
