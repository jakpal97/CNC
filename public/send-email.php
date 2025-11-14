<?php


$recipient_email = 'biuro@emkametal.pl';


$allowed_origins = [
    
    'https://emkametal.pl',
    'https://www.emkametal.pl/kontakt'
];


$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Metoda niedozwolona. Użyj POST.'
    ]);
    exit;
}


$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? 'Nie podano');
$company = trim($_POST['company'] ?? 'Nie podano');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');
$gdprConsent = $_POST['gdprConsent'] ?? 'false';
$marketingConsent = $_POST['marketingConsent'] ?? 'false';
$consentTimestamp = $_POST['consentTimestamp'] ?? date('c');


$errors = [];

if (empty($name)) {
    $errors[] = 'Imię i nazwisko jest wymagane';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Poprawny adres email jest wymagany';
}

if (empty($subject)) {
    $errors[] = 'Temat jest wymagany';
}

if (empty($message)) {
    $errors[] = 'Wiadomość jest wymagana';
}

if ($gdprConsent !== 'true') {
    $errors[] = 'Zgoda RODO jest wymagana';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Błąd walidacji',
        'details' => $errors
    ]);
    exit;
}


$attachment = null;
$attachment_name = '';
$attachment_size = 0;

if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $attachment = $_FILES['file']['tmp_name'];
    $attachment_name = $_FILES['file']['name'];
    $attachment_size = $_FILES['file']['size'];
    
    // Walidacja rozmiaru (max 10MB)
    if ($attachment_size > 10 * 1024 * 1024) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => 'Plik jest zbyt duży. Maksymalny rozmiar to 10MB.'
        ]);
        exit;
    }
}


$email_subject = "Nowe zapytanie: " . $subject;

$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));


$consent_date = date('d.m.Y H:i:s', strtotime($consentTimestamp));

$user_ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['HTTP_X_REAL_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? 'Nieznane';


$html_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #E10600;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            background-color: #f9f9f9;
            padding: 30px;
            border: 1px solid #ddd;
            border-radius: 0 0 5px 5px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #E10600;
        }
        .value {
            margin-top: 5px;
            padding: 10px;
            background-color: white;
            border-left: 3px solid #E10600;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
        }
        .gdpr-section {
            background-color: #e8f5e9;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 5px solid #4caf50;
        }
        .marketing-section {
            background-color: #fff3e0;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 5px solid #ff9800;
        }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Nowe zapytanie kontaktowe</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Imię i nazwisko:</div>
                <div class='value'>$name</div>
            </div>
            
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'><a href='mailto:$email'>$email</a></div>
            </div>
            
            <div class='field'>
                <div class='label'>Telefon:</div>
                <div class='value'>$phone</div>
            </div>
            
            <div class='field'>
                <div class='label'>Firma:</div>
                <div class='value'>$company</div>
            </div>
            
            <div class='field'>
                <div class='label'>Temat:</div>
                <div class='value'>$subject</div>
            </div>
            
            <div class='field'>
                <div class='label'>Wiadomość:</div>
                <div class='value'>$message</div>
            </div>";

if ($attachment) {
    $file_size_kb = round($attachment_size / 1024, 2);
    $html_body .= "
            <div class='field'>
                <div class='label'>Załącznik:</div>
                <div class='value'>📎 $attachment_name ($file_size_kb KB)</div>
            </div>";
}

$html_body .= "
        </div>
        <div class='footer'>
            <hr style='border: none; border-top: 3px solid #E10600; margin: 25px 0;'>
            
            <h2 style='color: #E10600; font-size: 16px; margin-bottom: 15px;'>
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━<br>
                ✅ ZGODA RODO
                <br>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            </h2>
            
            <div class='gdpr-section'>
                <h3 style='color: #2e7d32; margin-top: 0;'>
                    " . ($gdprConsent === 'true' ? '✅ ZGODA WYRAŻONA' : '❌ BRAK ZGODY') . "
                </h3>
                
                <p><strong>Treść zgody:</strong><br>
                \"Wyrażam zgodę na przetwarzanie moich danych osobowych przez eMKa Metal w celu udzielenia odpowiedzi na wysłane zapytanie.\"</p>
                
                <p><strong>Podstawa prawna:</strong><br>
                art. 6 ust. 1 lit. a RODO</p>
                
                <p><strong>Data wyrażenia:</strong><br>
                $consent_date</p>
                
                <p><strong>IP użytkownika:</strong><br>
                $user_ip</p>
            </div>";

if ($marketingConsent === 'true') {
    $html_body .= "
            <div class='marketing-section'>
                <h3 style='color: #e65100; margin-top: 0;'>
                    📧 ZGODA MARKETINGOWA (OPCJONALNA)
                </h3>
                
                <p><strong>Treść zgody:</strong><br>
                \"Wyrażam zgodę na otrzymywanie informacji handlowych od eMKa Metal drogą elektroniczną (newsletter, oferty) zgodnie z ustawą o świadczeniu usług drogą elektroniczną.\"</p>
                
                <p><strong>Status:</strong> ✅ Wyrażona</p>
                
                <p><strong>Data wyrażenia:</strong><br>
                $consent_date</p>
            </div>";
}

$html_body .= "
            <div style='background-color: #ffebee; padding: 15px; border-radius: 5px; border-left: 5px solid #d32f2f; margin-bottom: 20px;'>
                <p style='margin: 0; font-size: 12px; color: #c62828;'>
                    ⚠️ <strong>WAŻNE:</strong> Zachowaj ten email jako dowód wyrażenia zgody zgodnie z art. 7 RODO.
                </p>
            </div>
            
            <hr style='border: none; border-top: 1px solid #ddd; margin: 20px 0;'>
            <p style='font-size: 11px; color: #999; text-align: center;'>
                Ten email został wysłany z formularza kontaktowego na stronie <strong>eMKaMetal</strong><br>
                ul. Kazimierza Zachnika 10, 42-600 Tarnowskie Góry
            </p>
        </div>
    </div>
</body>
</html>
";

// ==================== WYSYŁANIE EMAILA ====================
$boundary = md5(time());

// Nagłówki
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// Treść wiadomości
$email_body = "--$boundary\r\n";
$email_body .= "Content-Type: text/html; charset=UTF-8\r\n";
$email_body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$email_body .= $html_body . "\r\n\r\n";

// Załącznik
if ($attachment && file_exists($attachment)) {
    $file_content = chunk_split(base64_encode(file_get_contents($attachment)));
    $file_type = mime_content_type($attachment);
    
    $email_body .= "--$boundary\r\n";
    $email_body .= "Content-Type: $file_type; name=\"$attachment_name\"\r\n";
    $email_body .= "Content-Transfer-Encoding: base64\r\n";
    $email_body .= "Content-Disposition: attachment; filename=\"$attachment_name\"\r\n\r\n";
    $email_body .= $file_content . "\r\n\r\n";
}

$email_body .= "--$boundary--";

// Wysyłanie
$mail_sent = @mail($recipient_email, $email_subject, $email_body, $headers);

// ==================== ODPOWIEDŹ ====================
if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email został wysłany pomyślnie'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Nie udało się wysłać emaila. Spróbuj ponownie później.'
    ]);
}
?>

