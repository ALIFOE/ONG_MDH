<?php
declare(strict_types=1);

route('GET', '/admin/settings', function () {
    $user = require_user();
    $settings = settings_all();
    if ($user['role'] !== 'admin') {
        unset($settings['notifications']);
    }
    return $settings;
});

// Seules les sections envoyées sont modifiées ; les notifications sont réservées aux admins
route('PUT', '/admin/settings', function () {
    $user = require_user();
    $in = input();
    $editable = $user['role'] === 'admin' ? [...PUBLIC_SETTINGS, 'notifications'] : PUBLIC_SETTINGS;

    $clean = [];
    foreach ($in as $name => $value) {
        if (!in_array($name, $editable, true)) {
            abort(403, "Vous ne pouvez pas modifier le réglage « $name ».");
        }
        $clean[$name] = clean_setting($name, $value);
    }
    foreach ($clean as $name => $value) {
        setting_save($name, $value);
    }

    $settings = settings_all();
    if ($user['role'] !== 'admin') {
        unset($settings['notifications']);
    }
    return $settings;
});
