# 📊 GUIDE SEO - MDH International Togo

## ✅ Optimisations SEO Appliquées

### 1. Meta Tags Dynamiques
- ✅ `MetaTags.vue` gère automatiquement les meta tags par page
- ✅ Title, description, Open Graph, Twitter Card
- ✅ Canonical URLs générées automatiquement

### 2. Sitemap et Robots
- ✅ `sitemap.xml` avec toutes les pages (36+ URLs)
- ✅ `robots.txt` correctement configuré
- ✅ Priorités et fréquences optimisées

### 3. Structured Data
- ✅ Schema.org JSON-LD pour l'organisation
- ✅ Rich snippets Google activés

### 4. Performance (Core Web Vitals)
- ✅ Compression Gzip activée
- ✅ Images optimisées (formats modernes)
- ✅ Code minifié en production
- ✅ Lazy loading sur les images

## 📝 Checklist : Mettre à Jour les Meta Tags par Page

Chaque page doit avoir ses meta tags personnalisés dans le router :

```javascript
// src/router/index.js

{
  path: '/association',
  name: 'Association',
  component: Association,
  meta: {
    title: 'L\'Organisation - MDH International Togo',
    description: 'En savoir plus sur MDH International Togo, ses missions et ses valeurs.',
    image: '/ONG_MDH/assets/images/logo_mdh.png',
    keywords: 'association, ONG, développement humain, Togo'
  }
}
```

## 🖼️ Ajouter des Alt Text aux Images

**IMPORTANT** : Toutes les images DOIVENT avoir un `alt` descriptif :

```vue
<img 
  src="image.jpg" 
  alt="Description détaillée de l'image pour le SEO"
  loading="lazy"
>
```

Exemples :
```vue
<!-- ❌ Mauvais -->
<img src="photo.jpg" alt="photo">

<!-- ✅ Bon -->
<img src="photo.jpg" alt="Classe d'enfants pendant un cours de soutien scolaire à MDH">
```

## 🔍 Soumettre votre Site aux Moteurs de Recherche

1. **Google Search Console**
   - Aller sur [search.google.com/search-console](https://search.google.com/search-console)
   - Ajouter votre propriété : `https://modehumain.org/ONG_MDH/`
   - Soumettre le sitemap : `/sitemap.xml`
   - Vérifier les erreurs d'indexation

2. **Bing Webmaster Tools**
   - Aller sur [bing.com/webmasters](https://www.bing.com/webmasters)
   - Ajouter votre site
   - Soumettre le sitemap

## 📈 Mots-clés Recommandés par Page

### Accueil
- développement humain durable
- ONG Togo
- éducation santé développement

### Association
- MDH International Togo
- qui sommes-nous
- nos valeurs

### Actualités
- actualités ONG
- projets humanitaires
- MDH Togo actualités

### Donation
- soutenir une ONG
- donation Togo
- faire un don

### Actions
- projets sociaux
- programmes éducatifs
- développement économique

## 🎯 Optimisations Futures Recommandées

### 1. Schema.org Avancé
Ajouter des schémas pour :
- `LocalBusiness` (localisation Togo)
- `Event` (si vous avez des événements)
- `NewsArticle` (pour les actualités)

```javascript
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MDH International Togo",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "Lomé",
    "addressCountry": "TG"
  },
  "telephone": "+228...",
  "areaServed": "TG"
}
```

### 2. Blog/Actualités SEO
- Publier régulièrement des articles (1x/semaine min)
- Utiliser les mots-clés long-tail
- Interne linking entre articles

### 3. Backlinks
- Chercher des partenaires pour des liens
- Publications dans des annuaires ONG
- Guest posts sur des blogs humanitaires

### 4. AMP Pages (Optionnel)
- Augmente la visibilité sur mobile
- Améliore la vitesse

### 5. hreflang Tags
Si le site supporte plusieurs langues :
```html
<link rel="alternate" hreflang="en" href="https://modehumain.org/en/">
<link rel="alternate" hreflang="fr" href="https://modehumain.org/">
```

## 📊 Outils de Vérification SEO

### Gratuit
- [Google PageSpeed Insights](https://pagespeed.web.dev) - Performance
- [SEMrush SEO Audit](https://www.semrush.com/analytics/seo-audit) - Audit gratuit
- [Ubersuggest](https://ubersuggest.com) - Mots-clés et analyse
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/) - Crawling local

### Payant
- [Ahrefs](https://ahrefs.com) - Backlinks et analyse concurrence
- [SEMrush](https://www.semrush.com) - Suite complète
- [Moz Pro](https://moz.com/products/pro) - Ranking tracking

## 🚀 Roadmap SEO (3 Mois)

### Mois 1
- ✅ Soumettre sitemap à Google Search Console
- ✅ Ajouter schema.org JSON-LD
- ✅ Optimiser les images (compression)
- ✅ Améliorer les titles/descriptions

### Mois 2
- Publier 4 articles de blog optimisés SEO
- Ajouter des backlinks (partenariats)
- Améliorer Core Web Vitals
- Ajouter les alt text manquants aux images

### Mois 3
- Analyser les résultats Google Search Console
- Optimiser les pages avec faible CTR
- Ajouter des FAQ schema
- Planifier le contenu Q4

---

**Dernière mise à jour :** 21 décembre 2025
**Responsable :** Équipe Développement MDH
