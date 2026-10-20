<?php
declare(strict_types=1);

// Routes publiques utilisées par le site (lecture du contenu, envoi des formulaires)

route('GET', '/public/settings', function () {
    $settings = settings_all();
    return array_intersect_key($settings, array_flip(PUBLIC_SETTINGS));
});

route('GET', '/public/articles', function () {
    $rows = db_all(
        "SELECT slug, title, category, date_label, published_at, excerpt, image
         FROM articles WHERE status = 'published'
         ORDER BY published_at IS NULL, published_at DESC, id DESC"
    );
    return ['items' => array_map('format_article_card', $rows)];
});

route('GET', '/public/articles/{slug}', function ($params) {
    $row = db_one("SELECT * FROM articles WHERE slug = ? AND status = 'published'", [$params['slug']]);
    if (!$row) {
        abort(404, 'Article introuvable.');
    }
    return format_article_card($row) + ['content' => $row['content'] ?? '', 'photos' => article_photos($row)] + article_cta($row);
});

route('GET', '/public/gallery', function () {
    $rows = db_all('SELECT id, image, title, category FROM gallery_items ORDER BY sort_order, id DESC');
    return ['items' => array_map(fn ($row) => [
        'id' => (int) $row['id'],
        'url' => $row['image'],
        'title' => $row['title'],
        'category' => $row['category'],
    ], $rows)];
});

route('GET', '/public/team', function () {
    $rows = db_all('SELECT id, name, role, group_name, bio, photo FROM team_members ORDER BY sort_order, id');
    return ['items' => array_map('format_team_member', $rows)];
});

route('POST', '/public/submissions', function () {
    $in = input();

    // Champ piège invisible : un robot le remplit, un humain non
    if (!empty($in['_gotcha'])) {
        return ['ok' => true];
    }

    $type = (string) ($in['type'] ?? '');
    if (!array_key_exists($type, SUBMISSION_TYPES)) {
        abort(422, 'Type de formulaire inconnu.');
    }
    $name = required_line($in, 'name', 'Nom', 190);
    $email = mb_strtolower(required_line($in, 'email', 'Email', 190));
    if (!valid_email($email)) {
        abort(422, "L'adresse email n'est pas valide.", ['field' => 'email']);
    }

    $amount = null;
    if ($type === 'don') {
        $amount = round((float) str_replace(',', '.', (string) ($in['amount'] ?? '0')), 2);
        if ($amount <= 0 || $amount > 100000000) {
            abort(422, 'Veuillez indiquer un montant de don valide.', ['field' => 'amount']);
        }
    }

    $ipHash = hash('sha256', client_ip() . '|' . config('app_key', ''));
    $recent = (int) db_value(
        'SELECT COUNT(*) FROM submissions WHERE ip_hash = ? AND created_at > (UTC_TIMESTAMP() - INTERVAL 1 HOUR)',
        [$ipHash]
    );
    if ($recent >= SUBMISSION_RATE_LIMIT) {
        abort(429, 'Trop de formulaires envoyés. Merci de réessayer dans une heure.');
    }

    $submission = [
        'type' => $type,
        'name' => $name,
        'email' => $email,
        'phone' => line($in['phone'] ?? '', 60),
        'amount' => $amount,
    ];
    $fields = clean_submission_fields($in['fields'] ?? []);
    $id = db_insert('submissions', $submission + [
        'fields' => json_encode($fields, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        'ip_hash' => $ipHash,
    ]);

    notify_submission($id, $submission, $fields);
    return ['ok' => true];
});

function format_article_card(array $row): array
{
    return [
        'slug' => $row['slug'],
        'title' => $row['title'],
        'category' => $row['category'],
        'date_label' => $row['date_label'],
        'published_at' => $row['published_at'],
        'excerpt' => $row['excerpt'] ?? '',
        'image' => $row['image'],
    ];
}

function format_team_member(array $row): array
{
    return [
        'id' => (int) $row['id'],
        'name' => $row['name'],
        'role' => $row['role'],
        'group' => $row['group_name'],
        'bio' => $row['bio'] ?? '',
        'photo' => $row['photo'],
    ];
}
