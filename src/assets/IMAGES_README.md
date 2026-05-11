# Images – Gan Israel Hadera

## 📁 Structure attendue

```
src/assets/
├── logos/
│   ├── logo.png          ← Logo principal (affiché dans Navbar, Hero, Footer)
│   └── favicon.png       ← Favicon (affiché dans l'onglet du navigateur)
│
└── images/
    ├── gallery-1.jpg     ← Photo galerie 1
    ├── gallery-2.jpg     ← Photo galerie 2
    ├── gallery-3.jpg     ← Photo galerie 3
    ├── gallery-4.jpg     ← Photo galerie 4
    ├── gallery-5.jpg     ← Photo galerie 5
    ├── gallery-6.jpg     ← Photo galerie 6 (optionnel)
    ├── program.jpg       ← Image du programme hebdomadaire
    ├── og-image.jpg      ← Image de partage WhatsApp/réseaux (1200×630 px recommandé)
    └── video-poster.jpg  ← Miniature de la vidéo (optionnel)
```

## 🔧 Activation des images

### Logo
Le logo est déjà importé dans : `Navbar.jsx`, `Hero.jsx`, `Footer.jsx`
→ Rien à modifier si vous nommez votre fichier `logo.png`

### Galerie
Ouvrez `Gallery.jsx` et :
1. Décommentez les imports en haut du fichier
2. Remplacez la liste `SLIDES` par les objets avec les imports réels

### Programme
Ouvrez `Program.jsx` et :
1. Décommentez la ligne `import programImg from '../assets/images/program.jpg'`
2. Remplacez `const PROGRAM_IMG = null` par `const PROGRAM_IMG = programImg`

### Vidéo
Ouvrez `About.jsx` et choisissez :
- **Option A** : Décommentez le bloc `<iframe>` et collez votre lien YouTube embed
- **Option B** : Décommentez le bloc `<video>` si vous avez un fichier vidéo local

## 🔗 Liens à compléter

Dans les composants, recherchez et remplacez :
- `LIEN_FACEBOOK_ICI` → URL de votre page Facebook
- `LIEN_INSTAGRAM_ICI` → URL de votre profil Instagram
- `LIEN_FACEBOOK_COMMUNAUTE_ICI` → URL Facebook de la communauté
- `LIEN_INSTAGRAM_COMMUNAUTE_ICI` → URL Instagram de la communauté
- `LIEN_REGLEMENT_INTERIEUR_ICI` → URL du règlement intérieur
- `LIEN_PAIEMENT_ICI` → URL du formulaire de paiement
- `LIEN_PARRAINAGE_ICI` → URL du formulaire de parrainage

## 💰 Tarifs

Dans `Pricing.jsx`, remplacez les `[Formule]` et `[Tarif]` par vos vraies données.
