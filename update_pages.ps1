$pages = @(
    "actions.html",
    "actualites.html",
    "association.html",
    "contact.html",
    "donation.html",
    "ecole.html",
    "rejoindre.html"
)

$headerTemplate = @"
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="L'Organisation MDH internatinal Togo est une L'Organisation dédiée au développement humain durable à travers l'éducation, la santé et le développement économique.">
    <meta name="keywords" content="L'Organisation, humanitaire, développement durable, éducation, santé, aide humanitaire, bénévolat, don">
    <meta name="author" content="L'Organisation MDH internatinal Togo">
    <meta name="theme-color" content="#87CEEB">
    
    <title>L'Organisation MDH internatinal Togo</title>
    
    <!-- Préchargement des ressources critiques -->
    <link rel="preload" href="css/style.css" as="style">
    <link rel="preload" href="js/script.js" as="script">
    <link rel="preload" href="js/common.js" as="script">
    
    <!-- Styles -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/custom.css">
    
    <!-- Scripts -->
    <script src="js/common.js"></script>
    <script src="js/script.js"></script>
"@

foreach ($page in $pages) {
    $content = Get-Content $page -Encoding UTF8
    $newContent = $content -replace '(?s)(<head>).*(</head>)', "`$1`n$headerTemplate`n</head>"
    $newContent | Set-Content $page -Encoding UTF8
    Write-Host "Updated $page"
}

Write-Host "All pages have been updated successfully."
