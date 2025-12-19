# MDH International Togo - Application Vue.js 3

## 🎯 Vue d'ensemble

Cette application a été transformée en une **single-page application (SPA)** moderne utilisant **Vue 3**, **Vite** et **Vue Router**. L'architecture est organisée et maintainable avec une structure de composants réutilisables.

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Navbar.vue          # Barre de navigation (partagée)
│   └── Footer.vue          # Pied de page (partagé)
├── pages/
│   ├── Home.vue            # Page d'accueil
│   ├── Association.vue     # Page L'Organisation
│   ├── NotreEquipe.vue    # Page Notre Équipe
│   ├── Actions.vue         # Page Nos Actions
│   ├── Actualites.vue     # Page Actualités
│   ├── Ecole.vue          # Page Notre École
│   ├── Contact.vue        # Page Contact
│   ├── Rejoindre.vue      # Page Rejoindre-nous
│   ├── Donation.vue       # Page Faire un don
│   └── NotFound.vue       # Page 404
├── router/
│   └── index.js           # Configuration Vue Router
├── assets/
│   ├── style.css          # Styles personnalisés
│   └── tailwind.css       # Configuration Tailwind
├── App.vue                # Composant racine
└── main.js                # Point d'entrée de l'application
```

## 🚀 Démarrage Rapide

### Installation

Les dépendances ont déjà été installées avec :
```bash
npm install
```

### Mode Développement

Pour lancer le serveur de développement avec rechargement en temps réel :
```bash
npm run dev
```

Visitez `http://localhost:5173` dans votre navigateur.

### Build pour Production

Pour créer une version optimisée pour la production :
```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`.

### Aperçu de la Version Production

Pour tester la version compilée localement :
```bash
npm run preview
```

## 🎨 Fonctionnalités

### ✅ Navbar Réutilisable (Navbar.vue)
- Menu de navigation responsive
- Menu déroulant pour "L'Organisation"
- Menu mobile avec burger icon
- Bouton "Faire un don" toujours visible
- Lien du logo vers l'accueil

### ✅ Footer Réutilisable (Footer.vue)
- Section "À Propos"
- Liens d'accès rapide
- Informations de contact
- Liens réseaux sociaux
- Mentions légales

### ✅ Pages Créées
- **Home** - Accueil avec sections principales
- **Association** - Présentation de l'organisation
- **NotreEquipe** - Équipe et bénévoles
- **Actions** - Domaines d'intervention
- **Actualites** - Actualités et news
- **Ecole** - Présentation de l'école
- **Contact** - Formulaire de contact
- **Rejoindre** - Formulaire d'engagement bénévole
- **Donation** - Système de dons
- **NotFound** - Page 404

### ✅ Vue Router
- Routage dynamique entre les pages
- Gestion automatique du titre de la page
- Scroll vers le haut au changement de page
- Route 404 pour les pages non trouvées

## 🎨 Styles

### Couleurs Principales
- **Bleu MDH** : `#090e15` (navy)
- **Jaune MDH** : `#fbbf24` (amber)

### Tailwind CSS
L'application utilise **Tailwind CSS** pour le styling. Les classes personnalisées incluent :
- `btn-primary` - Boutons principaux
- `btn-secondary` - Boutons secondaires
- `card` - Cartes de contenu
- `nav-link` - Liens de navigation avec animation

## 📝 Contenu des Pages

Chaque page a été créée avec du contenu fictif. Vous pouvez modifier le contenu directement dans les fichiers `.vue` correspondants.

### Exemple de Modification de Contenu

Pour modifier le texte d'accueil :

1. Ouvrez `src/pages/Home.vue`
2. Modifiez le contenu HTML
3. Sauvegardez et voyez les changements en temps réel !

## 🔧 Configuration

### vite.config.js
Configuration du serveur de développement et du build

### tailwind.config.js
Configuration Tailwind avec les couleurs personnalisées

### postcss.config.js
Configuration PostCSS pour Tailwind et Autoprefixer

## 📱 Responsive Design

L'application est entièrement responsive :
- ✅ Mobile (< 768px)
- ✅ Tablette (768px - 1024px)
- ✅ Desktop (> 1024px)

## 🔐 Sécurité

- CSP (Content Security Policy) configurée
- HTTPS recommandé en production
- Validation des formulaires côté client

## 📊 SEO

Chaque page a un titre et une description uniques pour le SEO.

## 🚀 Déploiement

La structure prête à être déployée sur :
- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**
- **Tout serveur Node.js**

## 📦 Dépendances Principales

```json
{
  "vue": "^3.4.21",
  "vue-router": "^4.2.5",
  "tailwindcss": "^3.3.2",
  "@vitejs/plugin-vue": "^5.0.4",
  "vite": "^5.0.8"
}
```

## 🐛 Dépannage

### Port déjà utilisé
Si le port 5173 est occupé, modifiez `vite.config.js` :
```javascript
server: {
  port: 3000, // Changez le port ici
}
```

### Images non visibles
Assurez-vous que les images sont dans le dossier `public/images/` et que les chemins sont corrects.

## 📚 Ressources Utiles

- [Vue 3 Documentation](https://vuejs.org)
- [Vue Router Documentation](https://router.vuejs.org)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 📞 Support

Pour tout problème ou question, consultez la documentation Vue officielle.

---

**Créé avec ❤️ pour MDH International Togo**
