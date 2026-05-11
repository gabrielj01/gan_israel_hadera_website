/* ── Icônes SVG inline ──────────────────────────────────────── */
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="white" strokeWidth="2" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export default function Hero() {
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">

        {/* Titre principal */}
        <h1 className="hero-title">GAN ISRAEL HADERA</h1>


        {/* Bouton CTA principal */}
        <div className="hero-cta">
          <a
            href="#pricing"
            className="btn-primary"
            onClick={(e) => scrollToSection(e, '#pricing')}
            aria-label="Inscrire mon enfant au Gan Israel Hadera"
          >
            🎒 Inscrire mon enfant
          </a>
        </div>

        {/* Liens réseaux sociaux */}
        <div className="hero-social" aria-label="Suivez-nous sur les réseaux sociaux">
          <a
            href="https://www.facebook.com/menouha.amram/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Notre page Facebook"
          >
            <IconFacebook />
          </a>
          <a
            href="https://wa.me/972534716978?text=Bonjour%2C%20je%20souhaite%20recevoir%20des%20informations%20concernant%20le%20Gan%20Isra%C3%ABl%20de%20Hadera."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nous contacter sur WhatsApp"
          >
            <IconWhatsApp />
          </a>
          <a
            href="https://www.instagram.com/jeunesse.hadera/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Notre profil Instagram"
          >
            <IconInstagram />
          </a>
        </div>
      </div>

      {/* Vague de transition vers la section suivante */}
      <div className="hero-wave">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%', height: '80px' }}
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}
