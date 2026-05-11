import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Program from './components/Program'
import Pricing from './components/Pricing'
import Location from './components/Location'
import Sponsor from './components/Sponsor'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  // Intersection Observer pour les animations fade-in au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Program />
        <Pricing />
        <Location />
        <Sponsor />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
