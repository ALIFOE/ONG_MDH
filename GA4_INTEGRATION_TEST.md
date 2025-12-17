# 🧪 Test d'Intégration GA4 - MDH International Togo

## ✅ Modifications Effectuées

### 1. **donation.html**
- ✅ Ajout du fichier `js/ga4-events.js` dans le `<head>`
- ✅ Ajout de `onclick="trackDonation(...)"` au bouton submit
- ✅ Ajout d'un event listener au formulaire pour capturer les soumissions

### 2. **contact.html**
- ✅ Ajout du fichier `js/ga4-events.js` dans le `<head>`
- ✅ Ajout de `onclick="trackContactForm(...)"` au bouton submit
- ✅ Ajout du suivi GA4 dans l'event listener du formulaire

### 3. **js/ga4-events.js**
- ✅ Fichier d'événements avancés déjà créé avec 10 fonctions de suivi

---

## 🧪 Comment Tester

### **Étape 1 : Ouvrir la Console Développeur**
1. Ouvrez votre site: `https://modehumain.org/donation` ou `https://modehumain.org/contact`
2. Appuyez sur `F12` pour ouvrir la console développeur
3. Allez dans l'onglet **Console**

### **Étape 2 : Tester la Donation**

**Test 1 - Page Donation (donation.html):**
```javascript
// Vérifier que GA4 est chargé
console.log(window.gtag);  // Devrait afficher la fonction gtag

// Vérifier que le fichier d'événements est chargé
console.log(typeof trackDonation);  // Devrait afficher "function"

// Effectuer un test d'événement manuel
trackDonation(50, 'test');  // Doit afficher dans la console
```

**Résultat attendu dans la Console:**
```
✅ Donation Tracked: Amount: 50€, Type: test
```

### **Étape 3 : Tester le Contact**

**Test 2 - Page Contact (contact.html):**
```javascript
// Vérifier que GA4 est chargé
console.log(window.gtag);  // Devrait afficher la fonction gtag

// Vérifier que le fichier d'événements est chargé
console.log(typeof trackContactForm);  // Devrait afficher "function"

// Effectuer un test d'événement manuel
trackContactForm(true, 'test');  // Doit afficher dans la console
```

**Résultat attendu dans la Console:**
```
✅ Contact Form Tracked: Submitted: true, Subject: test
```

---

## 🔍 Vérification dans Google Analytics

### **1. Vérifier les données en temps réel**

1. Allez sur https://analytics.google.com
2. Connectez-vous avec votre compte Google
3. Sélectionnez la propriété **MDH International Togo** (G-Z7HJ66X9Q0)
4. Allez dans: **Real-time** → **Vue d'ensemble**
5. Ouvrez votre site dans un nouvel onglet
6. Vous devriez voir **1 utilisateur actif** dans la section Real-time

### **2. Vérifier les événements personnalisés**

1. Dans le menu gauche, allez à: **Rapports** → **Temps réel** → **Événements**
2. Effectuez une action sur votre site (soumettez un formulaire)
3. Vous devriez voir l'événement apparaître en temps réel

### **3. Vérifier les conversions**

1. Allez à: **Rapports** → **Conversions**
2. Sélectionnez un événement de conversion (donation, contact_form)
3. Vous verrez le nombre de conversions

---

## 📊 Données qui Devraient Être Collectées

### **donation.html - Événement Donation**
- **Event:** `donation` ou `purchase`
- **Paramètres:**
  - `value`: montant du don (float)
  - `currency`: EUR
  - `donation_type`: ponctuel ou mensuel

### **contact.html - Événement Contact**
- **Event:** `contact_form` ou `form_submit`
- **Paramètres:**
  - `form_type`: contact
  - `subject`: sujet du contact (general, donation, volunteer, etc.)
  - `success`: true/false

---

## ⚠️ Dépannage

### **Problème: Je ne vois pas de GA4 dans la console**

**Solution:**
```javascript
// Rechargez la page (Ctrl + F5)
// Vérifiez dans l'onglet Network s'il y a une erreur
// Cherchez: gtag.js (doit être chargé)
```

### **Problème: trackDonation() n'existe pas**

**Solution:**
```javascript
// Vérifiez que js/ga4-events.js est bien chargé
// Allez dans l'onglet Network et cherchez ga4-events.js
// Vérifiez la taille: doit être ~5KB minimum
```

### **Problème: Les données n'apparaissent pas dans GA4**

**Solution:**
- Attendez 5-10 minutes (GA4 a besoin de temps pour traiter)
- Rafraîchissez la page dans Google Analytics
- Assurez-vous que vous utilisez le bon ID: G-Z7HJ66X9Q0
- Vérifiez que vous êtes connecté au bon compte Google

---

## 📈 Événements Disponibles dans js/ga4-events.js

| Fonction | Utilisation | Paramètres |
|----------|-------------|-----------|
| `trackDonation()` | Donation | amount, type |
| `trackContactForm()` | Contact | success, subject |
| `trackNewsletterSignup()` | Newsletter | success |
| `trackScrollDepth()` | Engagement | depth |
| `trackButtonClick()` | Boutons | button_name |
| `trackVideoEvent()` | Vidéos | video_id, action |
| `trackInternalLink()` | Navigation | link_name |
| `trackExternalLink()` | Sortie | link_url |
| `trackEngagementTime()` | Temps | time_ms |
| `trackPushNotificationInteraction()` | PWA | action |

---

## ✅ Checklist de Validation

- [ ] GA4 charge correctement (vérifier console: `gtag` existe)
- [ ] Les fichiers d'événements chargent (`trackDonation` existe)
- [ ] Les événements s'affichent en console lors du test
- [ ] Google Analytics reçoit les données (Real-time)
- [ ] Les rapports de conversion apparaissent après 24h
- [ ] Les événements apparaissent dans Rapports → Événements

---

## 📞 Support

Pour toute question sur l'intégration GA4:
1. Consultez [GA4_GUIDE.md](GA4_GUIDE.md)
2. Vérifiez les [Rapports GA4](https://analytics.google.com)
3. Contactez le support Google Analytics

**ID Propriété:** G-Z7HJ66X9Q0  
**URL:** https://modehumain.org
