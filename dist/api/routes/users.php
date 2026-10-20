<?php
declare(strict_types=1);

// Gestion des comptes : réservée aux administrateurs

function format_admin_user(array $row): array
{
    return public_user($row) + [
        'active' => (bool) (int) $row['active'],
        'last_login_at' => iso_date($row['last_login_at']),
        'created_at' => iso_date($row['created_at']),
    ];
}

function user_payload(array $in, int $id = 0): array
{
    $email = mb_strtolower(required_line($in, 'email', 'Email', 190));
    if (!valid_email($email)) {
        abort(422, "L'adresse email n'est pas valide.", ['field' => 'email']);
    }
    if (db_value('SELECT id FROM users WHERE email = ? AND id <> ?', [$email, $id])) {
        abort(422, 'Cette adresse email est déjà utilisée par un autre compte.', ['field' => 'email']);
    }
    $role = (string) ($in['role'] ?? 'editor');
    if (!in_array($role, ROLES, true)) {
        abort(422, 'Rôle inconnu.');
    }
    return [
        'name' => required_line($in, 'name', 'Nom', 120),
        'email' => $email,
        'role' => $role,
        'active' => array_key_exists('active', $in) ? (int) (bool) $in['active'] : 1,
    ];
}

/** Il doit toujours rester au moins un administrateur actif. */
function ensure_other_active_admin(int $exceptId): void
{
    $others = (int) db_value("SELECT COUNT(*) FROM users WHERE role = 'admin' AND active = 1 AND id <> ?", [$exceptId]);
    if ($others === 0) {
        abort(422, 'Il doit rester au moins un administrateur actif.');
    }
}

route('GET', '/admin/users', function () {
    require_user('admin');
    $rows = db_all('SELECT * FROM users ORDER BY role, name');
    return ['items' => array_map('format_admin_user', $rows)];
});

route('POST', '/admin/users', function () {
    require_user('admin');
    $in = input();
    $data = user_payload($in);
    $password = (string) ($in['password'] ?? '');
    validate_password($password);
    $id = db_insert('users', $data + ['password_hash' => password_hash($password, PASSWORD_DEFAULT)]);
    return format_admin_user(db_one('SELECT * FROM users WHERE id = ?', [$id]));
});

route('PUT', '/admin/users/{id}', function ($params) {
    $me = require_user('admin');
    $id = (int) $params['id'];
    $current = db_one('SELECT * FROM users WHERE id = ?', [$id]);
    if (!$current) {
        abort(404, 'Compte introuvable.');
    }
    $in = input();
    $data = user_payload($in, $id);

    $losesAdmin = $current['role'] === 'admin' && (int) $current['active'] && ($data['role'] !== 'admin' || !$data['active']);
    if ($losesAdmin) {
        if ($id === (int) $me['id']) {
            abort(422, 'Vous ne pouvez pas retirer vos propres droits d\'administrateur ni désactiver votre compte.');
        }
        ensure_other_active_admin($id);
    }

    $password = (string) ($in['password'] ?? '');
    if ($password !== '') {
        validate_password($password);
        $data['password_hash'] = password_hash($password, PASSWORD_DEFAULT);
    }
    db_update('users', $id, $data);
    return format_admin_user(db_one('SELECT * FROM users WHERE id = ?', [$id]));
});

route('DELETE', '/admin/users/{id}', function ($params) {
    $me = require_user('admin');
    $id = (int) $params['id'];
    if ($id === (int) $me['id']) {
        abort(422, 'Vous ne pouvez pas supprimer votre propre compte.');
    }
    $current = db_one('SELECT * FROM users WHERE id = ?', [$id]);
    if ($current && $current['role'] === 'admin' && (int) $current['active']) {
        ensure_other_active_admin($id);
    }
    db_query('UPDATE articles SET author_id = NULL WHERE author_id = ?', [$id]);
    db_query('DELETE FROM users WHERE id = ?', [$id]);
    return ['ok' => true];
});
