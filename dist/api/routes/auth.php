<?php
declare(strict_types=1);

route('GET', '/auth/me', function () {
    $user = current_user();
    return ['user' => $user ? public_user($user) : null, 'csrf' => csrf_token()];
});

route('POST', '/auth/login', function () {
    $in = input();
    $email = mb_strtolower(line($in['email'] ?? '', 190));
    $password = (string) ($in['password'] ?? '');
    if ($email === '' || $password === '') {
        abort(422, 'Saisissez votre email et votre mot de passe.');
    }

    $ip = client_ip();
    db_query('DELETE FROM login_attempts WHERE attempted_at < (UTC_TIMESTAMP() - INTERVAL 1 DAY)');
    $failures = (int) db_value(
        'SELECT COUNT(*) FROM login_attempts WHERE (ip = ? OR email = ?) AND attempted_at > (UTC_TIMESTAMP() - INTERVAL 15 MINUTE)',
        [$ip, $email]
    );
    if ($failures >= 5) {
        abort(429, 'Trop de tentatives de connexion. Réessayez dans 15 minutes.');
    }

    $user = db_one('SELECT * FROM users WHERE email = ?', [$email]);
    // Vérification systématique du hash pour ne pas révéler si le compte existe
    $hash = $user['password_hash'] ?? password_hash('compte-inexistant', PASSWORD_DEFAULT);
    $valid = password_verify($password, $hash) && $user && (int) $user['active'];
    if (!$valid) {
        db_insert('login_attempts', ['ip' => $ip, 'email' => $email]);
        abort(401, 'Email ou mot de passe incorrect.');
    }

    db_query('DELETE FROM login_attempts WHERE email = ?', [$email]);
    if (password_needs_rehash($user['password_hash'], PASSWORD_DEFAULT)) {
        db_update('users', (int) $user['id'], ['password_hash' => password_hash($password, PASSWORD_DEFAULT)]);
    }
    login_user($user);
    return ['user' => public_user($user), 'csrf' => csrf_token()];
});

route('POST', '/auth/logout', function () {
    logout_user();
    return ['ok' => true, 'csrf' => csrf_token()];
});

// Modification de son propre compte
route('PUT', '/auth/me', function () {
    $user = require_user();
    $in = input();
    $row = db_one('SELECT password_hash FROM users WHERE id = ?', [$user['id']]);
    if (!password_verify((string) ($in['current_password'] ?? ''), $row['password_hash'])) {
        abort(422, 'Mot de passe actuel incorrect.', ['field' => 'current_password']);
    }

    $name = required_line($in, 'name', 'Nom', 120);
    $email = mb_strtolower(required_line($in, 'email', 'Email', 190));
    if (!valid_email($email)) {
        abort(422, "L'adresse email n'est pas valide.", ['field' => 'email']);
    }
    if (db_value('SELECT id FROM users WHERE email = ? AND id <> ?', [$email, $user['id']])) {
        abort(422, 'Cette adresse email est déjà utilisée.', ['field' => 'email']);
    }

    $data = ['name' => $name, 'email' => $email];
    $newPassword = (string) ($in['new_password'] ?? '');
    if ($newPassword !== '') {
        validate_password($newPassword);
        $data['password_hash'] = password_hash($newPassword, PASSWORD_DEFAULT);
    }
    db_update('users', (int) $user['id'], $data);
    return ['user' => public_user(['id' => $user['id'], 'role' => $user['role']] + $data)];
});
