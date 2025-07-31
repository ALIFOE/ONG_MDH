// Gestion du menu mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const dropdownButtons = document.querySelectorAll('[data-collapse-toggle]');
    const menuOpenIcon = document.querySelector('.menu-open');
    const menuCloseIcon = document.querySelector('.menu-close');
    // Fonction pour fermer tous les dropdowns
    const closeAllDropdowns = () => {
        document.querySelectorAll('[data-dropdown="true"]').forEach(dropdown => {
            dropdown.classList.add('hidden');
            const button = document.querySelector(`[aria-controls="${dropdown.id}"]`);
            if (button) button.setAttribute('aria-expanded', 'false');
        });
    };

    // Gestion du clic sur le bouton du menu
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            const expanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
            menuOpenIcon.classList.toggle('hidden');
            menuCloseIcon.classList.toggle('hidden');
            
            // Fermer tous les dropdowns quand on ouvre/ferme le menu
            if (!expanded) {
                closeAllDropdowns();
            }
        });
    }

    // Gestion des dropdowns
    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdownId = button.getAttribute('data-dropdown-toggle');
            const dropdown = document.getElementById(dropdownId);
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Fermer les autres dropdowns
            closeAllDropdowns();

            // Ouvrir/fermer le dropdown actuel
            if (dropdown) {
                button.setAttribute('aria-expanded', !isExpanded);
                dropdown.classList.toggle('hidden', isExpanded);
                dropdown.setAttribute('data-dropdown', 'true');
            }
        });
    });

    // Fermer les dropdowns en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        if (!e.target.closest('[data-dropdown-toggle]')) {
            closeAllDropdowns();
        }
    });

    // Gestion de la touche Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllDropdowns();
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        }
    });
});
