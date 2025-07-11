# Update all pages with new navigation system
$htmlFiles = Get-ChildItem -Path ".\public" -Filter "*.html" | Where-Object { $_.Name -notin @('404.html', '500.html') }

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $navigation = @'
    <!-- Navigation -->
    <header class="bg-white shadow-lg fixed w-full z-50">
        <nav class="max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-between h-20">
                <!-- Logo Container -->
                <div class="flex-shrink-0 min-w-[192px] w-48 h-20 flex items-center">
                    <a href="index.html" class="block w-full" aria-label="Retour à l'accueil">
                        <img src="images/logo_mdh.png" alt="ONG MDH International Togo" class="h-12 w-auto object-contain">
                    </a>
                </div>

                <!-- Navigation Links -->
                <div class="flex-1 flex items-center justify-between px-4">
                    <!-- Primary Navigation -->
                    <nav class="hidden md:flex items-center space-x-8">
                        <a href="index.html" class="nav-link" data-page="index">Accueil</a>
                        <a href="association.html" class="nav-link" data-page="association">L'Organisation</a>
                        <a href="actions.html" class="nav-link" data-page="actions">Nos Actions</a>
                        <a href="actualites.html" class="nav-link" data-page="actualites">Nos Actualités</a>
                        <a href="rejoindre.html" class="nav-link" data-page="rejoindre">Rejoindre-nous</a>
                        <a href="ecole.html" class="nav-link" data-page="ecole">Notre École</a>
                        <a href="contact.html" class="nav-link" data-page="contact">Contactez-nous</a>
                    </nav>
                    <!-- Bouton Don -->
                    <div class="hidden md:block">
                        <a href="donation.html" class="py-2 px-6 bg-mdh-blue text-white rounded-full hover:bg-mdh-yellow transition duration-300">
                            Faire un don
                        </a>
                    </div>
                </div>
                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="mobile-menu-button p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-mdh-blue" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu">
                        <svg class="h-6 w-6 text-gray-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path class="menu-open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            <path class="menu-close hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <div class="hidden mobile-menu md:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="index.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" data-page="index">Accueil</a>
                    <a href="association.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" data-page="association">L'Organisation</a>
                    <a href="actions.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" data-page="actions">Nos Actions</a>
                    <a href="actualites.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" data-page="actualites">Nos Actualités</a>
                    <a href="rejoindre.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" data-page="rejoindre">Rejoindre-nous</a>
                    <a href="ecole.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" data-page="ecole">Notre École</a>
                    <a href="contact.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md" data-page="contact">Contactez-nous</a>
                    <a href="donation.html" class="block px-3 py-2 bg-mdh-blue text-white rounded-md hover:bg-mdh-yellow">Faire un don</a>
                </div>
            </div>
        </nav>
    </header>
'@

    # Supprimer l'ancienne navbar s'il y en a une
    $content = $content -replace '(?s)<header.*?</header>\s*', ''
    
    # Insérer la nouvelle navbar après la balise body
    $content = $content -replace '(<body[^>]*>)', "`$1`n$navigation"
    
    # Sauvegarder le fichier avec l'encodage UTF8
    $content | Out-File -FilePath $file.FullName -Encoding UTF8
    Write-Host "Updated navbar in: $($file.Name)"
}

Write-Host "Navigation bar update completed!"
