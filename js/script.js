// Gestion du menu mobile et de la navigation
document.addEventListener('DOMContentLoaded', function() {
    // Éléments du menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.querySelector('.menu-open');
    const menuCloseIcon = document.querySelector('.menu-close');
    const menuLinks = mobileMenu ? Array.from(mobileMenu.querySelectorAll('a')) : [];
    let isMenuOpen = false;

    // Fonction pour ouvrir/fermer le menu
    function toggleMenu(forcedState) {
        if (!mobileMenu || !mobileMenuButton) return;

        // Si un état est forcé, on l'utilise, sinon on inverse l'état actuel
        isMenuOpen = forcedState !== undefined ? forcedState : !isMenuOpen;

        // Mise à jour de l'affichage du menu
        mobileMenu.classList.toggle('hidden', !isMenuOpen);
        
        // Mise à jour des icônes
        if (menuOpenIcon && menuCloseIcon) {
            menuOpenIcon.classList.toggle('hidden', isMenuOpen);
            menuCloseIcon.classList.toggle('hidden', !isMenuOpen);
        }

        // Mise à jour de l'attribut aria-expanded
        mobileMenuButton.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');

        // Focus sur le premier élément du menu quand il est ouvert
        if (isMenuOpen && menuLinks.length > 0) {
            menuLinks[0].focus();
        } else if (!isMenuOpen) {
            mobileMenuButton.focus();
        }
    }

    // Gestionnaire de clic sur le bouton du menu mobile
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Navigation au clavier dans le menu
    menuLinks.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
            let targetItem = null;

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    targetItem = index === menuLinks.length - 1 ? menuLinks[0] : menuLinks[index + 1];
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    targetItem = index === 0 ? menuLinks[menuLinks.length - 1] : menuLinks[index - 1];
                    break;
                case 'Home':
                    e.preventDefault();
                    targetItem = menuLinks[0];
                    break;
                case 'End':
                    e.preventDefault();
                    targetItem = menuLinks[menuLinks.length - 1];
                    break;
            }

            if (targetItem) {
                targetItem.focus();
            }
        });

        // Fermer le menu au clic sur un lien
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu(false);
            }
        });
    });

    // Fermer le menu avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu(false);
        }
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(e) {
        if (isMenuOpen && mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            toggleMenu(false);
        }
    });

    // Gestion des liens actifs dans la navigation
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('[data-page]').forEach(link => {
        if (link.dataset.page === currentPage) {
            link.setAttribute('aria-current', 'page');
            link.classList.add('active');
        }
    });
});

// Ajout : gestion du lien actif dans la navbar
(function() {
  const links = document.querySelectorAll('nav .nav-link');
  const page = window.location.pathname.split('/').pop().replace('.html','');
  links.forEach(link => {
    if (link.dataset.page === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();

// Autres fonctionnalités de la page
document.addEventListener('DOMContentLoaded', function() {
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

    // Ajouter la classe fade-in aux sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Style de la navigation au scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
        } else {
            nav.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
        }
    });
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
