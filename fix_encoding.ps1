# Configuration de l'encodage par défaut
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

function Repair-Encoding {
    param (
        [Parameter(Mandatory=$true)]
        [string]$text
    )
    
    $replacements = @{
        'Ã©' = 'é'
        'Ã¨' = 'è'
        'Ã ' = 'à'
        'Ã¢' = 'â'
        'Ã®' = 'î'
        'Ã´' = 'ô'
        'Ã»' = 'û'
        'Ã§' = 'ç'
        'Ã‰' = 'É'
        'Ã€' = 'À'
        'Ã‚' = 'Â'
        'ÃŽ' = 'Î'
        'Ã"' = 'Ô'
        'Ã›' = 'Û'
        'Ã‡' = 'Ç'
    }
    
    foreach ($key in $replacements.Keys) {
        $text = $text.Replace($key, $replacements[$key])
    }
    
    return $text
}
$htmlFiles = Get-ChildItem -Path . -Filter "*.html"

foreach ($file in $htmlFiles) {
    Write-Host "Correction de l'encodage de $($file.Name)..."
    
    try {
        # Lire le contenu avec l'encodage UTF-8
        $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
        
        # Corriger l'encodage
        $content = Repair-Encoding -text $content
        
        # Sauvegarder avec l'encodage UTF-8 avec BOM
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8) 
        Write-Host "  - Succès"
    }
    catch {
        Write-Host "  - Erreur: $_"
    }
}

Write-Host "Encodage corrigé pour tous les fichiers HTML!"
