# Gan Israel Hadera – Site Vitrine

Site one-page React/Vite pour le Gan Israel Hadera (communauté francophone de Hadera).

## 🚀 Lancer le projet en local

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur → http://localhost:5173

---

## 🏗️ Build pour la production

```bash
npm run build
```

Les fichiers générés se trouvent dans le dossier `dist/`.

Pour prévisualiser le build en local :
```bash
npm run preview
```

---

## 🌐 Déploiement

### Netlify (recommandé – gratuit)
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Cliquez sur "Add new site" → "Import an existing project"
3. Connectez votre dépôt Git (GitHub, GitLab…)
4. Configurez :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
5. Cliquez sur "Deploy site"

### Render
1. Créez un compte sur [render.com](https://render.com)
2. Nouveau service → "Static Site"
3. Connectez votre dépôt
4. Build command : `npm run build`
5. Publish directory : `dist`

---

## 📁 Structure du projet

```
gan-israel-hadera/
├── index.html                    ← HTML principal (SEO, OG tags, polices)
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                  ← Point d'entrée React
│   ├── App.jsx                   ← Assemblage de toutes les sections
│   ├── styles/
│   │   └── global.css            ← Design system complet (variables, layout, responsive)
│   ├── components/
│   │   ├── Navbar.jsx            ← Navigation sticky (desktop + hamburger mobile)
│   │   ├── Hero.jsx              ← Section principale + CTA + réseaux sociaux
│   │   ├── About.jsx             ← Qui sommes-nous ? (vidéo + texte + 3 arguments)
│   │   ├── Gallery.jsx           ← Carousel photos
│   │   ├── Program.jsx           ← Image du programme + lightbox zoom
│   │   ├── Pricing.jsx           ← Tarifs (avant/après 10/06) + liens
│   │   ├── Location.jsx          ← Google Maps
│   │   ├── Sponsor.jsx           ← Parrainez un enfant
│   │   ├── Footer.jsx            ← Pied de page
│   │   └── WhatsAppButton.jsx    ← Bulle WhatsApp flottante
│   └── assets/
│       ├── images/               ← Vos photos (voir IMAGES_README.md)
│       ├── logos/                ← Votre logo (logo.png, favicon.png)
│       └── IMAGES_README.md      ← Instructions pour ajouter vos assets
```

---

## ✅ Checklist avant mise en ligne

- [ ] Ajouter `logo.png` et `favicon.png` dans `src/assets/logos/`
- [ ] Ajouter les photos de galerie dans `src/assets/images/` et activer dans `Gallery.jsx`
- [ ] Ajouter l'image du programme et activer dans `Program.jsx`
- [ ] Configurer la vidéo dans `About.jsx` (YouTube ou fichier local)
- [ ] Remplir les tarifs dans `Pricing.jsx`
- [ ] Remplacer tous les `LIEN_..._ICI` par les vraies URLs
- [ ] Ajouter l'image Open Graph (`og-image.jpg`, 1200×630 px)
- [ ] Tester sur mobile, tablette, desktop
- [ ] Vérifier que le lien WhatsApp s'ouvre correctement

---

## 🎨 Personnalisation des couleurs

Toutes les couleurs se trouvent dans `src/styles/global.css` dans la section `:root`.
Modifiez les variables CSS pour adapter la palette à vos besoins.
