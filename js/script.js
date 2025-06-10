// Gestion du menu mobile
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        mobileMenuButton.setAttribute('aria-expanded', isMenuOpen);
        
        // Gérer le focus lors de l'ouverture du menu
        if (isMenuOpen) {
            // Mettre le focus sur le premier élément du menu
            const firstMenuItem = mobileMenu.querySelector('a');
            if (firstMenuItem) firstMenuItem.focus();
        }
    }

    mobileMenuButton.addEventListener('click', toggleMenu);

    // Gestion des touches du clavier pour le menu
    mobileMenuButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
            mobileMenuButton.focus();
        }
    });

    // Gérer la navigation au clavier dans le menu
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
            let targetItem;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                targetItem = index === menuLinks.length - 1 ? menuLinks[0] : menuLinks[index + 1];
            }
            else if (e.key === 'ArrowUp') {
                e.preventDefault();
                targetItem = index === 0 ? menuLinks[menuLinks.length - 1] : menuLinks[index - 1];
            }
            else if (e.key === 'Home') {
                e.preventDefault();
                targetItem = menuLinks[0];
            }
            else if (e.key === 'End') {
                e.preventDefault();
                targetItem = menuLinks[menuLinks.length - 1];
            }

            if (targetItem) {
                targetItem.focus();
            }
        });
    });

    // Fermer le menu mobile lors du clic sur un lien
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });

    // Animation au scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Ajouter la classe fade-in aux éléments à animer
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Changement de style de la navigation au scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
        } else {
            nav.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
        }
    });

    // Validation des formulaires
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.setAttribute('novalidate', true);
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Réinitialiser les messages d'erreur
            form.querySelectorAll('.error-message').forEach(error => error.remove());
            form.querySelectorAll('.form-input').forEach(input => {
                input.classList.remove('border-red-500');
            });
            
            let isValid = true;
            
            // Valider chaque champ requis
            form.querySelectorAll('[required]').forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                    showError(field);
                }
            });
            
            // Validation spécifique pour les emails
            form.querySelectorAll('input[type="email"]').forEach(emailField => {
                if (emailField.value && !validateEmail(emailField.value)) {
                    isValid = false;
                    showError(emailField, 'Veuillez entrer une adresse email valide');
                }
            });
            
            if (isValid) {
                // Créer une animation de chargement
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
                
                // Simuler l'envoi (à remplacer par l'appel API réel)
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="fas fa-check"></i> Envoyé !';
                    form.reset();
                    
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalText;
                    }, 2000);
                }, 1500);
            }
        });
    });

    // Fonction de validation des champs
    function validateField(field) {
        if (field.hasAttribute('required') && !field.value.trim()) {
            return false;
        }
        return true;
    }

    // Fonction de validation email
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Fonction pour afficher les messages d'erreur
    function showError(field, message = 'Ce champ est requis') {
        field.classList.add('border-red-500');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-500 text-sm mt-1';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
