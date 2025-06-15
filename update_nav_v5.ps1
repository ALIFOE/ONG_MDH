$pages = @(
    "actions.html",
    "actualites.html",
    "association.html",
    "contact.html",
    "donation.html",
    "ecole.html",
    "rejoindre.html"
)

$navbar = Get-Content -Path "public\includes\navbar.html" -Raw

foreach ($page in $pages) {
    $filePath = "public\$page"
    if (Test-Path $filePath) {
        $content = Get-Content -Path $filePath -Raw
        
        # Remplacer l'ancienne navbar par la nouvelle
        $content = $content -replace '(?s)<!-- Navigation -->.*?<!-- Sections -->', "$navbar`n    <!-- Sections -->"
        
        # Mettre à jour les scripts
        $content = $content -replace '<script src="js/include-navbar.js"></script>', '<script src="js/navbar.js"></script>'
        
        Set-Content -Path $filePath -Value $content -Force
        Write-Host "Updated $page"
    }
}

Write-Host "Navigation bar update completed!"
