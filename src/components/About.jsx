/*
  About.jsx – "Qui sommes-nous ?"
  Contenu : vidéo présentative + texte PDF + 3 arguments
*/

import videoPresentation from "../assets/videos/video-presentation.mp4";
import videoPoster from "../assets/images/video-poster.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        {/* Section title */}
        <div className="section-header fade-in">
          <h2 className="section-title">Qui sommes-nous&nbsp;?</h2>
        </div>

        {/* Presentation video */}
        <div className="about-video-wrapper fade-in fade-in-delay-1">
          <video
            controls
            preload="metadata"
            poster={videoPoster}
            className="about-video"
          >
            <source
              src={videoPresentation}
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>

        {/* Presentation text */}
        <div className="about-text fade-in fade-in-delay-2">
          <p>
            Le Gan Israël est un centre aéré fondé par le Rabbi il y a plus de 60 ans. Depuis, ce
            mouvement a connu un développement fulgurant et ce sont aujourd'hui des milliers de
            centres qui fonctionnent partout à travers le monde.
          </p>
          <p>
            Le Gan Israël Hadera est ouvert durant les différentes périodes de vacances scolaires, et
            propose aux enfants des programmes ludiques, sportifs et éducatifs, dans une atmosphère
            chaleureuse et amicale. Ce programme s'inscrit dans la continuité des actions entreprises par
            le Beth Habad de la Jeunesse de Hadera, et l'on y retrouve le même état d'esprit&nbsp;:
            dévouement, investissement total, ahavat Israël sans limite pour chaque enfant considéré
            comme un véritable diamant, à l'instar du Baal Chem Tov.
          </p>
          <p>
            C'est un formidable moment d'épanouissement et de construction pour vos enfants.
            Nos animateurs, les prennent en charge dès l'âge de 4 ans et jusqu'aux ados, avec un
            enthousiasme et un dynamisme afin de devoiler le potentiel de chaque Nechama.
          </p>
          <p>
            Nombreux sont les enfants qui attendent toute l'année avec impatience ce merveilleux
            moment tant pour les activités extraordinaires qu'il offre que par son ambiance chaleureuse.
          </p>
          <p>
            <strong>Offrez le meilleur des vacances à vos enfants.</strong>
          </p>
        </div>

        {/* Why choose Gan Israel Hadera */}
        <div className="about-cards">
          <div className="about-card fade-in fade-in-delay-1">
            <span className="about-card-icon">⭐</span>
            <h3>Des vacances qui ont du sens</h3>
          </div>

          <div className="about-card fade-in fade-in-delay-2">
            <span className="about-card-icon">🎡</span>
            <h3>Des activités et sorties de folies</h3>
          </div>

          <div className="about-card fade-in fade-in-delay-3">
            <span className="about-card-icon">🎉</span>
            <h3>Une équipe dynamique qui sait mettre de l'ambiance</h3>
          </div>
        </div>

      </div>
    </section>
  );
}