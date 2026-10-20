<?php
declare(strict_types=1);

function team_payload(array $in): array
{
    return [
        'name' => required_line($in, 'name', 'Nom', 190),
        'role' => line($in['role'] ?? '', 190),
        'group_name' => required_line($in, 'group', 'Groupe', 120),
        'bio' => text($in['bio'] ?? '', 1000),
        'photo' => safe_url((string) ($in['photo'] ?? '')),
    ];
}

route('GET', '/admin/team', function () {
    require_user();
    $rows = db_all('SELECT * FROM team_members ORDER BY sort_order, id');
    return ['items' => array_map('format_team_member', $rows)];
});

route('POST', '/admin/team', function () {
    require_user();
    $last = (int) db_value('SELECT COALESCE(MAX(sort_order), 0) FROM team_members');
    $id = db_insert('team_members', team_payload(input()) + ['sort_order' => $last + 1]);
    return format_team_member(db_one('SELECT * FROM team_members WHERE id = ?', [$id]));
});

route('POST', '/admin/team/reorder', function () {
    require_user();
    $ids = input()['ids'] ?? [];
    if (!is_array($ids)) {
        abort(422, 'Ordre invalide.');
    }
    db_reorder('team_members', $ids);
    return ['ok' => true];
});

route('PUT', '/admin/team/{id}', function ($params) {
    require_user();
    $id = (int) $params['id'];
    $previous = db_one('SELECT photo FROM team_members WHERE id = ?', [$id]);
    if (!$previous) {
        abort(404, 'Membre introuvable.');
    }
    db_update('team_members', $id, team_payload(input()));
    delete_upload_if_unused($previous['photo']);
    return format_team_member(db_one('SELECT * FROM team_members WHERE id = ?', [$id]));
});

route('DELETE', '/admin/team/{id}', function ($params) {
    require_user();
    $id = (int) $params['id'];
    $previous = db_one('SELECT photo FROM team_members WHERE id = ?', [$id]);
    db_query('DELETE FROM team_members WHERE id = ?', [$id]);
    if ($previous) {
        delete_upload_if_unused($previous['photo']);
    }
    return ['ok' => true];
});
