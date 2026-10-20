<?php
declare(strict_types=1);

const ROLES = ['admin', 'editor'];
const SESSION_IDLE_SECONDS = 7200;

function start_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }
    session_name('mdh_admin');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/api',
        'secure' => (bool) config('cookie_secure', false),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

function current_user(): ?array
{
    static $user = false;
    if ($user !== false) {
        return $user;
    }
    start_session();
    $id = $_SESSION['uid'] ?? null;
    if (!$id) {
        return $user = null;
    }
    if (time() - ($_SESSION['last_seen'] ?? 0) > SESSION_IDLE_SECONDS) {
        logout_user();
        return $user = null;
    }
    $row = db_one('SELECT id, name, email, role, active FROM users WHERE id = ?', [$id]);
    if (!$row || !(int) $row['active']) {
        logout_user();
        return $user = null;
    }
    $_SESSION['last_seen'] = time();
    return $user = $row;
}

/** Exige une session ouverte ; sans rôle précisé, tout utilisateur connecté passe. */
function require_user(string ...$roles): array
{
    $user = current_user();
    if (!$user) {
        abort(401, 'Votre session a expiré. Veuillez vous reconnecter.');
    }
    if ($roles && !in_array($user['role'], $roles, true)) {
        abort(403, "Vous n'avez pas les droits nécessaires pour cette action.");
    }
    return $user;
}

function login_user(array $user): void
{
    start_session();
    session_regenerate_id(true);
    $_SESSION['uid'] = (int) $user['id'];
    $_SESSION['last_seen'] = time();
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
    db_query('UPDATE users SET last_login_at = UTC_TIMESTAMP() WHERE id = ?', [$user['id']]);
}

function logout_user(): void
{
    start_session();
    $_SESSION = [];
    session_regenerate_id(true);
}

function csrf_token(): string
{
    start_session();
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf'];
}

function check_csrf(): void
{
    $sent = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    if (!is_string($sent) || !hash_equals(csrf_token(), $sent)) {
        abort(403, 'Jeton de sécurité invalide. Rechargez la page et réessayez.');
    }
}

function public_user(array $user): array
{
    return [
        'id' => (int) $user['id'],
        'name' => $user['name'],
        'email' => $user['email'],
        'role' => $user['role'],
    ];
}

function validate_password(string $password): void
{
    if (mb_strlen($password) < 10) {
        abort(422, 'Le mot de passe doit contenir au moins 10 caractères.', ['field' => 'password']);
    }
}
