/*
  Footer.jsx
  Contenu : BETH HABAD JEUNESSE HADERA, HAGUIBORIM 68 HADERA
            RAV M. OUANOUNOU 053-471-6978
            Liens Facebook + Instagram
*/

// Remplace ces chemins par les vraies adresses de tes logos
import footerLogoLeft from '../assets/logos/logo.png'
import footerLogoRight from '../assets/logos/logo_droite.png'
import { FaInstagram } from 'react-icons/fa'
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer" aria-label="Pied de page">
      <div className="footer-inner">
        <div className="footer-content">
          <img
            src={footerLogoLeft}
            alt="Logo partenaire gauche"
            className="footer-side-logo footer-side-logo-left"
          />

          <div className="footer-main">
            <div>
              <p className="footer-org">BETH HABAD JEUNESSE HADERA</p>
              <p className="footer-org">Maison Des Jeunes</p>
              <p className="footer-address">HAGUIBORIM 68, HADERA</p>
            </div>

            <p className="footer-phone">
              RAV M. OUANOUNOU&nbsp;–&nbsp;
              <a
                href="tel:+972534716978"
                aria-label="Appeler M. Ouanounou au 053-471-6978"
              >
                053-471-6978
              </a>
            </p>

            <p className="footer-phone">
              MENOUHA OUANOUNOU&nbsp;–&nbsp;
              <a
                href="tel:+972527991441"
                aria-label="Appeler Menouha Ouanounou au 052-799-1441"
              >
                052-799-1441
              </a>
            </p>

            <div
              className="footer-social"
              aria-label="Suivez la communauté sur les réseaux sociaux"
            >
              <a
                href="https://www.facebook.com/menouha.amram/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook de la communauté Jeunesse Habad Hadera"
              >
                <IconFacebook />
              </a>

              <a
                href="https://www.instagram.com/jeunesse.hadera"
                className='social-link instagram-link'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil Instagram de la communauté Jeunesse Habad Hadera"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <img
            src={footerLogoRight}
            alt="Logo partenaire droit"
            className="footer-side-logo footer-side-logo-right"
          />
        </div>

        <div className="footer-divider" />

        <p className="footer-bottom">
          © {new Date().getFullYear()} – Beth Habad Jeunesse Hadera
        </p>

        <div className="footer-credit">
          <a
            href="https://wa.me/972555002359?text=Bonjour%20Gabriel%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%20de%20d%C3%A9veloppement%20web%20et%20j%E2%80%99aimerais%20obtenir%20plus%20d%E2%80%99informations."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Gabriel sur WhatsApp"
          >
            Designed & developed by Gabriel. 
          </a>
        </div>
      </div>
    </footer>
  )
}