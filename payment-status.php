<?php
// Vérification du statut de paiement (exemple basique)
// Dans un vrai cas, vous pouvez utiliser des paramètres GET/POST ou une session pour afficher le bon message
$success = isset($_GET['success']) ? $_GET['success'] === '1' : true;
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statut du paiement - MDH</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    <link href="css/navbar.css" rel="stylesheet">
    <link rel="icon" href="images/favicon-mdh.png" type="image/png">
    <style>
        body { background: #f3f4f6; }
        .status-container { max-width: 480px; margin: 80px auto; background: #fff; border-radius: 2rem; box-shadow: 0 8px 32px #0001; padding: 2.5rem 2rem; text-align: center; }
        .status-icon { font-size: 3.5rem; margin-bottom: 1rem; }
        .success { color: #22c55e; }
        .error { color: #ef4444; }
        .btn-home { margin-top: 2rem; display: inline-block; background: #1e293b; color: #fff; padding: 0.75rem 2rem; border-radius: 999px; font-weight: bold; text-decoration: none; transition: background 0.2s; }
        .btn-home:hover { background: #facc15; color: #1e293b; }
    </style>
</head>
<body>
    <div class="status-container">
        <?php if ($success): ?>
            <div class="status-icon success"><i class="fas fa-check-circle"></i></div>
            <h1>Paiement confirmé !</h1>
            <p>Merci pour votre don et votre soutien à l'L'Organisation MDH.<br>Un reçu vous sera envoyé par email si vous l'avez demandé.</p>
        <?php else: ?>
            <div class="status-icon error"><i class="fas fa-times-circle"></i></div>
            <h1>Paiement échoué</h1>
            <p>Votre paiement n'a pas pu être confirmé.<br>Merci de réessayer ou de nous contacter en cas de problème.</p>
        <?php endif; ?>
        <a href="index.html" class="btn-home">Retour à l'accueil</a>
    </div>
</body>
</html>
