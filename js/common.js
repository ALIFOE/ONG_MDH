// Chargement des composants communs
document.addEventListener('DOMContentLoaded', function() {
    // Charger le header
    fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
            // Insérer le header au début du body
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Initialiser la navigation après l'insertion
            initializeNavigation();
        })
        .catch(error => console.error('Erreur lors du chargement du header:', error));
});

// Initialisation de la navigation
function initializeNavigation() {
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
}
