# Déplacer tous les fichiers du dossier public vers la racine
$sourcePath = "public"
$items = Get-ChildItem -Path $sourcePath -Recurse

foreach ($item in $items) {
    $targetPath = $item.FullName.Replace("$sourcePath\", "")
    
    # Si c'est un dossier, créer le dossier s'il n'existe pas
    if ($item.PSIsContainer) {
        if (!(Test-Path -Path $targetPath)) {
            New-Item -ItemType Directory -Path $targetPath -Force
        }
    }
    # Si c'est un fichier, le déplacer (mais ne pas écraser s'il existe déjà)
    else {
        if (!(Test-Path -Path $targetPath)) {
            Move-Item -Path $item.FullName -Destination $targetPath -Force
        }
    }
}

Write-Host "Fichiers déplacés avec succès!"
