/**
 * Google Analytics 4 - Événements Avancés
 * À intégrer dans vos pages HTML
 */

// ==========================================
// 1. DONATION EVENT (Page: donation.html)
// ==========================================

// Ajouter ce code quand l'utilisateur clique sur "Faire un don"
function trackDonation(amount = 0, method = 'paydunya') {
  gtag('event', 'donation', {
    'event_category': 'conversion',
    'event_label': 'donation_' + method,
    'value': amount,
    'currency': 'XOF',
    'transaction_id': 'donation_' + new Date().getTime(),
    'method': method
  });
  console.log('✅ Donation tracked:', { amount, method });
}

// Exemple: Ajouter à un bouton
// <button onclick="trackDonation(10000, 'paydunya')">Faire un don</button>

// ==========================================
// 2. CONTACT FORM SUBMISSION (contact.html)
// ==========================================

function trackContactForm(success = true, subject = 'general') {
  gtag('event', 'form_submit', {
    'event_category': 'conversion',
    'event_label': 'contact_form_' + subject,
    'success': success,
    'form_name': 'contact_form'
  });
  console.log('✅ Contact form tracked:', { success, subject });
}

// Exemple: Dans votre événement onsubmit du formulaire
// form.addEventListener('submit', (e) => {
//   trackContactForm(true, 'contact');
// });

// ==========================================
// 3. NEWSLETTER SIGNUP (rejoindre.html)
// ==========================================

function trackNewsletterSignup(email_provided = false) {
  gtag('event', 'sign_up', {
    'event_category': 'conversion',
    'event_label': 'newsletter_signup',
    'method': 'email',
    'email_provided': email_provided
  });
  console.log('✅ Newsletter signup tracked');
}

// ==========================================
// 4. PAGE ENGAGEMENT (toutes les pages)
// ==========================================

// Tracker quand l'utilisateur scroule au-delà de 50%
function trackScrollDepth() {
  let scrolled = false;
  
  window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage > 50 && !scrolled) {
      scrolled = true;
      gtag('event', 'page_engagement', {
        'event_category': 'engagement',
        'event_label': 'scroll_50_percent',
        'value': 50
      });
      console.log('✅ Scroll depth 50% tracked');
    }
  });
}

// Appeler au chargement de la page
document.addEventListener('DOMContentLoaded', trackScrollDepth);

// ==========================================
// 5. CLICK ON IMPORTANT BUTTONS
// ==========================================

function trackButtonClick(buttonName) {
  gtag('event', 'button_click', {
    'event_category': 'engagement',
    'event_label': 'button_' + buttonName,
    'button_name': buttonName
  });
  console.log('✅ Button click tracked:', buttonName);
}

// Ajouter aux boutons importants:
// Donation: <button onclick="trackButtonClick('donation')">Faire un don</button>
// Contact: <button onclick="trackButtonClick('contact')">Nous contacter</button>
// Rejoindre: <button onclick="trackButtonClick('join')">Rejoindre-nous</button>

// ==========================================
// 6. VIDEO ENGAGEMENT (si vidéos présentes)
// ==========================================

function trackVideoEvent(videoTitle, action = 'play', duration = 0) {
  gtag('event', 'video_' + action, {
    'event_category': 'engagement',
    'event_label': 'video_' + videoTitle.toLowerCase().replace(/\s+/g, '_'),
    'video_title': videoTitle,
    'video_duration': duration
  });
  console.log('✅ Video event tracked:', { videoTitle, action });
}

// Exemple pour initialiser le tracking vidéo:
// const video = document.querySelector('video');
// if (video) {
//   video.addEventListener('play', () => trackVideoEvent('Mon Video', 'play'));
//   video.addEventListener('pause', () => trackVideoEvent('Mon Video', 'pause'));
//   video.addEventListener('ended', () => trackVideoEvent('Mon Video', 'complete'));
// }

// ==========================================
// 7. INTERNAL LINK CLICKS
// ==========================================

function trackInternalLink(linkName, linkUrl) {
  gtag('event', 'internal_link_click', {
    'event_category': 'navigation',
    'event_label': linkName,
    'link_url': linkUrl,
    'link_domain': window.location.hostname
  });
  console.log('✅ Internal link tracked:', { linkName, linkUrl });
}

// ==========================================
// 8. EXTERNAL LINK CLICKS
// ==========================================

function trackExternalLink(linkName, linkUrl) {
  gtag('event', 'external_link_click', {
    'event_category': 'engagement',
    'event_label': linkName,
    'link_url': linkUrl,
    'outbound': true
  });
  console.log('✅ External link tracked:', { linkName, linkUrl });
}

// ==========================================
// 9. USER ENGAGEMENT TIME
// ==========================================

function trackEngagementTime() {
  let engagementTime = 0;
  
  const interval = setInterval(() => {
    engagementTime++;
    
    // Log tous les 30 secondes
    if (engagementTime % 30 === 0) {
      gtag('event', 'user_engagement', {
        'event_category': 'engagement',
        'event_label': 'time_on_page_' + Math.floor(engagementTime / 60) + 'm',
        'engagement_time_msec': engagementTime * 1000,
        'session_engaged': 'true'
      });
    }
  }, 1000);
  
  // Arrêter après 30 minutes
  setTimeout(() => clearInterval(interval), 30 * 60 * 1000);
}

document.addEventListener('DOMContentLoaded', trackEngagementTime);

// ==========================================
// 10. PUSH NOTIFICATION (PWA)
// ==========================================

function trackPushNotificationInteraction(action = 'click') {
  gtag('event', 'push_notification_' + action, {
    'event_category': 'engagement',
    'event_label': 'pwa_notification_' + action,
    'notification_type': 'pwa'
  });
  console.log('✅ Push notification tracked:', action);
}

// ==========================================
// INITIALIZATION
// ==========================================

console.log('✅ Google Analytics 4 - Événements Avancés Chargés');
console.log('ID Propriété: G-Z7HJ66X9Q0');
console.log('Domaine: modehumain.org');
