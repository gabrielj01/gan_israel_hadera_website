import { useEffect, useState } from 'react'

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

import loaderImage from './assets/logos/logo.png'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1300)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

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
      {isLoading && (
        <div className="site-loader">
          <img src={loaderImage} alt="Chargement" className="loader-image" />
          <p>Chargement...</p>
        </div>
      )}

      <div className={isLoading ? 'site-content hidden' : 'site-content'}>
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
      </div>
    </>
  )
}

export default App