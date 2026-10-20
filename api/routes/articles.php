<?php
declare(strict_types=1);

const ARTICLE_STATUSES = ['draft', 'published'];

function slugify(string $text): string
{
    $map = [
        'à' => 'a', 'â' => 'a', 'ä' => 'a', 'á' => 'a', 'ã' => 'a', 'ç' => 'c',
        'é' => 'e', 'è' => 'e', 'ê' => 'e', 'ë' => 'e', 'í' => 'i', 'î' => 'i', 'ï' => 'i',
        'ñ' => 'n', 'ó' => 'o', 'ô' => 'o', 'ö' => 'o', 'õ' => 'o', 'ú' => 'u', 'ù' => 'u',
        'û' => 'u', 'ü' => 'u', 'ÿ' => 'y', 'œ' => 'oe', 'æ' => 'ae', '’' => '-', "'" => '-',
    ];
    $slug = strtr(mb_strtolower($text), $map);
    $slug = preg_replace('/[^a-z0-9]+/', '-', $slug) ?? '';
    return trim(substr($slug, 0, 120), '-');
}

function unique_slug(string $slug, int $ignoreId = 0): string
{
    $base = $slug !== '' ? $slug : 'article';
    $candidate = $base;
    $suffix = 2;
    while (db_value('SELECT id FROM articles WHERE slug = ? AND id <> ?', [$candidate, $ignoreId])) {
        $candidate = $base . '-' . $suffix++;
    }
    return $candidate;
}

function format_article(array $row, bool $withContent = false): array
{
    $article = [
        'id' => (int) $row['id'],
        'slug' => $row['slug'],
        'title' => $row['title'],
        'category' => $row['category'],
        'date_label' => $row['date_label'],
        'published_at' => $row['published_at'],
        'excerpt' => $row['excerpt'] ?? '',
        'image' => $row['image'],
        'status' => $row['status'],
        'author' => $row['author'] ?? null,
        'updated_at' => iso_date($row['updated_at']),
    ];
    if ($withContent) {
        $article['content'] = $row['content'] ?? '';
    }
    return $article;
}

function article_payload(array $in, int $id = 0): array
{
    $title = required_line($in, 'title', 'Titre', 255);
    $status = (string) ($in['status'] ?? 'draft');
    if (!in_array($status, ARTICLE_STATUSES, true)) {
        abort(422, 'Statut inconnu.');
    }
    $publishedAt = line($in['published_at'] ?? '', 10);
    if ($publishedAt !== '' && !preg_match('/^\d{4}-\d{2}-\d{2}$/', $publishedAt)) {
        abort(422, 'Date de publication invalide.', ['field' => 'published_at']);
    }
    if ($status === 'published' && $publishedAt === '') {
        $publishedAt = gmdate('Y-m-d');
    }
    $slug = slugify(line($in['slug'] ?? '', 190) ?: $title);

    return [
        'title' => $title,
        'slug' => unique_slug($slug, $id),
        'category' => line($in['category'] ?? '', 80),
        'date_label' => line($in['date_label'] ?? '', 80),
        'published_at' => $publishedAt !== '' ? $publishedAt : null,
        'excerpt' => text($in['excerpt'] ?? '', 1000),
        'image' => safe_url((string) ($in['image'] ?? '')),
        'content' => sanitize_html((string) ($in['content'] ?? '')),
        'status' => $status,
    ];
}

const ARTICLE_SELECT = 'SELECT articles.*, users.name AS author FROM articles LEFT JOIN users ON users.id = articles.author_id';

route('GET', '/admin/articles', function () {
    require_user();
    $rows = db_all(ARTICLE_SELECT . ' ORDER BY articles.published_at IS NULL DESC, articles.published_at DESC, articles.id DESC');
    return ['items' => array_map('format_article', $rows)];
});

route('GET', '/admin/articles/{id}', function ($params) {
    require_user();
    $row = db_one(ARTICLE_SELECT . ' WHERE articles.id = ?', [(int) $params['id']]);
    if (!$row) {
        abort(404, 'Article introuvable.');
    }
    return format_article($row, true);
});

route('POST', '/admin/articles', function () {
    $user = require_user();
    $id = db_insert('articles', article_payload(input()) + ['author_id' => $user['id']]);
    return format_article(db_one(ARTICLE_SELECT . ' WHERE articles.id = ?', [$id]), true);
});

route('PUT', '/admin/articles/{id}', function ($params) {
    require_user();
    $id = (int) $params['id'];
    $previous = db_one('SELECT image FROM articles WHERE id = ?', [$id]);
    if (!$previous) {
        abort(404, 'Article introuvable.');
    }
    db_update('articles', $id, article_payload(input(), $id));
    delete_upload_if_unused($previous['image']);
    return format_article(db_one(ARTICLE_SELECT . ' WHERE articles.id = ?', [$id]), true);
});

route('DELETE', '/admin/articles/{id}', function ($params) {
    require_user();
    $id = (int) $params['id'];
    $previous = db_one('SELECT image FROM articles WHERE id = ?', [$id]);
    db_query('DELETE FROM articles WHERE id = ?', [$id]);
    if ($previous) {
        delete_upload_if_unused($previous['image']);
    }
    return ['ok' => true];
});
