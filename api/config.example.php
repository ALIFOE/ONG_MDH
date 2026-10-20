<?php
// Configuration de l'API MDH.
// Copier ce fichier en config.php (jamais commité) puis renseigner les valeurs.
// En production (cPanel) : créer la base et l'utilisateur MySQL dans « Bases de données MySQL »,
// puis reporter ici le nom complet de la base et de l'utilisateur (préfixés par le compte cPanel).

return [
    'db' => [
        'host' => '127.0.0.1',
        'port' => 3306,
        'name' => 'mdh',
        'user' => 'root',
        'pass' => '',
    ],

    // Chaîne aléatoire longue propre à chaque installation (sert à anonymiser les adresses IP)
    'app_key' => 'remplacer-par-une-longue-chaine-aleatoire',

    // Adresse publique du site, utilisée dans les emails de notification
    'site_url' => 'https://modehumain.org',

    // Dossier des images téléversées et URL publique correspondante
    'uploads' => [
        'dir' => __DIR__ . '/../uploads',
        'url' => '/uploads',
    ],

    // true en production (site servi en HTTPS)
    'cookie_secure' => false,

    // Emails de notification à chaque nouvelle demande (fonction mail() de PHP)
    'mail_enabled' => false,
    'mail_from' => 'no-reply@modehumain.org',

    // true uniquement en développement : affiche le détail des erreurs serveur
    'debug' => true,
];
