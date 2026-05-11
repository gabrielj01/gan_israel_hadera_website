/*
  Sponsor.jsx – Parrainez un enfant
  Texte intégral issu du PDF.
  Remplacez LIEN_PARRAINAGE_ICI par l'URL du formulaire de parrainage.
*/

export default function Sponsor() {
  return (
    <section id="sponsor" className="sponsor">
      <div className="container">

        <div className="section-header fade-in">
          <h2 className="section-title">Parrainez un enfant</h2>
        </div>

        <p className="sponsor-text fade-in fade-in-delay-1">
          Nous sollicitons votre aide pour offrir des vacances inoubliables à des enfants dans le
          besoin. Notre centre de loisirs accueille chaque année des dizaines d'enfants qui
          n'ont pas la chance de partir en vacances. En faisant un don, vous contribuez à offrir
          une expérience unique à ces enfants, qui pourront s'amuser, se divertir et se créer des
          souvenirs inoubliables. Avec votre aide, nous pourrons offrir des vacances à des
          enfants qui n'en ont peut-être jamais eu la possibilité. Merci pour votre soutien, et
          n'hésitez pas à partager notre cause auprès de votre entourage.
        </p>

        <div className="fade-in fade-in-delay-2">
          <a
            href="LIEN_PARRAINAGE_ICI"
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-btn"
            aria-label="Je parraine un enfant – accéder au formulaire de don"
          >
            💛 Je parraine un enfant
          </a>
        </div>

      </div>
    </section>
  )
}
