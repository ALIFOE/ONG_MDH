<?php
declare(strict_types=1);

/*
 * Installation de la base de l'espace admin.
 * Crée les tables manquantes, importe l'équipe actuelle du site, puis le premier compte administrateur.
 *
 *  - En ligne de commande :
 *      php api/install.php --name="Prénom Nom" --email=admin@exemple.org --password="mot-de-passe"
 *  - Sur l'hébergement (sans accès SSH) : ouvrir https://modehumain.org/api/install.php
 *    et saisir la clé « app_key » de config.php. Le formulaire n'est plus proposé dès qu'un compte existe.
 *
 * Relancer le script est sans danger : il ne recrée que ce qui manque.
 */

require __DIR__ . '/bootstrap.php';

$isCli = PHP_SAPI === 'cli';

function run_schema(): void
{
    $sql = (string) file_get_contents(__DIR__ . '/schema.sql');
    $sql = preg_replace('/^--.*$/m', '', $sql) ?? '';
    foreach (array_filter(array_map('trim', explode(';', $sql))) as $statement) {
        db()->exec($statement);
    }
}

/** Membres affichés jusqu'ici sur la page « Notre équipe ». */
function seed_team(): void
{
    if ((int) db_value('SELECT COUNT(*) FROM team_members') > 0) {
        return;
    }
    $members = [
        ["Prof N'kERE Komi", 'Président', "Conseil d'Administration (CA)", "Enseignant chercheur à l'UL/Kara."],
        ['TOHOULEBA Koboyo', 'Secrétaire Général', "Conseil d'Administration (CA)", ''],
        ['DZOMEDA Adjo Elom', 'Trésorière', "Conseil d'Administration (CA)", 'Entrepreneuse.'],
        ['ATARMILA Saoute', 'Directeur Exécutif', 'Bureau Exécutif', ''],
        ['AGBOKOU Paul', 'Assistant Administratif', 'Bureau Exécutif', ''],
        ["N'DAH Lafoh", 'Chargé de projet', 'Bureau Exécutif', ''],
        ['YAKOUBA Djibril', 'Comptable', 'Bureau Exécutif', ''],
        ['Baudoin Kokou ALIFOE', 'IT & web support Technician', 'Bureau Exécutif', 'Développeur web mobile.'],
    ];
    foreach ($members as $position => [$name, $role, $group, $bio]) {
        db_insert('team_members', ['name' => $name, 'role' => $role, 'group_name' => $group, 'bio' => $bio, 'sort_order' => $position]);
    }
}

/** Crée le premier administrateur ; renvoie un message d'erreur ou null. */
function create_first_admin(string $name, string $email, string $password): ?string
{
    $name = line($name, 120);
    $email = mb_strtolower(line($email, 190));
    if ($name === '' || !valid_email($email)) {
        return 'Nom ou email invalide.';
    }
    if (mb_strlen($password) < 10) {
        return 'Le mot de passe doit contenir au moins 10 caractères.';
    }
    db_insert('users', [
        'name' => $name,
        'email' => $email,
        'role' => 'admin',
        'password_hash' => password_hash($password, PASSWORD_DEFAULT),
    ]);
    return null;
}

try {
    run_schema();
    $hasUsers = (int) db_value('SELECT COUNT(*) FROM users') > 0;
    if (!$hasUsers) {
        seed_team();
    }
} catch (Throwable $error) {
    $message = 'Connexion ou création des tables impossible : ' . $error->getMessage();
    if ($isCli) {
        fwrite(STDERR, $message . PHP_EOL);
        exit(1);
    }
    http_response_code(500);
    exit(htmlspecialchars($message));
}

if ($isCli) {
    $options = getopt('', ['name:', 'email:', 'password:']);
    echo "Tables à jour." . PHP_EOL;
    if ($hasUsers) {
        echo "Un compte existe déjà : aucun administrateur créé." . PHP_EOL;
        exit(0);
    }
    if (empty($options['email']) || empty($options['password']) || empty($options['name'])) {
        fwrite(STDERR, 'Indiquez --name, --email et --password pour créer le premier administrateur.' . PHP_EOL);
        exit(1);
    }
    $error = create_first_admin($options['name'], $options['email'], $options['password']);
    if ($error) {
        fwrite(STDERR, $error . PHP_EOL);
        exit(1);
    }
    echo "Administrateur créé : {$options['email']}" . PHP_EOL;
    exit(0);
}

// --- Version navigateur ---
$error = null;
$done = false;
if (!$hasUsers && ($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    $key = (string) ($_POST['key'] ?? '');
    if (!hash_equals((string) config('app_key', ''), $key)) {
        $error = 'Clé d\'installation incorrecte (valeur « app_key » de api/config.php).';
    } else {
        $error = create_first_admin((string) ($_POST['name'] ?? ''), (string) ($_POST['email'] ?? ''), (string) ($_POST['password'] ?? ''));
        $done = $error === null;
    }
}
$e = fn ($value) => htmlspecialchars((string) $value, ENT_QUOTES);
header('Content-Type: text/html; charset=utf-8');
header('X-Robots-Tag: noindex');
?>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <title>Installation - Admin MDH</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #eef1f6; color: #0b2a5b; margin: 0; padding: 40px 16px; }
    main { max-width: 440px; margin: auto; background: #fff; border-radius: 14px; padding: 32px; box-shadow: 0 10px 30px rgba(11, 42, 91, .08); }
    h1 { font-size: 22px; margin: 0 0 8px; }
    label { display: block; font-size: 14px; font-weight: 600; margin: 16px 0 6px; }
    input { width: 100%; box-sizing: border-box; padding: 10px 12px; border: 1px solid #c9d3e3; border-radius: 8px; font-size: 15px; }
    button, .btn { display: inline-block; margin-top: 22px; background: #0064f5; color: #fff; border: 0; border-radius: 8px; padding: 12px 18px; font-size: 15px; text-decoration: none; cursor: pointer; }
    .error { background: #fdecec; color: #7b241c; padding: 10px 12px; border-radius: 8px; margin-top: 14px; }
    p { color: #47526a; line-height: 1.5; }
  </style>
</head>
<body>
<main>
  <h1>Installation de l'espace admin</h1>
  <?php if ($done): ?>
    <p>Le compte administrateur est créé. Supprimez maintenant le fichier <code>api/install.php</code> du serveur, puis connectez-vous.</p>
    <a class="btn" href="/admin">Aller à l'espace admin</a>
  <?php elseif ($hasUsers): ?>
    <p>Les tables sont à jour et un compte existe déjà. Par sécurité, supprimez le fichier <code>api/install.php</code> du serveur.</p>
    <a class="btn" href="/admin">Aller à l'espace admin</a>
  <?php else: ?>
    <p>Les tables sont créées. Créez le premier compte administrateur.</p>
    <?php if ($error): ?><div class="error"><?= $e($error) ?></div><?php endif; ?>
    <form method="post" autocomplete="off">
      <label for="key">Clé d'installation (app_key de config.php)</label>
      <input id="key" name="key" type="password" required>
      <label for="name">Nom complet</label>
      <input id="name" name="name" value="<?= $e($_POST['name'] ?? '') ?>" required>
      <label for="email">Email</label>
      <input id="email" name="email" type="email" value="<?= $e($_POST['email'] ?? '') ?>" required>
      <label for="password">Mot de passe (10 caractères minimum)</label>
      <input id="password" name="password" type="password" minlength="10" required>
      <button type="submit">Créer le compte administrateur</button>
    </form>
  <?php endif; ?>
</main>
</body>
</html>
