<?php
declare(strict_types=1);

/** Valeurs initiales, identiques à celles écrites en dur dans src/data/site.js. */
function settings_defaults(): array
{
    return [
        'contact' => [
            'email' => 'modehumain@gmail.com',
            'phone' => '+228 92 12 95 49',
            'address' => 'Aflao-Sagbado (Apedokoè)',
            'city' => 'Lomé, Togo',
            'hours' => 'Du lundi au vendredi, de 8h à 18h',
            'mapQuery' => 'Apédokoè, Lomé, Togo',
        ],
        'socials' => [
            ['label' => 'Facebook', 'icon' => 'fa-facebook-f', 'href' => 'https://www.facebook.com/mdhtogoofficial'],
            ['label' => 'Twitter', 'icon' => 'fa-twitter', 'href' => 'https://twitter.com/mdhtogo'],
            ['label' => 'Instagram', 'icon' => 'fa-instagram', 'href' => 'https://www.instagram.com/mdhtogo'],
            ['label' => 'LinkedIn', 'icon' => 'fa-linkedin-in', 'href' => 'https://www.linkedin.com/company/mdh-togo'],
        ],
        'donation' => [
            'paypalUrl' => 'https://www.paypal.com/mep/dashboard',
            'bankName' => 'IBANK',
            'bankHolder' => 'Mode Humain International',
            'iban' => 'TG80370240103902769900010133',
            'mobileMoneyName' => 'Mix by Yas',
            'mobileMoneyNumber' => '+228 92 12 95 49',
            'mobileMoneyReference' => 'MDH Donation',
        ],
        'notifications' => [
            'enabled' => true,
            'email' => 'modehumain@gmail.com',
        ],
    ];
}

/** Réglages publics : tout sauf les notifications. */
const PUBLIC_SETTINGS = ['contact', 'socials', 'donation'];

function settings_all(): array
{
    $settings = settings_defaults();
    foreach (db_all('SELECT name, value FROM settings') as $row) {
        $value = json_decode($row['value'], true);
        if (!is_array($value) || !array_key_exists($row['name'], $settings)) {
            continue;
        }
        $settings[$row['name']] = is_list_array($value) ? $value : array_merge($settings[$row['name']], $value);
    }
    return $settings;
}

function setting_save(string $name, array $value): void
{
    db_query(
        'INSERT INTO settings (name, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = VALUES(value)',
        [$name, json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)]
    );
}

/** Valide une section de réglages envoyée par l'admin. */
function clean_setting(string $name, $value): array
{
    if (!is_array($value)) {
        abort(422, "Réglage « $name » invalide.");
    }
    switch ($name) {
        case 'contact':
            $email = line($value['email'] ?? '', 190);
            if ($email !== '' && !valid_email($email)) {
                abort(422, "L'adresse email de contact n'est pas valide.", ['field' => 'contact.email']);
            }
            return [
                'email' => $email,
                'phone' => line($value['phone'] ?? '', 60),
                'address' => line($value['address'] ?? '', 190),
                'city' => line($value['city'] ?? '', 120),
                'hours' => line($value['hours'] ?? '', 190),
                'mapQuery' => line($value['mapQuery'] ?? '', 190),
            ];
        case 'socials':
            $socials = [];
            foreach (array_slice(is_list_array($value) ? $value : [], 0, 12) as $item) {
                $href = safe_url((string) ($item['href'] ?? ''));
                $label = line($item['label'] ?? '', 60);
                if ($href === '' || $label === '') {
                    continue;
                }
                $icon = line($item['icon'] ?? '', 40);
                $socials[] = [
                    'label' => $label,
                    'icon' => preg_match('/^fa-[a-z0-9-]+$/', $icon) ? $icon : 'fa-link',
                    'href' => $href,
                ];
            }
            return $socials;
        case 'donation':
            return [
                'paypalUrl' => safe_url((string) ($value['paypalUrl'] ?? '')),
                'bankName' => line($value['bankName'] ?? '', 120),
                'bankHolder' => line($value['bankHolder'] ?? '', 190),
                'iban' => line($value['iban'] ?? '', 60),
                'mobileMoneyName' => line($value['mobileMoneyName'] ?? '', 120),
                'mobileMoneyNumber' => line($value['mobileMoneyNumber'] ?? '', 60),
                'mobileMoneyReference' => line($value['mobileMoneyReference'] ?? '', 120),
            ];
        case 'notifications':
            $email = line($value['email'] ?? '', 190);
            if ($email !== '' && !valid_email($email)) {
                abort(422, "L'adresse de notification n'est pas valide.", ['field' => 'notifications.email']);
            }
            return ['enabled' => !empty($value['enabled']), 'email' => $email];
    }
    abort(422, "Réglage inconnu : $name.");
    return [];
}
