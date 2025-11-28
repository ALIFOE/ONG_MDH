// Fonction pour obtenir le chemin de base
function getBasePath() {
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');
    const depth = pathSegments.filter(segment => segment.length > 0).length;
    return depth > 1 ? '../'.repeat(depth - 1) : './';
}

// Fonction de navigation
function navigateTo(page) {
    const basePath = getBasePath();
    // Retirer l'extension .html pour l'URL affichée
    const pageUrl = page.replace('.html', '');
    window.location.href = basePath + pageUrl;
}

// Fonction pour initialiser le menu mobile
function initMobileMenu() {
    const button = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('#mobile-menu');
    const menuOpen = button?.querySelector('.menu-open');
    const menuClose = button?.querySelector('.menu-close');
    
    if (button && menu) {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            menu.classList.toggle('hidden');
            menu.classList.toggle('show');
            button.setAttribute('aria-expanded', (!isExpanded).toString());
            
            // Basculer entre les icônes
            if (menuOpen && menuClose) {
                menuOpen.classList.toggle('hidden');
                menuClose.classList.toggle('hidden');
            }
        });

        // Fermer le menu lors du clic sur un lien
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('show');
                button.setAttribute('aria-expanded', 'false');
                menuOpen?.classList.remove('hidden');
                menuClose?.classList.add('hidden');
            });
        });
    }
}

// Fonction pour mettre à jour le logo
function updateLogo() {
    const logoImg = document.getElementById('navbar-logo');
    if (logoImg) {
        const basePath = getBasePath();
        logoImg.src = basePath + 'images/logo_mdh.png';
    }
    if (logoImg) {
        const basePath = getBasePath();
        logoImg.src = basePath + 'images/logo_mdh.png';
    }
}

// Fonction pour mettre à jour les chemins des ressources
function updateResourcePaths() {
    const basePath = getBasePath();
    // Mettre à jour le logo
    const logo = document.getElementById('navbar-logo');
    if (logo) {
        logo.src = basePath + 'images/logo_mdh.png';
    }
}

// Fonction pour charger la navbar
async function loadNavbar() {
    try {
        console.log('Chargement de la navbar...');
        const basePath = getBasePath();
        // Charger le contenu de la navbar
        const response = await fetch(basePath + 'includes/navbar.html');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const navbarContent = await response.text();
        
        // Supprimer l'ancienne navbar si elle existe
        const oldNavbar = document.querySelector('header.fixed');
        if (oldNavbar) {
            oldNavbar.remove();
        }
        
        // Insérer la nouvelle navbar
        document.body.insertAdjacentHTML('afterbegin', navbarContent);
        console.log('Navbar chargée avec succès');
        
        // Initialiser les fonctionnalités
        updateLogo();
        initMobileMenu();
        highlightActiveNavLink();

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
    // Obtenir le nom de la page sans extension et sans chemin
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop().replace('.html', '') || 'index';
    
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
