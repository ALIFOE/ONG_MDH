<?php
declare(strict_types=1);

// Formulaires reçus : réservés aux administrateurs (données personnelles)

/** Filtres communs à la liste et à l'export : type, statut, recherche. */
function submission_filters(): array
{
    $where = [];
    $params = [];
    $type = (string) ($_GET['type'] ?? '');
    if ($type !== '') {
        if (!array_key_exists($type, SUBMISSION_TYPES)) {
            abort(422, 'Type de formulaire inconnu.');
        }
        $where[] = 'type = ?';
        $params[] = $type;
    }
    $status = (string) ($_GET['status'] ?? '');
    if ($status === 'actifs') {
        $where[] = "status <> 'archive'";
    } elseif ($status !== '') {
        if (!in_array($status, SUBMISSION_STATUSES, true)) {
            abort(422, 'Statut inconnu.');
        }
        $where[] = 'status = ?';
        $params[] = $status;
    }
    $search = line($_GET['q'] ?? '', 100);
    if ($search !== '') {
        $where[] = '(name LIKE ? OR email LIKE ? OR phone LIKE ?)';
        $like = '%' . addcslashes($search, '%_\\') . '%';
        array_push($params, $like, $like, $like);
    }
    return [$where ? 'WHERE ' . implode(' AND ', $where) : '', $params];
}

/** Nombre de nouvelles demandes par type, pour les pastilles du menu et des onglets. */
function unread_counts(): array
{
    $unread = array_fill_keys(array_keys(SUBMISSION_TYPES), 0);
    foreach (db_all("SELECT type, COUNT(*) AS total FROM submissions WHERE status = 'nouveau' GROUP BY type") as $row) {
        if (isset($unread[$row['type']])) {
            $unread[$row['type']] = (int) $row['total'];
        }
    }
    return $unread;
}

route('GET', '/admin/submissions', function () {
    require_user('admin');
    [$where, $params] = submission_filters();

    $perPage = 25;
    $page = max(1, (int) ($_GET['page'] ?? 1));
    $total = (int) db_value("SELECT COUNT(*) FROM submissions $where", $params);
    $offset = ($page - 1) * $perPage;
    $rows = db_all("SELECT * FROM submissions $where ORDER BY created_at DESC, id DESC LIMIT $perPage OFFSET $offset", $params);
    // Total des montants affiché sur l'onglet des dons
    $amount = ($_GET['type'] ?? '') === 'don'
        ? (float) db_value("SELECT COALESCE(SUM(amount), 0) FROM submissions $where", $params)
        : null;

    return [
        'items' => array_map('format_submission', $rows),
        'total' => $total,
        'amount' => $amount,
        'page' => $page,
        'pages' => max(1, (int) ceil($total / $perPage)),
        'unread' => unread_counts(),
    ];
});

route('GET', '/admin/submissions/unread', function () {
    require_user('admin');
    return ['unread' => unread_counts()];
});

route('GET', '/admin/submissions/export', function () {
    require_user('admin');
    [$where, $params] = submission_filters();
    $rows = db_all("SELECT * FROM submissions $where ORDER BY created_at DESC, id DESC", $params);

    // Colonnes : informations fixes puis l'union des champs de tous les formulaires exportés
    $labels = [];
    $decoded = [];
    foreach ($rows as $row) {
        $fields = [];
        foreach (json_decode($row['fields'], true) ?: [] as [$label, $value]) {
            $fields[$label] = $value;
            $labels[$label] = true;
        }
        $decoded[] = $fields;
    }
    $labels = array_keys($labels);

    $type = (string) ($_GET['type'] ?? '');
    $filename = 'mdh-' . ($type !== '' ? $type : 'demandes') . '-' . gmdate('Y-m-d') . '.csv';
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Cache-Control: no-store');

    $out = fopen('php://output', 'w');
    fwrite($out, "\xEF\xBB\xBF"); // BOM : accents corrects à l'ouverture dans Excel
    $csv = fn (array $cells) => fputcsv($out, array_map('csv_cell', $cells), ';');
    $csv(array_merge(['N°', 'Date', 'Type', 'Statut', 'Nom', 'Email', 'Téléphone', 'Montant'], $labels, ['Notes internes']));
    foreach ($rows as $i => $row) {
        $line = [
            $row['id'],
            $row['created_at'],
            SUBMISSION_TYPES[$row['type']] ?? $row['type'],
            $row['status'],
            $row['name'],
            $row['email'],
            $row['phone'],
            $row['amount'] !== null ? str_replace('.', ',', $row['amount']) : '',
        ];
        foreach ($labels as $label) {
            $line[] = $decoded[$i][$label] ?? '';
        }
        $line[] = $row['notes'] ?? '';
        $csv($line);
    }
    fclose($out);
    exit;
});

/** Neutralise les formules quand le CSV est ouvert dans un tableur. */
function csv_cell($value): string
{
    $value = (string) $value;
    return preg_match('/^[=+\-@\t\r]/', $value) ? "'" . $value : $value;
}

route('GET', '/admin/submissions/{id}', function ($params) {
    require_user('admin');
    $row = db_one('SELECT * FROM submissions WHERE id = ?', [(int) $params['id']]);
    if (!$row) {
        abort(404, 'Demande introuvable.');
    }
    return format_submission($row, true);
});

route('PATCH', '/admin/submissions/{id}', function ($params) {
    require_user('admin');
    $id = (int) $params['id'];
    $row = db_one('SELECT * FROM submissions WHERE id = ?', [$id]);
    if (!$row) {
        abort(404, 'Demande introuvable.');
    }
    $in = input();
    $data = [];
    if (array_key_exists('status', $in)) {
        if (!in_array($in['status'], SUBMISSION_STATUSES, true)) {
            abort(422, 'Statut inconnu.');
        }
        $data['status'] = $in['status'];
    }
    if (array_key_exists('notes', $in)) {
        $data['notes'] = text($in['notes'], 10000);
    }
    if (array_key_exists('amount', $in) && $row['type'] === 'don') {
        $amount = round((float) str_replace(',', '.', (string) $in['amount']), 2);
        if ($amount <= 0) {
            abort(422, 'Montant invalide.', ['field' => 'amount']);
        }
        $data['amount'] = $amount;
    }
    db_update('submissions', $id, $data);
    return format_submission(db_one('SELECT * FROM submissions WHERE id = ?', [$id]), true);
});

route('DELETE', '/admin/submissions/{id}', function ($params) {
    require_user('admin');
    db_query('DELETE FROM submissions WHERE id = ?', [(int) $params['id']]);
    return ['ok' => true];
});
