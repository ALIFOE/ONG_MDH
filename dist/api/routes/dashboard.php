<?php
declare(strict_types=1);

route('GET', '/admin/dashboard', function () {
    $user = require_user();

    $content = [
        'articles_published' => (int) db_value("SELECT COUNT(*) FROM articles WHERE status = 'published'"),
        'articles_draft' => (int) db_value("SELECT COUNT(*) FROM articles WHERE status <> 'published'"),
        'gallery' => (int) db_value('SELECT COUNT(*) FROM gallery_items'),
        'team' => (int) db_value('SELECT COUNT(*) FROM team_members'),
    ];
    if ($user['role'] !== 'admin') {
        return ['content' => $content];
    }

    $byType = [];
    foreach (array_keys(SUBMISSION_TYPES) as $type) {
        $byType[$type] = ['total' => 0, 'nouveau' => 0];
    }
    foreach (db_all('SELECT type, status, COUNT(*) AS total FROM submissions GROUP BY type, status') as $row) {
        if (!isset($byType[$row['type']])) {
            continue;
        }
        $byType[$row['type']]['total'] += (int) $row['total'];
        if ($row['status'] === 'nouveau') {
            $byType[$row['type']]['nouveau'] = (int) $row['total'];
        }
    }

    $donations = db_one(
        "SELECT
            COALESCE(SUM(CASE WHEN status = 'traite' THEN amount END), 0) AS received,
            COALESCE(SUM(CASE WHEN status IN ('nouveau', 'en_cours') THEN amount END), 0) AS pending
         FROM submissions WHERE type = 'don'"
    );

    $recent = db_all('SELECT * FROM submissions ORDER BY created_at DESC, id DESC LIMIT 8');

    return [
        'content' => $content,
        'submissions' => $byType,
        'donations' => ['received' => (float) $donations['received'], 'pending' => (float) $donations['pending']],
        'recent' => array_map('format_submission', $recent),
    ];
});
