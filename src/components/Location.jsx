/*
  Location.jsx – Localisation
  Google Maps iframe centré sur Haguiborim 68, Hadera, Israël.
  Aucun texte d'adresse affiché, aucun bouton Waze / Google Maps.
*/

export default function Location() {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Localisation</h2>
        </div>

        <div className="location-map fade-in fade-in-delay-1">
          <iframe
            src="https://maps.google.com/maps?q=Haguiborim+68+Hadera+Israel&output=embed&hl=fr&z=16"
            title="Localisation du Gan Israel Hadera"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      {/* Vague de transition vers la section Parrainage */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: 'block',
          width: '100%',
          height: '80px',
          marginTop: '4rem',
        }}
      >
        <path
          d="M0,20 C480,70 960,0 1440,40 L1440,80 L0,80 Z"
          fill="#0D47A1"
        />
      </svg>
    </section>
  )
}
