# Update all pages with new navigation system and styles
$pages = Get-ChildItem -Filter "*.html" -Exclude @("navbar.html", "template.html") -Path "."

foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw -Encoding UTF8
    
    # Ajouter navbar.css et include-navbar.js
    $headEnd = "</head>"
    $newStyles = '    <link href="css/navbar.css" rel="stylesheet">
</head>'
    $content = $content -replace [regex]::Escape($headEnd), $newStyles
    
    $scriptEnd = '<script src="js/script.js"></script>'
    $newScripts = '<script src="js/script.js"></script>
    <script src="js/include-navbar.js"></script>'
    $content = $content -replace [regex]::Escape($scriptEnd), $newScripts
    
    # Supprimer l'ancien header
    $content = $content -replace "(?s)<header.*?</header>\s*", ""
    
    # Ajouter l'ID main-content et class mt-20 au main s'ils n'existent pas
    $content = $content -replace '<main class="([^"]*)"', '<main id="main-content" class="$1 mt-20"'
    
    # Sauvegarder
    $content | Set-Content $page.FullName -Encoding UTF8
}

Write-Host "Toutes les pages ont été mises à jour avec les nouveaux styles et scripts."
