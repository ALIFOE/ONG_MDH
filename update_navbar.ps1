# Update pages with new navbar system
$pages = Get-ChildItem -Filter "*.html" -Exclude "navbar.html" | Where-Object { $_.Name -notlike "template*" }

foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw -Encoding UTF8
    
    # Ajouter le script include-navbar.js
    $scriptInsertPoint = '    <script src="js/script.js"></script>'
    $newScript = '    <script src="js/script.js"></script>
    <script src="js/include-navbar.js"></script>'
    
    $content = $content -replace [regex]::Escape($scriptInsertPoint), $newScript
    
    # Supprimer l'ancienne navbar (tout ce qui est entre <header> et </header>)
    $content = $content -replace "(?s)<header.*?</header>\s*", ""
    
    # Ajouter la classe requise au body et le lien d'accessibilité
    $oldBody = '<body class=".*?">'
    $newBody = '<body class="font-sans">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-mdh-blue focus:text-white focus:z-50">
        Aller au contenu principal
    </a>'
    
    $content = $content -replace $oldBody, $newBody
    
    # Ajouter l'ID main-content au main
    $content = $content -replace '<main class="', '<main id="main-content" class="'
    
    # Sauvegarder les modifications
    $content | Set-Content $page.FullName -Encoding UTF8
}

Write-Host "Toutes les pages ont été mises à jour avec le nouveau système de navigation."
