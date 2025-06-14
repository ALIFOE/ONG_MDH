// Fonction pour charger la barre de navigation
async function loadNavbar() {
    try {
        console.log('Chargement de la navbar...');
        // Charger le contenu de la navbar
        const response = await fetch('../includes/navbar.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const navbarContent = await response.text();
        console.log('Navbar chargée avec succès');

        // Insérer la navbar au début du body
        document.body.insertAdjacentHTML('afterbegin', navbarContent);

        // Mettre en surbrillance le lien actif
        highlightActiveNavLink();

        // Initialiser le menu mobile
        initMobileMenu();

    } catch (error) {
        console.error('Erreur lors du chargement de la navbar:', error);
    }
}

// Fonction pour mettre en surbrillance le lien actif
function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('[data-page]').forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('text-mdh-blue', 'font-semibold');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Fonction pour initialiser le menu mobile
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
            mobileMenuButton.setAttribute('aria-expanded', isMenuOpen);
        }

        mobileMenuButton.addEventListener('click', toggleMenu);

        // Fermer le menu avec Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMenu();
            }
        });

        // Fermer le menu lors du clic en dehors
        document.addEventListener('click', (e) => {
            if (isMenuOpen && 
                !mobileMenu.contains(e.target) && 
                !mobileMenuButton.contains(e.target)) {
                toggleMenu();
            }
        });
    }
}

// Charger la navbar quand le DOM est prêt
document.addEventListener('DOMContentLoaded', loadNavbar);
