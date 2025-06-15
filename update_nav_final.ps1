# Update all pages with new navigation system and styles
$files = Get-ChildItem -Path ".\public" -Filter "*.html" -File
$navbarContent = Get-Content -Path ".\public\includes\navbar.html" -Raw -Encoding UTF8

foreach ($file in $files) {
    if ($file.Name -ne "404.html" -and $file.Name -ne "500.html") {
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        
        # Supprimer l'ancienne navbar si elle existe
        $content = $content -replace '(?s)<header.*?</header>\s*', ''
        
        # Insérer la nouvelle navbar après la balise body
        $content = $content -replace '(<body[^>]*>)', "`$1`n$navbarContent"
        
        # Sauvegarder le fichier
        $content | Set-Content -Path $file.FullName -Encoding UTF8
        Write-Host "Updated navbar in: $($file.Name)"
    }
}

Write-Host "Toutes les pages ont été mises à jour avec les nouveaux styles et scripts."
