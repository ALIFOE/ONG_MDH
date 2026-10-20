<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

$routes = [];

/** Déclare une route ; les segments {nom} sont passés au gestionnaire. */
function route(string $method, string $pattern, callable $handler): void
{
    global $routes;
    $regex = '#^' . preg_replace('#\{(\w+)\}#', '(?P<$1>[^/]+)', $pattern) . '$#';
    $routes[] = [$method, $regex, $handler];
}

require __DIR__ . '/routes/public.php';
require __DIR__ . '/routes/auth.php';
require __DIR__ . '/routes/dashboard.php';
require __DIR__ . '/routes/submissions.php';
require __DIR__ . '/routes/articles.php';
require __DIR__ . '/routes/gallery.php';
require __DIR__ . '/routes/team.php';
require __DIR__ . '/routes/settings.php';
require __DIR__ . '/routes/users.php';
require __DIR__ . '/routes/uploads.php';

try {
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
    $uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
    $position = strpos($uri, '/api');
    $path = '/' . trim($position === false ? $uri : substr($uri, $position + 4), '/');

    // Toute écriture côté admin exige le jeton CSRF de la session
    $isPrivate = strpos($path, '/admin/') === 0 || strpos($path, '/auth/') === 0;
    if ($isPrivate && $method !== 'GET' && $path !== '/auth/login') {
        check_csrf();
    }

    $allowed = [];
    foreach ($routes as [$routeMethod, $regex, $handler]) {
        if (!preg_match($regex, $path, $matches)) {
            continue;
        }
        if ($routeMethod !== $method) {
            $allowed[] = $routeMethod;
            continue;
        }
        $params = array_filter($matches, 'is_string', ARRAY_FILTER_USE_KEY);
        json_response($handler($params) ?? ['ok' => true]);
    }
    if ($allowed) {
        header('Allow: ' . implode(', ', array_unique($allowed)));
        abort(405, 'Méthode non autorisée.');
    }
    abort(404, 'Ressource introuvable.');
} catch (HttpError $error) {
    json_response(['error' => $error->getMessage()] + $error->extra, $error->status);
} catch (Throwable $error) {
    error_log('[MDH API] ' . $error);
    $message = config('debug', false) ? $error->getMessage() : 'Erreur interne du serveur.';
    json_response(['error' => $message], 500);
}
