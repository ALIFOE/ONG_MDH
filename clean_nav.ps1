# Liste des fichiers HTML à nettoyer (exclure navbar.html et template.html)
$pageFiles = Get-ChildItem -Path "." -Filter "*.html" | Where-Object { $_.Name -notin @("navbar.html", "template.html") }

foreach ($file in $pageFiles) {
    Write-Host "Nettoyage de $($file.Name)..."
    
    # Lire le contenu du fichier
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Supprimer la section header complète
    $content = $content -replace "(?s)<header.*?</header>\s*", ""
    
    # S'assurer que le main a la classe mt-20
    if ($content -match '<main.*?class="([^"]*)"') {
        $classes = $matches[1]
        if (-not $classes.Contains("mt-20")) {
            $content = $content -replace '<main(.*?)class="([^"]*)"', '<main$1class="$2 mt-20"'
        }
    }
    
    # S'assurer que le main a l'ID main-content
    if (-not $content.Contains('id="main-content"')) {
        $content = $content -replace '<main(.*?)class="', '<main id="main-content"$1class="'
    }
    
    # Sauvegarder le fichier
    $content | Set-Content $file.FullName -Encoding UTF8
}

Write-Host "Nettoyage terminé. La barre de navigation a été supprimée de toutes les pages."
