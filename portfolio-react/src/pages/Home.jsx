import { useEffect } from 'react'
import HomeLayout from '../components/layout/HomeLayout'
import Hero from '../components/Hero'
import LogoTicker from '../components/LogoTicker'
import FeaturedWork from '../components/sections/FeaturedWork'
import Expertise from '../components/sections/Expertise'
import Education from '../components/sections/Education'
import Experience from '../components/sections/Experience'
import Work from '../components/sections/Work'
import Contact from '../components/sections/Contact'

export default function Home() {
  useEffect(() => {
    document.title = 'Sanjay Swamidass'
    document.body.id = ''
  }, [])

  return (
    <HomeLayout>
      <Hero />
      <LogoTicker />
      {/* data-section="about" anchor so nav highlight works */}
      <div data-section="about" style={{ position: 'absolute', marginTop: '-72px' }} />
      <FeaturedWork />
      <Expertise />
      <Education />
      <Experience />
      <Work />
      <Contact />
    </HomeLayout>
  )
}
