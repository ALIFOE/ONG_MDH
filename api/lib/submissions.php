<?php
declare(strict_types=1);

/** Formulaires du site enregistrés dans l'admin. */
const SUBMISSION_TYPES = [
    'contact' => 'Message de contact',
    'benevole' => 'Bénévolat',
    'adhesion' => 'Adhésion',
    'parrainage' => 'Parrainage',
    'don' => 'Don',
    'vacances' => 'Inscription Vacances Utiles',
];

const SUBMISSION_STATUSES = ['nouveau', 'en_cours', 'traite', 'archive'];

// Nombre maximal de formulaires acceptés par adresse IP et par heure
const SUBMISSION_RATE_LIMIT = 10;

function format_submission(array $row, bool $withDetails = false): array
{
    $item = [
        'id' => (int) $row['id'],
        'type' => $row['type'],
        'status' => $row['status'],
        'name' => $row['name'],
        'email' => $row['email'],
        'phone' => $row['phone'],
        'amount' => $row['amount'] !== null ? (float) $row['amount'] : null,
        'created_at' => iso_date($row['created_at']),
        'updated_at' => iso_date($row['updated_at']),
    ];
    if ($withDetails) {
        $fields = json_decode($row['fields'], true);
        $item['fields'] = is_array($fields) ? $fields : [];
        $item['notes'] = $row['notes'] ?? '';
    }
    return $item;
}

/** Champs libres du formulaire : liste ordonnée de libellé => valeur. */
function clean_submission_fields($fields): array
{
    if (!is_array($fields)) {
        return [];
    }
    $clean = [];
    foreach (array_slice($fields, 0, 80, true) as $label => $value) {
        $label = line((string) $label, 120);
        if ($label === '') {
            continue;
        }
        if (is_array($value)) {
            $value = implode(', ', array_map(fn ($v) => line($v, 500), array_filter($value, 'is_scalar')));
        }
        $clean[] = [$label, text($value, 5000)];
    }
    return $clean;
}

function notify_submission(int $id, array $submission, array $fields): void
{
    if (!config('mail_enabled', false)) {
        return;
    }
    $settings = settings_all()['notifications'];
    $to = $settings['email'] ?? '';
    if (empty($settings['enabled']) || !valid_email($to)) {
        return;
    }
    $label = SUBMISSION_TYPES[$submission['type']];
    $name = str_replace(["\r", "\n"], ' ', $submission['name']);

    $lines = [
        "Nouvelle demande reçue sur le site.",
        '',
        "Type : $label",
        "Nom : $name",
        "Email : {$submission['email']}",
    ];
    if ($submission['phone'] !== '') {
        $lines[] = "Téléphone : {$submission['phone']}";
    }
    if ($submission['amount'] !== null) {
        $lines[] = 'Montant : ' . number_format((float) $submission['amount'], 2, ',', ' ');
    }
    $lines[] = '';
    foreach ($fields as [$fieldLabel, $value]) {
        $lines[] = "$fieldLabel : $value";
    }
    $lines[] = '';
    $lines[] = 'Voir la demande : ' . rtrim((string) config('site_url', ''), '/') . "/admin/demandes/fiche/$id";

    $headers = [
        'From' => config('mail_from', 'no-reply@localhost'),
        'Reply-To' => $submission['email'],
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/plain; charset=UTF-8',
        'Content-Transfer-Encoding' => '8bit',
    ];
    @mail($to, mb_encode_mimeheader("[MDH] $label - $name", 'UTF-8'), implode("\r\n", $lines), $headers);
}
