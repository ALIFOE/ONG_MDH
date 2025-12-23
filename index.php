<?php
// Fichier de secours pour servir les assets avec les bons MIME types
// À utiliser UNIQUEMENT si .htaccess ne fonctionne pas

$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$request_uri = ltrim($request_uri, '/');

// Si c'est un fichier dans /assets/, le servir directement
if (strpos($request_uri, 'assets/') === 0) {
    $filepath = __DIR__ . '/' . $request_uri;
    
    if (file_exists($filepath) && is_file($filepath)) {
        // Définir le type MIME correct
        $ext = pathinfo($filepath, PATHINFO_EXTENSION);
        
        $mime_types = [
            'js'    => 'application/javascript',
            'mjs'   => 'application/javascript',
            'css'   => 'text/css',
            'json'  => 'application/json',
            'map'   => 'application/json',
            'svg'   => 'image/svg+xml',
            'woff'  => 'application/font-woff',
            'woff2' => 'application/font-woff2',
            'ttf'   => 'application/font-ttf',
            'otf'   => 'application/font-otf',
            'png'   => 'image/png',
            'jpg'   => 'image/jpeg',
            'jpeg'  => 'image/jpeg',
            'gif'   => 'image/gif',
            'webp'  => 'image/webp',
            'ico'   => 'image/x-icon',
        ];
        
        $mime_type = isset($mime_types[$ext]) ? $mime_types[$ext] : 'application/octet-stream';
        
        header('Content-Type: ' . $mime_type);
        header('Content-Length: ' . filesize($filepath));
        header('Cache-Control: max-age=31536000, public');
        readfile($filepath);
        exit;
    }
}

// Pour toute autre requête, servir index.html (SPA routing)
if (!file_exists(__DIR__ . '/' . $request_uri) || is_dir(__DIR__ . '/' . $request_uri)) {
    if (!in_array(pathinfo($request_uri, PATHINFO_EXTENSION), ['js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'woff', 'woff2', 'ico', 'json'])) {
        include __DIR__ . '/index.html';
        exit;
    }
}
?>
