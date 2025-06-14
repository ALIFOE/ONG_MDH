# Liste des fichiers HTML à nettoyer (exclure navbar.html et template.html)
$pageFiles = Get-ChildItem -Path "." -Filter "*.html" | Where-Object { $_.Name -notin @("navbar.html", "template.html") }

foreach ($file in $pageFiles) {
    Write-Host "Nettoyage de $($file.Name)..."
    
    # Lire le contenu du fichier
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Supprimer tous les commentaires liés au header et à la navigation
    $content = $content -replace "(?m)^\s*<!-- Header -->.*$", ""
    $content = $content -replace "(?m)^\s*<!-- Navigation -->.*$", ""
    
    # Supprimer les lignes vides multiples
    $content = $content -replace "(?m)^\s*\n\s*\n\s*$", "`n"
    
    # S'assurer que le head contient les bonnes ressources
    $headEnd = "</head>"
    $resourcesNeeded = @"
    <!-- Styles -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="css/style.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    <link href="css/navbar.css" rel="stylesheet">
    
    <!-- Scripts -->
    <script src="js/script.js"></script>
    <script src="js/include-navbar.js"></script>
</head>
"@
    $content = $content -replace "(?s)<!-- Styles -->.*?</head>", $resourcesNeeded
    
    # S'assurer que le body commence correctement
    $bodyStart = '<body class="font-sans">'
    $accessibilityLink = @"
<body class="font-sans">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-mdh-blue focus:text-white focus:z-50">
        Aller au contenu principal
    </a>

"@
    $content = $content -replace "<body.*?>", $accessibilityLink
    
    # S'assurer que le main a la bonne structure
    $content = $content -replace '<main.*?class="([^"]*)"', '<main id="main-content" class="$1 mt-20"'
    
    # Sauvegarder le fichier avec encodage UTF-8
    $Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False
    [System.IO.File]::WriteAllText($file.FullName, $content, $Utf8NoBomEncoding)
}

Write-Host "Nettoyage terminé. Les pages ont été mises à jour."
