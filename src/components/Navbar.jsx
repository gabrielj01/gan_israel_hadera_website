import { useState, useEffect } from 'react'
//import logo from '../assets/logos/logo.png'

const navLinks = [
  { label: 'Qui sommes-nous ?', href: '#about' },
  { label: 'Galerie',           href: '#gallery' },
  { label: 'Programme',         href: '#program' },
  { label: 'Tarifs',            href: '#pricing' },
  { label: 'Localisation',      href: '#location' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermer le menu mobile sur resize (≥ 769px)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    closeMenu()
    const target = document.querySelector(href)
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className="navbar"
        style={{
          boxShadow: scrolled
            ? '0 2px 20px rgba(21, 101, 192, 0.18)'
            : '0 1px 4px rgba(21, 101, 192, 0.06)',
        }}
        aria-label="Navigation principale"
      >
        <div className="navbar-inner">
          {/* Logo */}
          <a
            href="#hero"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label="Gan Israel Hadera – accueil"
          >
            {/* <img src={logo} alt="Logo Gan Israel Hadera" /> */}
            <span className="navbar-logo-text">
              Gan Israel<br />Hadera
            </span>
          </a>

          {/* Liens desktop */}
          <ul className="navbar-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#inscription"
                className="navbar-cta"
                onClick={(e) => handleNavClick(e, '#sponsor')}
              >
                Inscription
              </a>
            </li>
          </ul>

          {/* Hamburger mobile */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Menu mobile overlay */}
      <div
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <button
          className="mobile-nav-close"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          ✕
        </button>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#pricing"
          className="mobile-nav-cta"
          onClick={(e) => handleNavClick(e, '#pricing')}
        >
          🎒 Inscription
        </a>
      </div>
    </>
  )
}
