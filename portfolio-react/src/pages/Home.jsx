import { useEffect } from 'react'
import Nav from '../components/Nav'
import './Home.css'

export default function Home() {
  useEffect(() => {
    document.title = 'Sanjay Swamidass'
  }, [])

  return (
    <div className="home">
      <Nav />
      <div className="home-center">
        <h1 className="home-headline">
          Sanjay Swamidass is a Senior Product Designer based in Chicago, Illinois.
        </h1>
        <p className="home-intro">
          Currently leading interaction design at GE HealthCare. Driven by curiosity, empathy, and process — he creates experiences that connect people with complex systems. Co-founder of Homeground, a Great Lakes coffee and kids' book subscription box, with his partner Sara.
        </p>
      </div>
    </div>
  )
}
