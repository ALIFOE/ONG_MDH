// Gestion du menu mobile et de la navigation
document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu mobile
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
            mobileMenuButton.setAttribute('aria-expanded', isMenuOpen);

            // Focus sur le premier élément du menu quand il est ouvert
            if (isMenuOpen) {
                const firstMenuItem = mobileMenu.querySelector('a');
                if (firstMenuItem) firstMenuItem.focus();
            }
        }

        // Gérer le clic sur le bouton du menu
        mobileMenuButton.addEventListener('click', toggleMenu);

        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMenu();
                mobileMenuButton.focus();
            }
        });

        // Navigation au clavier dans le menu mobile
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach((link, index) => {
            link.addEventListener('keydown', function(e) {
                let targetItem;

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
        });

        // Fermer le menu lors du clic sur un lien
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });

        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(event) {
            if (isMenuOpen && 
                !mobileMenu.contains(event.target) && 
                !mobileMenuButton.contains(event.target)) {
                toggleMenu();
            }
        });
    }

    // Gestion des liens actifs
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('[data-page]').forEach(link => {
        if (link.dataset.page === currentPage) {
            link.setAttribute('aria-current', 'page');
        }
    });
});

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
