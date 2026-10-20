<?php
declare(strict_types=1);

function gallery_payload(array $in): array
{
    $image = safe_url((string) ($in['image'] ?? ''));
    if ($image === '') {
        abort(422, 'Ajoutez une image.', ['field' => 'image']);
    }
    return [
        'image' => $image,
        'title' => line($in['title'] ?? '', 190),
        'category' => line($in['category'] ?? '', 80),
    ];
}

function format_gallery_item(array $row): array
{
    return [
        'id' => (int) $row['id'],
        'image' => $row['image'],
        'title' => $row['title'],
        'category' => $row['category'],
    ];
}

route('GET', '/admin/gallery', function () {
    require_user();
    $rows = db_all('SELECT * FROM gallery_items ORDER BY sort_order, id DESC');
    return ['items' => array_map('format_gallery_item', $rows)];
});

route('POST', '/admin/gallery', function () {
    require_user();
    // Les nouvelles photos apparaissent en premier
    $first = (int) db_value('SELECT COALESCE(MIN(sort_order), 0) FROM gallery_items');
    $id = db_insert('gallery_items', gallery_payload(input()) + ['sort_order' => $first - 1]);
    return format_gallery_item(db_one('SELECT * FROM gallery_items WHERE id = ?', [$id]));
});

route('POST', '/admin/gallery/reorder', function () {
    require_user();
    $ids = input()['ids'] ?? [];
    if (!is_array($ids)) {
        abort(422, 'Ordre invalide.');
    }
    db_reorder('gallery_items', $ids);
    return ['ok' => true];
});

route('PUT', '/admin/gallery/{id}', function ($params) {
    require_user();
    $id = (int) $params['id'];
    $previous = db_one('SELECT image FROM gallery_items WHERE id = ?', [$id]);
    if (!$previous) {
        abort(404, 'Photo introuvable.');
    }
    db_update('gallery_items', $id, gallery_payload(input()));
    delete_upload_if_unused($previous['image']);
    return format_gallery_item(db_one('SELECT * FROM gallery_items WHERE id = ?', [$id]));
});

route('DELETE', '/admin/gallery/{id}', function ($params) {
    require_user();
    $id = (int) $params['id'];
    $previous = db_one('SELECT image FROM gallery_items WHERE id = ?', [$id]);
    db_query('DELETE FROM gallery_items WHERE id = ?', [$id]);
    if ($previous) {
        delete_upload_if_unused($previous['image']);
    }
    return ['ok' => true];
});
