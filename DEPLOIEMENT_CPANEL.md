# 📋 Instructions de Déploiement sur cPanel

## 🔴 Problème Identifié
Votre site affiche une page blanche car la structure des fichiers sur le serveur n'est pas correcte.

## ✅ Solution

### Étape 1 : Préparer les fichiers
Avant d'uploader sur cPanel :
```bash
npm run build
```
Cela crée/met à jour le dossier `dist/` avec tous les fichiers compilés.

### Étape 2 : Supprimer le contenu actuel
Sur cPanel (File Manager) :
1. Entrez dans le dossier `public_html`
2. Supprimez les fichiers/dossiers existants :
   - ❌ Supprimez `index.html` (à la racine)
   - ❌ Supprimez le dossier `dist/` s'il existe
   - ✅ Gardez le `.htaccess` (ou remplacez-le par le nouveau)

### Étape 3 : Uploader les fichiers
1. Depuis le dossier `dist/` de votre projet local
2. **Uploadez TOUS les fichiers et dossiers du `dist/`** directement dans `public_html/`

La structure finale doit être :
```
public_html/
├── .htaccess              ← (Nouveau .htaccess à uploader)
├── index.html             ← (Du dossier dist/)
├── assets/                ← (Du dossier dist/)
│   ├── vendor-xxx.js
│   ├── index-xxx.js
│   ├── index-xxx.css
│   ├── logo_mdh-xxx.png
│   └── ...autres images
```

### Étape 4 : Remplacer le .htaccess
1. Dans cPanel File Manager, dans `public_html/`
2. Uploadez ou éditez le `.htaccess` avec le contenu fourni
3. Assurez-vous que le fichier est visible (cochez "Afficher les fichiers cachés" si nécessaire)

### Étape 5 : Tester
- Accédez à votre domaine : `https://modehumain.org/`
- Ouvrez la console (F12) pour vérifier :
  ✅ Pas d'erreur "Failed to load resource"
  ✅ Pas d'erreur MIME type
  ✅ Page s'affiche correctement

## 🔧 Points Clés

### Le .htaccess fait ceci :
- ✅ Redirige toutes les requêtes vers `index.html` (nécessaire pour Vue Router)
- ✅ Préserve l'accès aux fichiers réels (CSS, JS, images)
- ✅ Configure les bons types MIME
- ✅ Active la compression GZIP
- ✅ Configure le caching navigateur

### Commandes Git pour sauvegarder
```bash
cd c:\Users\conce\Desktop\projet_MDH\ONG_MDH
git add .
git commit -m "Configuration cPanel et .htaccess optimisé"
git push origin main
```

## ❌ Erreurs Communes

**Erreur : Page blanche + "Failed to load resource 404"**
→ Le `dist/` n'a pas été uploadé

**Erreur : JS/CSS ne chargent pas (MIME type text/html)**
→ Le `.htaccess` est mal configuré

**Erreur : Page blanche mais pas d'erreur console**
→ Vérifiez que `index.html` du `dist/` est bien à la racine

## 💡 Alternative : Sans .htaccess
Si le `.htaccess` ne fonctionne pas avec votre hébergement, contactez le support cPanel pour :
- Vérifier que `mod_rewrite` est activé
- Vérifier les permissions du fichier `.htaccess`

---
**Support** : Si les problèmes persistent, vérifiez les logs d'erreur cPanel
