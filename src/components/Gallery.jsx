import { useState, useEffect, useCallback } from 'react'
import img1 from '../assets/images/img1.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import img9 from '../assets/images/img9.jpg'
import img10 from '../assets/images/img10.jpg'
import img11 from '../assets/images/img11.jpg'
import img12 from '../assets/images/img12.jpg'
import img13 from '../assets/images/img13.jpg'
import img14 from '../assets/images/img14.jpg'
import img15 from '../assets/images/img15.jpg'
import img16 from '../assets/images/img16.jpg'
import img17 from '../assets/images/img17.jpg'
import img18 from '../assets/images/img18.jpg'
import img19 from '../assets/images/img19.jpg'
import img21 from '../assets/images/img21.jpg'

const SLIDES = [
  { src: img1, alt: 'Activités au Gan Israel Hadera' },
  { src: img3, alt: 'Ambiance au Gan Israel Hadera' },
  { src: img4, alt: 'Jeux au Gan Israel Hadera' },
  { src: img5, alt: 'Activités au Gan Israel Hadera' },
  { src: img6, alt: 'Animateurs Gan Israel Hadera' }, 
  { src: img7, alt: 'Activités au Gan Israel Hadera' },
  { src: img8, alt: 'Activités au Gan Israel Hadera' }, 
  { src: img9, alt: 'Activités au Gan Israel Hadera' },
  { src: img10, alt: 'Activités au Gan Israel Hadera' },
  { src: img11, alt: 'Activités au Gan Israel Hadera' },
  { src: img12, alt: 'Activités au Gan Israel Hadera' },
  { src: img13, alt: 'Activités au Gan Israel Hadera' },  
  { src: img14, alt: 'Activités au Gan Israel Hadera' },
  { src: img15, alt: 'Activités au Gan Israel Hadera' },
  { src: img16, alt: 'Activités au Gan Israel Hadera' },
  { src: img17, alt: 'Activités au Gan Israel Hadera' },
  { src: img18, alt: 'Activités au Gan Israel Hadera' },
  { src: img19, alt: 'Activités au Gan Israel Hadera' },
  { src: img21, alt: 'Activités au Gan Israel Hadera' },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length)
  }, [])

  // Auto-play toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  // Clavier
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Galerie</h2>
        </div>

        <div
          className="gallery-carousel fade-in fade-in-delay-1"
          role="region"
          aria-label="Galerie photos Gan Israel Hadera"
          aria-roledescription="carousel"
        >
          {/* Track */}
          <div
            className="gallery-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className="gallery-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} sur ${SLIDES.length}`}
              >
                {slide.src ? (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <div className="gallery-placeholder">
                    <span style={{ fontSize: '3rem' }}>📷</span>
                    <span>{slide.label}</span>
                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                      Remplacer par votre photo
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bouton précédent */}
          <button
            className="gallery-btn gallery-btn-prev"
            onClick={prev}
            aria-label="Photo précédente"
          >
            ‹
          </button>

          {/* Bouton suivant */}
          <button
            className="gallery-btn gallery-btn-next"
            onClick={next}
            aria-label="Photo suivante"
          >
            ›
          </button>
        </div>

        {/* Dots de navigation */}
        <div className="gallery-dots" role="tablist" aria-label="Navigation galerie">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`gallery-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Aller à la photo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
