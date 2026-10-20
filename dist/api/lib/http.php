<?php
declare(strict_types=1);

class HttpError extends Exception
{
    public int $status;
    public array $extra;

    public function __construct(int $status, string $message, array $extra = [])
    {
        parent::__construct($message);
        $this->status = $status;
        $this->extra = $extra;
    }
}

function config(string $key, $default = null)
{
    return $GLOBALS['config'][$key] ?? $default;
}

function json_response($data, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function abort(int $status, string $message, array $extra = []): void
{
    throw new HttpError($status, $message, $extra);
}

/** Corps JSON de la requête. */
function input(): array
{
    static $data = null;
    if ($data === null) {
        $raw = file_get_contents('php://input');
        if ($raw === '' || $raw === false) {
            $data = [];
        } else {
            $data = json_decode($raw, true);
            if (!is_array($data)) {
                abort(400, 'Requête invalide (JSON attendu).');
            }
        }
    }
    return $data;
}

/** Texte nettoyé : espaces retirés, caractères de contrôle supprimés, longueur bornée. */
function text($value, int $max = 255): string
{
    if (is_bool($value)) {
        $value = $value ? 'Oui' : 'Non';
    }
    if (!is_scalar($value)) {
        return '';
    }
    $value = trim((string) $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr($value, 0, $max);
}

/** Texte sur une seule ligne (sans retour à la ligne). */
function line($value, int $max = 255): string
{
    return text(preg_replace('/\s+/u', ' ', is_scalar($value) ? (string) $value : '') ?? '', $max);
}

function required_line(array $src, string $key, string $label, int $max = 255): string
{
    $value = line($src[$key] ?? '', $max);
    if ($value === '') {
        abort(422, "Le champ « $label » est obligatoire.", ['field' => $key]);
    }
    return $value;
}

function valid_email(string $email): bool
{
    return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
}

function client_ip(): string
{
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

function is_list_array(array $value): bool
{
    return $value === [] || array_keys($value) === range(0, count($value) - 1);
}

/** URL acceptée pour une image ou un lien saisi dans l'admin (relative au site ou http/https). */
function safe_url(string $url, bool $allowMail = false): string
{
    $url = line($url, 500);
    if ($url === '') {
        return '';
    }
    $pattern = $allowMail ? '#^(https?://|/|mailto:|tel:|\#)#i' : '#^(https?://|/)#i';
    return preg_match($pattern, $url) ? $url : '';
}
