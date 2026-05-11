import { useState } from 'react'
import programImg from '../assets/images/program.jpg'

/*
  INSTRUCTIONS :
  Placez l'image du programme dans : src/assets/images/program.jpg
  (ou .png, .webp – adaptez l'import ci-dessous)

  import programImg from '../assets/images/program.jpg'
  Puis remplacez la valeur de PROGRAM_IMG par programImg
*/

// import programImg from '../assets/images/program.jpg'
const PROGRAM_IMG = programImg

export default function Program() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const openLightbox  = () => setLightboxOpen(true)
  const closeLightbox = () => setLightboxOpen(false)

  // Fermer avec Echap
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <>
      <section id="program" className="program">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Le Programme</h2>
          </div>

          <div
            className="program-image-wrapper fade-in fade-in-delay-1"
            onClick={PROGRAM_IMG ? openLightbox : undefined}
            role={PROGRAM_IMG ? 'button' : undefined}
            tabIndex={PROGRAM_IMG ? 0 : undefined}
            onKeyDown={PROGRAM_IMG ? handleKeyDown : undefined}
            aria-label={PROGRAM_IMG ? 'Agrandir le programme' : undefined}
            style={{ cursor: PROGRAM_IMG ? 'zoom-in' : 'default' }}
          >
            {PROGRAM_IMG ? (
              <img
                src={PROGRAM_IMG}
                alt="Programme hebdomadaire du Gan Israel Hadera"
                loading="lazy"
              />
            ) : (
              /* Placeholder */
              <div
                style={{
                  width: '100%',
                  minHeight: '320px',
                  background: 'linear-gradient(135deg, var(--blue-pale), var(--blue-mid))',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.75)',
                  gap: '1rem',
                  fontFamily: 'var(--font-display)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '3rem',
                }}
              >
                <span style={{ fontSize: '4rem' }}>📋</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                  Image du programme hebdomadaire
                </span>
                <span style={{ fontSize: '0.85rem', opacity: 0.75, textAlign: 'center' }}>
                  Placez votre image dans src/assets/images/program.jpg<br />
                  et décommentez l'import dans Program.jsx
                </span>
              </div>
            )}
          </div>

          {PROGRAM_IMG && (
            <p className="program-zoom-hint">
              🔍 Appuyez sur l'image pour l'agrandir
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {PROGRAM_IMG && (
        <div
          className={`program-lightbox${lightboxOpen ? ' open' : ''}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Programme en plein écran"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            ✕
          </button>
          <img
            src={PROGRAM_IMG}
            alt="Programme hebdomadaire du Gan Israel Hadera – plein écran"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
