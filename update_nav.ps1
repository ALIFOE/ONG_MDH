$navigationTemplate = @'
    <header class="bg-white shadow-lg fixed w-full z-50">
        <nav class="max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-between h-20">
                <!-- Logo Container -->
                <div class="flex-shrink-0 min-w-[192px] w-48 h-20 flex items-center">
                    <a href="index.html" class="block w-full" aria-label="Retour à l'accueil">
                        <img src="images/logo_mdh.png" alt="ONG MDH internatinal Togo" class="h-12 w-auto object-contain">
                    </a>
                </div>

                <!-- Navigation Links -->
                <div class="flex-1 flex items-center justify-between px-4">
                    <!-- Primary Navigation -->
                    <nav class="hidden md:flex items-center space-x-8">
                        <a href="index.html" class="text-gray-700 hover:text-mdh-yellow transition duration-300">Accueil</a>
                        <a href="association.html" class="text-gray-700 hover:text-mdh-yellow transition duration-300">L'Organisation</a>
                        <a href="actions.html" class="text-gray-700 hover:text-mdh-yellow transition duration-300">Nos Actions</a>
                        <a href="actualites.html" class="text-gray-700 hover:text-mdh-yellow transition duration-300">Nos Actualités</a>
                        <a href="rejoindre.html" class="text-gray-700 hover:text-mdh-yellow transition duration-300">Réjoindre-nous</a>
                        <a href="ecole.html" class="text-gray-700 hover:text-mdh-yellow transition duration-300">Notre École</a>
                        <a href="contact.html" class="text-gray-700 hover:text-mdh-yellow transition duration-300">Contacter-nous</a>
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
                    <button class="mobile-menu-button p-2 rounded-md hover:bg-gray-100 focus:outline-none" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu">
                        <svg class="h-6 w-6 text-gray-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <div class="hidden mobile-menu md:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="index.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Accueil</a>
                    <a href="association.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">L'Organisation</a>
                    <a href="actions.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Nos Actions</a>
                    <a href="actualites.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Nos Actualités</a>
                    <a href="rejoindre.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Réjoindre-nous</a>
                    <a href="ecole.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Notre École</a>
                    <a href="contact.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Contacter-nous</a>
                    <a href="donation.html" class="block px-3 py-2 bg-mdh-blue text-white rounded-md hover:bg-mdh-yellow">Faire un don</a>
                </div>
            </div>
        </nav>
    </header>
'@

$scriptTemplate = @'
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ONG MDH internatinal Togo - PAGE_DESCRIPTION">
    <title>PAGE_TITLE - MDH</title>
    
    <!-- Styles -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="css/style.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    
    <!-- Scripts -->
    <script src="js/script.js"></script>
'@

$pages = @(
    @{
        file = "actions.html"
        title = "Nos Actions"
        description = "Découvrez les actions de l'ONG MDH Togo dans les domaines de l'éducation, la santé et le développement durable."
        currentPage = "actions.html"
    },
    @{
        file = "actualites.html"
        title = "Nos Actualités"
        description = "Restez informé des dernières actualités et événements de l'ONG MDH Togo."
        currentPage = "actualites.html"
    },
    @{
        file = "association.html"
        title = "L'Organisation"
        description = "Découvrez l'histoire, la mission et les valeurs de l'ONG MDH Togo."
        currentPage = "association.html"
    },
    @{
        file = "contact.html"
        title = "Nous Contacter"
        description = "Contactez l'ONG MDH Togo pour plus d'informations ou pour participer à nos actions."
        currentPage = "contact.html"
    },
    @{
        file = "donation.html"
        title = "Faire un don"
        description = "Soutenez les actions de l'ONG MDH Togo en faisant un don."
        currentPage = "donation.html"
    },
    @{
        file = "ecole.html"
        title = "Notre École"
        description = "Découvrez notre école et nos programmes éducatifs."
        currentPage = "ecole.html"
    },
    @{
        file = "index.html"
        title = "Accueil"
        description = "ONG dédiée au développement humain durable à travers l'éducation, la santé et le développement économique."
        currentPage = "index.html"
    },
    @{
        file = "rejoindre.html"
        title = "Nous Rejoindre"
        description = "Rejoignez l'ONG MDH Togo et participez à nos actions humanitaires."
        currentPage = "rejoindre.html"
    }
)

foreach ($page in $pages) {
    $content = Get-Content $page.file -Raw -Encoding UTF8
    
    # Préparer les scripts avec le bon titre et description
    $pageScripts = $scriptTemplate.Replace("PAGE_TITLE", $page.title).Replace("PAGE_DESCRIPTION", $page.description)
    
    # Préparer la navigation avec la bonne page active
    $pageNav = $navigationTemplate
    $pageNav = $pageNav -replace "(`"$($page.currentPage)`" class=`")(text-gray-700)", "`$1text-mdh-blue font-semibold"
    
    # Remplacer le head
    $content = $content -replace '(?s)(<head>).*(</head>)', "`$1`n$pageScripts`n</head>"
    
    # Remplacer le header
    $content = $content -replace '(?s)(<header[^>]*>).*?(</header>)', $pageNav
    
    # Sauvegarder les modifications
    $content | Set-Content $page.file -Encoding UTF8
}

Write-Host "Toutes les pages ont été mises à jour avec succès."
