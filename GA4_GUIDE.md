# 📊 Google Analytics 4 - Guide de Configuration

## ✅ Installation Complètée

Google Analytics 4 (GA4) a été ajouté à **toutes les 11 pages** de votre site.

### ID de Suivi
```
ID Propriété: G-Z7HJ66X9Q0
Domaine: https://modehumain.org
```

---

## 🚀 Configuration Initiale dans Google Analytics

### Étape 1: Accéder à Google Analytics
1. Allez sur: https://analytics.google.com
2. Connectez-vous avec votre compte Google
3. Sélectionnez votre propriété: **MDH International Togo**

### Étape 2: Vérifier le Suivi
1. Allez dans **Admin** → **Propriétés** → **Paramètres des données**
2. Vérifiez que l'ID de mesure est: `G-Z7HJ66X9Q0`
3. Vérifiez que le statut est **Actif**

### Étape 3: Vérifier la Collecte de Données
1. Ouvrez votre site: https://modehumain.org
2. Allez dans **Real-time** → **Vue d'ensemble**
3. Vous devriez voir **1 utilisateur actif** (vous-même)

---

## 📈 Événements à Configurer

### Events Recommandés

#### 1. **Donation Conversion** (Le Plus Important!)
```javascript
gtag('event', 'donation', {
  'event_category': 'conversion',
  'event_label': 'donation_button_clicked',
  'value': 100,
  'currency': 'XOF'
});
```

**À ajouter dans:** `donation.html` sur le bouton "Faire un don"

#### 2. **Page Views** (Automatique)
- ✅ Déjà configuré
- Suivra automatiquement chaque page visitée

#### 3. **Scroll Events** (Engagement)
```javascript
gtag('event', 'scroll', {
  'event_category': 'engagement',
  'value': 100
});
```

#### 4. **Form Submissions** (Contacts)
```javascript
gtag('event', 'contact_form', {
  'event_category': 'conversion',
  'event_label': 'contact_form_submitted'
});
```

**À ajouter dans:** `contact.html` après soumission du formulaire

#### 5. **Newsletter Signup**
```javascript
gtag('event', 'newsletter_signup', {
  'event_category': 'conversion',
  'event_label': 'newsletter_signed_up'
});
```

#### 6. **Video Engagement** (si vidéos)
```javascript
gtag('event', 'video_view', {
  'event_category': 'engagement',
  'event_label': 'video_title',
  'value': 10
});
```

#### 7. **Social Share**
```javascript
gtag('event', 'share', {
  'event_category': 'engagement',
  'event_label': 'facebook',
  'method': 'facebook'
});
```

---

## 🎯 Configurations Recommandées

### 1. Créer des Conversions
1. Allez dans **Conversions**
2. Cliquez **+ Nouvelle conversion**
3. Créez une conversion pour chaque événement clé

#### Conversions à Créer:
- ✅ Donation (Très Importante!)
- ✅ Contact Form Submission
- ✅ Newsletter Signup
- ✅ Participation Event

### 2. Créer des Segments
1. Allez dans **Segments**
2. Créez segments pour:
   - Visiteurs de la page donation
   - Visiteurs de la page contact
   - Nouveaux visiteurs
   - Visiteurs revenant

### 3. Audiences Personnalisées
1. Allez dans **Audiences**
2. Créez audiences pour:
   - Visiteurs intéressés par les dons
   - Visiteurs engagés (2+ pages)
   - Visiteurs directs

---

## 📊 Rapports à Consulter Régulièrement

### Daily (Quotidien)
- **Real-time** → Vue d'ensemble
- Voir les utilisateurs actifs en ce moment
- Voir les pages visitées

### Weekly (Hebdomadaire)
- **Rapports** → **Utilisateurs** → Vue d'ensemble
- Nombre total de sessions
- Taux de rebond
- Durée moyenne de session

### Monthly (Mensuel)
- **Rapports** → **Pages et écrans**
  - Quelles pages sont les plus visitées?
  - Quel est le taux de conversion?
- **Rapports** → **Conversions**
  - Nombre total de conversions
  - Taux de conversion

---

## 🔗 Lier avec Search Console

### Pour Améliorateur les Données

