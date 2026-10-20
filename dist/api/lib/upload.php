<?php
declare(strict_types=1);

const UPLOAD_MAX_BYTES = 10 * 1024 * 1024;
const UPLOAD_MAX_SIDE = 1920;

function uploads_dir(): string
{
    return rtrim(config('uploads')['dir'], '/\\');
}

function uploads_url(): string
{
    return rtrim(config('uploads')['url'], '/');
}

/**
 * Enregistre l'image envoyée dans le champ « file ».
 * L'image est toujours ré-encodée (JPEG ou PNG) : métadonnées retirées, taille limitée.
 * Renvoie son URL publique.
 */
function handle_image_upload(string $field = 'file'): string
{
    $file = $_FILES[$field] ?? null;
    if (!is_array($file) || !isset($file['error'])) {
        abort(400, 'Aucun fichier reçu.');
    }
    if (in_array($file['error'], [UPLOAD_ERR_INI_SIZE, UPLOAD_ERR_FORM_SIZE], true)) {
        abort(413, 'Image trop lourde pour le serveur (limite : ' . ini_get('upload_max_filesize') . ').');
    }
    if ($file['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($file['tmp_name'])) {
        abort(400, "Le téléversement de l'image a échoué.");
    }
    if ($file['size'] > UPLOAD_MAX_BYTES) {
        abort(413, 'Image trop lourde (10 Mo maximum).');
    }

    $mime = (new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']);
    if (!in_array($mime, ['image/jpeg', 'image/png', 'image/webp', 'image/gif'], true)) {
        abort(415, 'Format non accepté : utilisez une image JPG, PNG, WebP ou GIF.');
    }

    $image = @imagecreatefromstring((string) file_get_contents($file['tmp_name']));
    if (!$image) {
        abort(415, 'Cette image est illisible ou corrompue.');
    }
    if ($mime === 'image/jpeg') {
        $image = apply_exif_orientation($image, $file['tmp_name']);
    }
    $image = limit_image_size($image);

    $keepAlpha = in_array($mime, ['image/png', 'image/gif'], true);
    $extension = $keepAlpha ? 'png' : 'jpg';
    if (!$keepAlpha) {
        $image = flatten_on_white($image);
    }

    $subdir = gmdate('Y/m');
    $dir = uploads_dir() . '/' . $subdir;
    if (!is_dir($dir) && !@mkdir($dir, 0755, true)) {
        abort(500, "Le dossier des images n'est pas accessible en écriture.");
    }
    protect_uploads_dir();

    $name = bin2hex(random_bytes(8)) . '.' . $extension;
    $saved = $keepAlpha ? imagepng($image, "$dir/$name", 6) : imagejpeg($image, "$dir/$name", 82);
    imagedestroy($image);
    if (!$saved) {
        abort(500, "L'image n'a pas pu être enregistrée.");
    }
    return uploads_url() . "/$subdir/$name";
}

function apply_exif_orientation($image, string $path)
{
    if (!function_exists('exif_read_data')) {
        return $image;
    }
    $exif = @exif_read_data($path);
    $angle = [3 => 180, 6 => -90, 8 => 90][$exif['Orientation'] ?? 1] ?? 0;
    if ($angle === 0) {
        return $image;
    }
    $rotated = imagerotate($image, $angle, 0);
    imagedestroy($image);
    return $rotated;
}

function limit_image_size($image)
{
    $width = imagesx($image);
    $height = imagesy($image);
    if ($width <= UPLOAD_MAX_SIDE && $height <= UPLOAD_MAX_SIDE) {
        return $image;
    }
    $ratio = min(UPLOAD_MAX_SIDE / $width, UPLOAD_MAX_SIDE / $height);
    $newWidth = max(1, (int) round($width * $ratio));
    $newHeight = max(1, (int) round($height * $ratio));
    $resized = imagecreatetruecolor($newWidth, $newHeight);
    imagealphablending($resized, false);
    imagesavealpha($resized, true);
    imagecopyresampled($resized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
    imagedestroy($image);
    return $resized;
}

function flatten_on_white($image)
{
    $width = imagesx($image);
    $height = imagesy($image);
    $flat = imagecreatetruecolor($width, $height);
    imagefill($flat, 0, 0, imagecolorallocate($flat, 255, 255, 255));
    imagecopy($flat, $image, 0, 0, 0, 0, $width, $height);
    imagedestroy($image);
    return $flat;
}

/** Empêche l'exécution de scripts et le listage du dossier des images. */
function protect_uploads_dir(): void
{
    $file = uploads_dir() . '/.htaccess';
    if (!is_file($file)) {
        @file_put_contents($file, "Options -Indexes\n<FilesMatch \"\\.(php|phtml|phar|pl|py|cgi|sh)$\">\n  Require all denied\n</FilesMatch>\n");
    }
}

/** Supprime une image téléversée si plus aucun contenu ne l'utilise. */
function delete_upload_if_unused(?string $url): void
{
    $base = uploads_url() . '/';
    if (!$url || strpos($url, $base) !== 0) {
        return;
    }
    $relative = substr($url, strlen($base));
    if (!preg_match('#^\d{4}/\d{2}/[a-f0-9]{16}\.(jpg|png)$#', $relative)) {
        return;
    }
    $like = '%' . $url . '%';
    $used = (int) db_value('SELECT COUNT(*) FROM gallery_items WHERE image = ?', [$url])
        + (int) db_value('SELECT COUNT(*) FROM team_members WHERE photo = ?', [$url])
        + (int) db_value('SELECT COUNT(*) FROM articles WHERE image = ? OR content LIKE ? OR photos LIKE ?', [$url, $like, $like]);
    if ($used === 0) {
        @unlink(uploads_dir() . '/' . $relative);
    }
}
