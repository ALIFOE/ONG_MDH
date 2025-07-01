<?php
// paydunya-checkout.php
// Ce script reçoit les données du formulaire, crée une facture PayDunya et redirige vers la page de paiement

// 1. Inclure le SDK PayDunya (à adapter selon votre installation)
require_once __DIR__ . '/vendor/Paydunya/Autoloader.php';
Paydunya_Autoloader::register();

// 2. Configurer vos clés API PayDunya
\Paydunya\Setup::setMasterKey('**************************');
\Paydunya\Setup::setPublicKey('**************************');
\Paydunya\Setup::setPrivateKey('**************************');
\Paydunya\Setup::setToken('**************************');
\Paydunya\Setup::setMode('test'); // ou 'live' en production

// 3. Récupérer les données du formulaire
$amount = isset($_POST['amount']) && $_POST['amount'] ? floatval($_POST['amount']) : 0;
if ($amount <= 0) {
    // Si aucun montant personnalisé, essayer de récupérer le montant bouton
    if (isset($_POST['donation-amount']) && is_numeric($_POST['donation-amount'])) {
        $amount = floatval($_POST['donation-amount']);
    }
}
$firstname = isset($_POST['firstname']) ? $_POST['firstname'] : '';
$lastname = isset($_POST['lastname']) ? $_POST['lastname'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$type = isset($_POST['donation-type']) ? $_POST['donation-type'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';
$tax_receipt = isset($_POST['tax-receipt']) ? 'Oui' : 'Non';

// 4. Créer la facture PayDunya
$invoice = new \Paydunya\Checkout\CheckoutInvoice();
$invoice->addItem("Don à MDH", 1, $amount, $amount, "Don de $firstname $lastname");
$invoice->setDescription("Don $type - $message");
$invoice->setReturnUrl("https://alifoe.github.io/ONG_MDH/payment-status.php?success=1");
$invoice->setCancelUrl("https://alifoe.github.io/ONG_MDH/payment-status.php?success=0");
// $invoice->setCallbackUrl("https://votre-domaine/callback-paydunya.php"); // optionnel
$invoice->setCustomData(["email" => $email, "phone" => $phone, "tax_receipt" => $tax_receipt]);

if ($invoice->create()) {
    header('Location: ' . $invoice->getInvoiceUrl());
    exit;
} else {
    header('Location: payment-status.php?success=0');
    exit;
}