1. Allez dans **Admin** → **Propriétés** → **Flux Google**
2. Cliquez sur votre flux Web
3. Cliquez **Admin** → **Liens Search Console**
4. Cliquez **Ajouter un lien** 
5. Sélectionnez votre propriété Search Console
6. Confirmez

---

## 💡 Conseils d'Optimisation

### Meilleures Pratiques
✅ Vérifier les données quotidiennement la première semaine
✅ Créer des alertes pour les anomalies
✅ Segmenter les données par source de trafic
✅ Analyser les comportements des convertisseurs
✅ Tester différentes versions de CTA
✅ Exporter les rapports mensuels

### À Éviter
❌ Ajouter votre propre trafic (utiliser "Exclure le trafic" en Admin)
❌ Tracker les mêmes événements deux fois
❌ Surcharger avec trop d'événements custom
❌ Ignorer les données de performance lentes
❌ Ne pas mettre à jour les objectifs

---

## 🎓 Utilisateurs et Permissions

### Ajouter des Utilisateurs
1. Allez dans **Admin** → **Propriétés** → **Accès à la propriété**
2. Cliquez **+**
3. Entrez l'email de l'utilisateur
4. Sélectionnez le rôle:
   - **Administrateur** - Accès complet
   - **Éditeur** - Peut modifier rapports
   - **Analyste** - Lecture seule

---

## 🔍 Dépannage

### GA4 ne Suit pas les Données?

#### 1. Vérifier l'Installation
- Ouvrez votre site avec DevTools (F12)
- Allez dans **Console**
- Tapez: `window.gtag`
- Vous devriez voir une fonction

#### 2. Vérifier Google Tag Manager
```
https://www.google.com/analytics/web/
→ Propriétés → Balises Google → Vérifier l'installation
```

#### 3. Utiliser le Débogueur Google Analytics
```
https://chrome.google.com/webstore
Installer: Google Analytics Debugger
```

#### 4. Vérifier Après 24-48h
- Les données peuvent prendre 24-48h à apparaître
- Consultez **Real-time** pour les données immédiates

---

## 📱 Rapports Mobiles

### Mobiles GA4 App
1. Téléchargez: **Google Analytics app**
2. Connectez-vous avec votre compte
3. Consultez les rapports en déplacement
4. Recevez les alertes

### Alertes
1. Allez dans **Alertes personnalisées**
2. Créez des alertes pour:
   - Trafic très faible/élevé
   - Taux de conversion anormal
   - Pages avec erreurs

---

## 📊 Tableau de Bord Personnalisé

### Créer un Dashboard Complet

Allez dans **Tableaux de bord** → **+ Nouveau tableau de bord**

Ajouter les éléments suivants:
1. **Scorecard** - Utilisateurs (aujourd'hui)
2. **Scorecard** - Conversions
3. **Graphique chronologique** - Utilisateurs vs Conversions
4. **Tableau** - Pages les plus visitées
5. **Graphique en camembert** - Sources de trafic
6. **Graphique chronologique** - Taux de rebond

---

## 🎯 Objectifs Mensuels

| Objectif | Cible | Délai |
|----------|-------|-------|
| Utilisateurs | +50/mois | 1 mois |
| Sessions | +100/mois | 1 mois |
| Taux de rebond | < 60% | 2 mois |
| Durée moyenne | > 2 min | 2 mois |
| Conversions dons | ≥ 5/mois | 3 mois |
| Taux de conversion | ≥ 1% | 3 mois |

---

## 🔗 Ressources Utiles

- **Google Analytics Academy**: https://analytics.google.academy/
- **Analytics Help**: https://support.google.com/analytics
- **GA4 Setup Guide**: https://support.google.com/analytics/answer/10089681
- **Event Tracking**: https://support.google.com/analytics/answer/9216061
- **Conversions**: https://support.google.com/analytics/answer/9267568

---

## ✨ Résumé

✅ GA4 installé sur **11 pages**
✅ ID: **G-Z7HJ66X9Q0**
✅ Prêt à collecter les données
✅ Real-time actif

**Prochaine étape:** Vérifier dans 24h que les données arrivent sur analytics.google.com

---

**Dernière mise à jour:** 17 décembre 2025
**Statut:** 🟢 Actif et Configuré
