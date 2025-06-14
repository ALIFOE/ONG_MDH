# Obtenir tous les fichiers HTML sauf ceux dans le dossier includes
$htmlFiles = Get-ChildItem -Path . -Filter "*.html" -Exclude "includes\*"

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Vérifier si le script n'a pas déjà l'appel à loadNavbar()
    if ($content -notmatch 'loadNavbar\(\)') {
        # Remplacer la fermeture du body par le nouveau script et la fermeture du body
        $newContent = $content -replace '(?s)(.*)</body>', @'
$1    <!-- Navigation initialization -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            loadNavbar();
        });
    </script>
</body>'@
        
        # Sauvegarder le fichier avec le nouveau contenu
        $newContent | Set-Content $file.FullName -Encoding UTF8 -NoNewline
        Write-Host "Mise à jour effectuée pour $($file.Name)"
    } else {
        Write-Host "Le fichier $($file.Name) contient déjà l'appel à loadNavbar()"
    }
}
