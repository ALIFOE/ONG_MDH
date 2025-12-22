# 🔒 POLITIQUE DE SÉCURITÉ - MDH International Togo

## Améliorations de Sécurité Appliquées

### 1. En-têtes de Sécurité HTTP
- ✅ **X-Frame-Options: SAMEORIGIN** - Prévention du clickjacking
- ✅ **X-Content-Type-Options: nosniff** - Prévention du MIME sniffing
- ✅ **X-XSS-Protection: 1; mode=block** - Protection XSS
- ✅ **Content-Security-Policy** - Politique de sécurité du contenu restrictive
- ✅ **Referrer-Policy** - Contrôle des informations de référent
- ✅ **HTTPS Obligatoire** - Redirection automatique HTTP → HTTPS

### 2. Protection des Fichiers Sensibles
- ✅ Interdiction d'accès aux fichiers `.env`, `.json`, `.lock`
- ✅ Accès bloqué aux répertoires `.git` et `node_modules`
- ✅ Suppression des headers `Server` et `X-Powered-By` (disclosure)

### 3. Performance & Caching
- ✅ Compression Gzip activée pour tous les fichiers texte et scripts
- ✅ Cache-Control optimisé :
  - HTML : 1 heure
  - CSS/JS : 1 mois
  - Images : 1 année
  - Fonts : 1 année

### 4. Configuration de Développement Sécurisée
- ✅ Host restreint à `127.0.0.1` (localhost uniquement)
- ✅ Strict Port Mode activé
- ✅ Sourcemaps désactivés en production (`sourcemap: false`)
- ✅ Code minifié en production

### 5. Gestion des Variables d'Environnement
- ✅ Fichier `.env.example` créé pour les variables de configuration
- ✅ `.gitignore` renforcé pour empêcher les fuites de secrets
- ✅ Variables sensibles (clés API, emails) externalisées

### 6. Routage Sécurisé
- ✅ Redirection SPA (.htaccess) configurée correctement
- ✅ Routes non existantes redirigées vers `/ONG_MDH/`
- ✅ Pas d'exposition de fichiers système

### 7. Suppression des Dépendances Inutiles
- ⚠️ `express`, `helmet`, `body-parser` sont nécessaires ?
  - Si non utilisés : `npm uninstall express helmet body-parser compression express-rate-limit`
  - Recommandé pour une SPA : garder uniquement `vue`, `vue-router`

## Bonnes Pratiques Recommandées

### Avant le Déploiement
```bash
# Vérifier qu'aucun secret n'est commité
git log --all --full-history --grep="password\|secret\|key\|token"

# Exécuter npm audit
npm audit fix

# Mettre à jour les dépendances
npm update
```

### Contrôle d'Accès à cPanel
- ✅ Activer 2FA/MFA sur votre compte cPanel
- ✅ Utiliser FTP/SFTP plutôt que HTTP upload si possible
- ✅ Modifier les permissions des fichiers :
  - Fichiers : `644`
  - Répertoires : `755`
  - `.htaccess` : `644`

### Surveillance
- Activer les logs d'accès sur cPanel
- Vérifier régulièrement les modifications de fichiers
- Monitorer les erreurs 403/404 inhabituelles

### Mises à Jour Régulières
```bash
npm update  # Mettre à jour les dépendances mineure
npm audit fix  # Corriger les vulnérabilités
```

## Vérification de la Sécurité

Testez votre configuration :
- [securityheaders.com](https://securityheaders.com) - Vérifier vos headers
- [csp-evaluator.withgoogle.com](https://csp-evaluator.withgoogle.com) - Tester votre CSP
- [lighthouse.dev](https://lighthouse.dev) - Audit complet du site

## Rapport de Sécurité

Pour signaler une vulnérabilité : **security@modehumain.org**
(À créer sur votre hosting)

---

**Dernière mise à jour :** 21 décembre 2025
**Appliqué sur :** ONG_MDH (Vue.js SPA)
