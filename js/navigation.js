// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.setAttribute('aria-expanded', isMenuOpen);
        }

        mobileMenuButton.addEventListener('click', toggleMenu);

        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && 
                !mobileMenuButton.contains(event.target) && 
                !mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });

        // Fermer le menu quand on redimensionne vers desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });    }

    // Mettre en évidence la page active
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a, .mobile-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('text-mdh-blue', 'font-semibold');
            link.setAttribute('aria-current', 'page');
        }
    });
        <!-- Mobile menu -->
        <div class="hidden mobile-menu" id="mobile-menu" role="menu" aria-labelledby="mobile-menu-button">
            <ul class="px-2 py-3 space-y-2">
                
                <li><a href="association.html" class="block px-2 py-2 text-gray-700 hover:bg-mdh-blue hover:text-white transition duration-300" role="menuitem">L'Association</a></li>
                <li><a href="actions.html" class="block px-2 py-2 text-gray-700 hover:bg-mdh-blue hover:text-white transition duration-300" role="menuitem">Nos Actions</a></li>
                <li><a href="actualites.html" class="block px-2 py-2 text-gray-700 hover:bg-mdh-blue hover:text-white transition duration-300" role="menuitem">Nos Actualités</a></li>
                <li><a href="rejoindre.html" class="block px-2 py-2 text-gray-700 hover:bg-mdh-blue hover:text-white transition duration-300" role="menuitem">Réjoindre-nous</a></li>
                <li><a href="donation.html" class="block px-2 py-2 bg-mdh-yellow text-white hover:bg-mdh-blue transition duration-300" role="menuitem">Faire un don</a></li>
                <li><a href="ecole.html" class="block px-2 py-2 text-gray-700 hover:bg-mdh-blue hover:text-white transition duration-300" role="menuitem">Notre École</a></li>
                <li><a href="contact.html" class="block px-2 py-2 text-gray-700 hover:bg-mdh-blue hover:text-white transition duration-300" role="menuitem">Contacter-nous</a></li>
            </ul>
        </div>
    `;

    // Navigation footer mise à jour
    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-semibold mb-4">À propos de MDH</h3>
                    <p class="text-gray-400">
                        MDH œuvre pour le développement humain à travers des projets d'éducation, 
                        de santé et de développement durable.
                    </p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4">Liens rapides</h3>
                    <ul class="space-y-2">
                        <li><a href="index.html" class="text-gray-400 hover:text-mdh-yellow">Accueil</a></li>
                        <li><a href="actions.html" class="text-gray-400 hover:text-mdh-yellow">Nos Actions</a></li>
                        <li><a href="ecole.html" class="text-gray-400 hover:text-mdh-yellow">Notre École</a></li>
                        <li><a href="actualites.html" class="text-gray-400 hover:text-mdh-yellow">Actualités</a></li>
                        <li><a href="contact.html" class="text-gray-400 hover:text-mdh-yellow">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4">Contact</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><i class="fas fa-map-marker-alt mr-2"></i> 123 Rue de l'Espoir, 75000 Paris</li>
                        <li><i class="fas fa-phone mr-2"></i> +33 (0)1 23 45 67 89</li>
                        <li><i class="fas fa-envelope mr-2"></i> contact@mdh-ong.org</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4">Suivez-nous</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-mdh-yellow" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-gray-400 hover:text-mdh-yellow" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-gray-400 hover:text-mdh-yellow" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-gray-400 hover:text-mdh-yellow" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 ONG MDH internatinal Togo. Tous droits réservés.</p>
            </div>
        </div>
    `;

    // Gestion du menu mobile
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            let isMenuOpen = false;

            function toggleMenu() {
                isMenuOpen = !isMenuOpen;
                mobileMenu.classList.toggle('hidden');
                mobileMenuButton.setAttribute('aria-expanded', isMenuOpen);
            }

            mobileMenuButton.addEventListener('click', toggleMenu);

            // Fermer le menu quand on clique en dehors
            document.addEventListener('click', function(event) {
                if (!mobileMenu.contains(event.target) && 
                    !mobileMenuButton.contains(event.target) && 
                    !mobileMenu.classList.contains('hidden')) {
                    toggleMenu();
                }
            });

            // Fermer le menu quand on redimensionne vers desktop
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
                    toggleMenu();
                }
            });
        }

        // Mettre en évidence la page active
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('nav a, .mobile-menu a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('text-mdh-blue', 'font-semibold');
                link.setAttribute('aria-current', 'page');
            }
        });
    });
});
