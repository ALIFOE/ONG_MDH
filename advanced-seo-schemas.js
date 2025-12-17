/**
 * Structured Data Schema Avancés pour MDH International Togo
 * À intégrer dans les pages HTML
 */

// Schema pour les Articles de Blog (à utiliser dans actualites.html)
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "[Titre de l'article]",
    "image": "[URL de l'image]",
    "datePublished": "[YYYY-MM-DD]",
    "dateModified": "[YYYY-MM-DD]",
    "author": {
        "@type": "Organization",
        "name": "MDH International Togo",
        "url": "https://modehumain.org"
    },
    "publisher": {
        "@type": "Organization",
        "name": "MDH International Togo",
        "logo": {
            "@type": "ImageObject",
            "url": "https://modehumain.org/images/logo_mdh.png"
        }
    },
    "description": "[Description courte de l'article]",
    "articleBody": "[Contenu principal de l'article]"
};

// Schema pour FAQ Page (à utiliser dans una page FAQ future)
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Comment puis-je faire un don?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Vous pouvez faire un don via notre page de donation sécurisée."
            }
        },
        {
            "@type": "Question",
            "name": "Comment rejoindre MDH en tant que bénévole?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Consultez notre page Rejoindre-nous pour plus d'informations."
            }
        },
        {
            "@type": "Question",
            "name": "Où est basée MDH International Togo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "MDH International Togo est basée au Togo. Contactez-nous pour plus de détails."
            }
        }
    ]
};

// Schema pour LocalBusiness (à utiliser dans contact.html)
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MDH International Togo",
    "image": "https://modehumain.org/images/logo_mdh.png",
    "description": "Organisation dédiée au développement humain durable au Togo",
    "url": "https://modehumain.org",
    "telephone": "+228 XXXXXXXX",
    "email": "contact@modehumain.org",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Adresse]",
        "addressLocality": "[Ville]",
        "postalCode": "[Code postal]",
        "addressCountry": "TO"
    },
    "areaServed": "TO",
    "priceRange": "Variable",
    "sameAs": [
        "https://www.facebook.com/mdhtogo",
        "https://www.instagram.com/mdhtogo",
        "https://twitter.com/mdhtogo"
    ]
};

// Schema pour BreadcrumbList (à utiliser dans pages intérieures)
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://modehumain.org/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "[Page actuelle]",
            "item": "https://modehumain.org/[page]"
        }
    ]
};

// Schema pour Product (pour les donations titrées)
const donationProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Donation Program",
    "description": "Soutenez nos initiatives humanitaires",
    "brand": {
        "@type": "Brand",
        "name": "MDH International Togo"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "250"
    }
};

// Schema pour Video (si vous avez des vidéos)
const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "[Titre de la vidéo]",
    "description": "[Description de la vidéo]",
    "thumbnailUrl": "[URL de la miniature]",
    "uploadDate": "[YYYY-MM-DD]",
    "duration": "PT[XXX]S",
    "contentUrl": "[URL de la vidéo]"
};

// Schema pour Event (pour les événements/formations)
const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "[Nom de l'événement]",
    "description": "[Description]",
    "startDate": "[YYYY-MM-DDTHH:MM:SS]",
    "endDate": "[YYYY-MM-DDTHH:MM:SS]",
    "location": {
        "@type": "Place",
        "name": "[Lieu]",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "[Adresse]",
            "addressLocality": "[Ville]",
            "addressCountry": "TO"
        }
    },
    "organizer": {
        "@type": "Organization",
        "name": "MDH International Togo",
        "url": "https://modehumain.org"
    },
    "image": "[URL de l'image]"
};

module.exports = {
    articleSchema,
    faqSchema,
    localBusinessSchema,
    breadcrumbSchema,
    donationProductSchema,
    videoSchema,
    eventSchema
};
