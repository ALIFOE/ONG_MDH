# Guide de Démarrage Rapide - Vue.js 3

## 🎉 Transformation Réussie !

Votre site a été transformé en **Vue.js 3 avec Vite** - une architecture moderne et performante !

## ⚡ Démarrer en 30 secondes

### Étape 1 : Lancer le serveur de développement

Ouvrez un terminal PowerShell et exécutez :

```powershell
cd 'c:\Users\conce\Desktop\projet_MDH\ONG_MDH'
npm run dev
```

### Étape 2 : Accéder à l'application

Une fenêtre du navigateur s'ouvrira automatiquement sur `http://localhost:5173`

## 📝 Modifier le Contenu

Tous les contenus des pages se trouvent dans `src/pages/` avec l'extension `.vue`

### Exemple : Modifier la page d'accueil

1. Ouvrez `src/pages/Home.vue`
2. Modifiez le texte directement
3. **Sauvegardez** - Le site se met à jour automatiquement ! 🔄

## 🎨 Ajouter de nouvelles pages

### 1. Créer un nouveau fichier page

Par exemple, créez `src/pages/MonPage.vue` :

```vue
<template>
  <div>
    <section class="bg-gradient-to-r from-[#090e15] to-[#1a2332] text-white py-12">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl font-bold">Ma Nouvelle Page</h1>
      </div>
    </section>
    <!-- Votre contenu ici -->
  </div>
</template>

<script setup>
// Logique Vue ici
</script>
```

### 2. Ajouter la route dans `src/router/index.js`

Ajoutez dans la liste `routes` :

```javascript
{
  path: '/ma-page',
  name: 'MonPage',
  component: MonPage,
  meta: {
    title: 'Ma Nouvelle Page - MDH'
  }
}
```

### 3. Ajouter un lien dans la Navbar

Ouvrez `src/components/Navbar.vue` et ajoutez :

```html
<router-link to="/ma-page" class="nav-link">
  Ma Page
</router-link>
```

## 🎯 Structure Navbar & Footer

### Navbar (Navigation)
- **Fichier** : `src/components/Navbar.vue`
- **Gère** : Menu principal, menu mobile, bouton don
- **Réutilisable** : Apparaît sur toutes les pages automatiquement

### Footer (Pied de page)
- **Fichier** : `src/components/Footer.vue`
- **Contient** : Infos contact, liens, réseaux sociaux
- **Réutilisable** : Apparaît sur toutes les pages automatiquement

## 🎨 Personnaliser les Couleurs

Dans `src/assets/style.css`, modifiez :

```css
:root {
  --mdh-blue: #090e15;      /* Couleur principale */
  --mdh-yellow: #fbbf24;    /* Couleur d'accent */
}
```

## 📱 Utiliser les Classes Tailwind

L'application utilise **Tailwind CSS** :

```html
<!-- Texte centré -->
<div class="text-center">Contenu</div>

<!-- Espacements -->
<div class="p-6 mb-4">Contenu avec padding et marge</div>

<!-- Responsive -->
<div class="grid grid-cols-1 md:grid-cols-3">
  <!-- 1 colonne mobile, 3 colonnes desktop -->
</div>

<!-- Couleurs personnalisées -->
<button class="bg-mdh-blue text-mdh-yellow">Bouton</button>
```

## 🚀 Compiler pour Production

Quand vous êtes prêt à déployer :

```powershell
npm run build
```

Cela crée un dossier `dist/` optimisé prêt pour la production.

## 📂 Arborescence du Projet

```
ONG_MDH/
├── src/
│   ├── components/
│   │   ├── Navbar.vue
│   │   └── Footer.vue
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── Contact.vue
│   │   ├── Donation.vue
│   │   └── ... (toutes les autres pages)
│   ├── router/
│   │   └── index.js (gère les routes)
│   ├── assets/
│   │   ├── style.css
│   │   └── tailwind.css
│   ├── App.vue (composant principal)
│   └── main.js (point d'entrée)
├── index.html
├── vite.config.js
├── package.json
└── README_VUE.md (ce fichier)
```

## 🔗 Routes Disponibles

| Page | URL | Fichier |
|------|-----|---------|
| Accueil | `/` | `Home.vue` |
| L'Organisation | `/association` | `Association.vue` |
| Notre Équipe | `/notre-equipe` | `NotreEquipe.vue` |
| Actions | `/actions` | `Actions.vue` |
| Actualités | `/actualites` | `Actualites.vue` |
| École | `/ecole` | `Ecole.vue` |
| Contact | `/contact` | `Contact.vue` |
| Rejoindre | `/rejoindre` | `Rejoindre.vue` |
| Donation | `/donation` | `Donation.vue` |

## 💡 Astuces Utiles

### Activer le hot reload
C'est déjà activé ! Sauvegardez simplement vos fichiers `.vue` et voyez les changements en temps réel.

### Utiliser des variables réactives
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">Clics : {{ count }}</button>
</template>
```

### Conditionnel
```vue
<div v-if="isVisible">Visible</div>
<div v-else>Caché</div>
```

### Boucle
```vue
<ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
```

## 🆘 Problèmes Courants

### Port 5173 déjà utilisé
```powershell
# Utilisez un autre port
npm run dev -- --port 3000
```

### Import d'images non détecté
Les images doivent être dans `public/images/` :
```vue
<img src="/images/logo.png" alt="Logo">
```

### Styles Tailwind non appliqués
Assurez-vous d'utiliser les classes Tailwind directement dans le template.

## 🎓 Prochaines Étapes

1. **Personnalisez le contenu** des pages
2. **Ajoutez vos images** dans `public/images/`
3. **Modifiez les couleurs** si nécessaire
4. **Ajoutez des formulaires** avec validation
5. **Connectez votre API** pour les données dynamiques

## 📞 Besoin d'Aide ?

Consultez la [documentation officielle Vue 3](https://vuejs.org) pour plus de détails.

---

**Happy coding ! 🚀**
