// Fonction pour initialiser le menu mobile
function initMobileMenu() {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    
    if (button && menu) {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            menu.classList.toggle('hidden');
            
            // Mettre à jour l'état du bouton
            button.setAttribute('aria-expanded', (!isExpanded).toString());
            
            // Basculer les icônes
            const menuOpen = button.querySelector('.menu-open');
            const menuClose = button.querySelector('.menu-close');
            if (menuOpen && menuClose) {
                menuOpen.classList.toggle('hidden');
                menuClose.classList.toggle('hidden');
            }
        });

        // Fermer le menu lors du clic en dehors
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !button.contains(event.target) && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                button.setAttribute('aria-expanded', 'false');
                button.querySelector('.menu-open')?.classList.remove('hidden');
                button.querySelector('.menu-close')?.classList.add('hidden');
            }
        });
    }
}

// Mettre en surbrillance le lien actif
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('text-mdh-blue', 'font-semibold');
        }
    });
}

// Initialiser quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    highlightCurrentPage();
});
