<?php
declare(strict_types=1);

mb_internal_encoding('UTF-8');
date_default_timezone_set('Africa/Lome');

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Configuration manquante : copier api/config.example.php en api/config.php.']);
    exit;
}
$GLOBALS['config'] = require $configFile;

require __DIR__ . '/lib/http.php';
require __DIR__ . '/lib/db.php';
require __DIR__ . '/lib/auth.php';
require __DIR__ . '/lib/settings.php';
require __DIR__ . '/lib/html.php';
require __DIR__ . '/lib/upload.php';
require __DIR__ . '/lib/submissions.php';
