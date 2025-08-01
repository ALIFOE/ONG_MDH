# Configuration de l'encodage par défaut
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
$PSDefaultParameterValues['Set-Content:Encoding'] = 'utf8'

$navigationTemplate = @'
    <!-- Header -->
    <header class="bg-white shadow-lg fixed w-full z-50">
        <nav class="max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-between h-20">
                <!-- Logo Container -->
                <div class="flex-shrink-0 min-w-[192px] w-48 h-20 flex items-center">
                    <a href="index.html" class="block w-full" aria-label="Retour à l'accueil">
                        <img src="images/logo_mdh.png" alt="L'Organisation MDH internatinal Togo" class="h-12 w-auto object-contain">
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
                        <a href="rejoindre.html" class="nav-link" data-page="rejoindre">Réjoindre-nous</a>
                        <a href="ecole.html" class="nav-link" data-page="ecole">Notre École</a>
                        <a href="contact.html" class="nav-link" data-page="contact">Contacter-nous</a>
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
                    <a href="index.html" class="mobile-nav-link" data-page="index">Accueil</a>
                    <a href="association.html" class="mobile-nav-link" data-page="association">L'Organisation</a>
                    <a href="actions.html" class="mobile-nav-link" data-page="actions">Nos Actions</a>
                    <a href="actualites.html" class="mobile-nav-link" data-page="actualites">Nos Actualités</a>
                    <a href="rejoindre.html" class="mobile-nav-link" data-page="rejoindre">Réjoindre-nous</a>
                    <a href="ecole.html" class="mobile-nav-link" data-page="ecole">Notre École</a>
                    <a href="contact.html" class="mobile-nav-link" data-page="contact">Contacter-nous</a>
                    <a href="donation.html" class="block px-3 py-2 my-2 text-center bg-mdh-blue text-white rounded-full hover:bg-mdh-yellow">Faire un don</a>
                </div>
            </div>
        </nav>
    </header>
'@

$scriptTemplate = @'
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="L'Organisation MDH internatinal Togo - PAGE_DESCRIPTION">
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
        description = "Découvrez les actions de l'L'Organisation MDH Togo dans les domaines de l'éducation, la santé et le développement durable."
    },
    @{
        file = "actualites.html"
        title = "Nos Actualités"
        description = "Restez informé des dernières actualités et événements de l'L'Organisation MDH Togo."
    },
    @{
        file = "association.html"
        title = "L'Organisation"
        description = "Découvrez l'histoire, la mission et les valeurs de l'L'Organisation MDH Togo."
    },
    @{
        file = "contact.html"
        title = "Nous Contacter"
        description = "Contactez l'L'Organisation MDH Togo pour plus d'informations ou pour participer à nos actions."
    },
    @{
        file = "donation.html"
        title = "Faire un don"
        description = "Soutenez les actions de l'L'Organisation MDH Togo en faisant un don."
    },
    @{
        file = "ecole.html"
        title = "Notre École"
        description = "Découvrez notre école et nos programmes éducatifs."
    },
    @{
        file = "index.html"
        title = "Accueil"
        description = "L'Organisation dédiée au développement humain durable à travers l'éducation, la santé et le développement économique."
    },
    @{
        file = "rejoindre.html"
        title = "Nous Rejoindre"
        description = "Rejoignez l'L'Organisation MDH Togo et participez à nos actions humanitaires."
    }
)

# Traiter chaque page HTML
foreach ($page in $pages) {
    Write-Host "Mise à jour de $($page.file)..."
    
    # Lire le contenu du fichier
    $filePath = Join-Path -Path $PWD -ChildPath $page.file
    [string]$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    
    # Préparer les scripts avec le bon titre et description
    $pageScripts = $scriptTemplate.Replace("PAGE_TITLE", $page.title).Replace("PAGE_DESCRIPTION", $page.description)
    
    # Préparer la navigation
    $pageNav = $navigationTemplate.Replace('data-page="index"', "data-page=`"$($page.file.Replace('.html', ''))`"")
    
    # Remplacer le head
    $content = [System.Text.RegularExpressions.Regex]::Replace(
        $content,
        '(?s)(<head>).*(</head>)',
        "`${1}`n$pageScripts`n</head>"
    )
    
    # Remplacer le header
    $content = [System.Text.RegularExpressions.Regex]::Replace(
        $content,
        '(?s)(<!-- Header -->).*?(</header>)',
        $pageNav
    )
    
    # Sauvegarder les modifications
    [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
}

Write-Host "Navigation mise à jour avec succès pour toutes les pages!"
