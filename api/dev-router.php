<?php
// Routeur du serveur PHP de développement (npm run api), équivalent des fichiers .htaccess :
//   /api/install.php -> script d'installation
//   /api/...         -> api/index.php
//   /uploads/...     -> images téléversées

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

if ($path === '/api/install.php') {
    require __DIR__ . '/install.php';
    return true;
}
if ($path === '/api' || strpos($path, '/api/') === 0) {
    require __DIR__ . '/index.php';
    return true;
}
if (strpos($path, '/uploads/') === 0 && preg_match('#^/uploads/[\w/-]+\.(jpg|png)$#', $path)) {
    return false; // fichier servi tel quel depuis la racine du projet
}

http_response_code(404);
echo 'Not found';
return true;
