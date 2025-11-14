# 📧 INSTRUKCJA - Wysyłanie emaili przez PHP

## ✅ CO ZOSTAŁO ZMIENIONE:

1. **Utworzony plik**: `public/send-email.php` - skrypt do wysyłania emaili
2. **Zmodyfikowany**: `components/ContactForm.js` - formularz teraz wysyła do PHP zamiast Next.js API

---

## 🧪 JAK PRZETESTOWAĆ NA LOCALHOST (Windows)

### KROK 1: Zainstaluj XAMPP lub WAMP

Pobierz i zainstaluj jeden z programów:

- **XAMPP**: https://www.apachefriends.org/
- **WAMP**: https://www.wampserver.com/

### KROK 2: Uruchom Apache w XAMPP/WAMP

1. Otwórz **XAMPP Control Panel**
2. Kliknij **Start** przy **Apache**
3. Apache powinien być zielony (uruchomiony)

### KROK 3: Skopiuj plik PHP

Skopiuj plik `public/send-email.php` do folderu:

- **XAMPP**: `C:\xampp\htdocs\send-email.php`
- **WAMP**: `C:\wamp64\www\send-email.php`

### KROK 4: Zmień email w pliku PHP

Otwórz `send-email.php` i w linii 16 zmień email:

```php
$recipient_email = 'twoj-email@gmail.com'; // ← WPISZ SWÓJ EMAIL TESTOWY
```

### KROK 5: Dodaj localhost do dozwolonych domen

W pliku `send-email.php` (linia 20) już jest:

```php
$allowed_origins = [
    'http://localhost:3000',  // ← to już jest OK
    'https://twojadomena.pl',
    'https://www.twojadomena.pl'
];
```

### KROK 6: Uruchom aplikację Next.js

W terminalu (w folderze projektu):

```bash
npm run dev
```

### KROK 7: Testuj formularz!

1. Otwórz przeglądarkę: `http://localhost:3000`
2. Przejdź do sekcji kontaktowej
3. Wypełnij formularz i wyślij
4. **UWAGA**: Na localhost funkcja `mail()` może nie działać!
   - Email może nie dotrzeć (to normalne na localhost)
   - Ale możesz sprawdzić w konsoli przeglądarki (F12) czy request się wykonuje

### KROK 8: Sprawdź czy działa

W konsoli przeglądarki (F12 → Console) powinieneś zobaczyć:

- ✅ Status 200 = sukces
- ❌ Status 500 = błąd serwera
- ❌ CORS error = problem z XAMPP/WAMP

---

## 🚀 INSTALACJA NA SERWERZE PRODUKCYJNYM

### DLA INFORMATYKA:

#### KROK 1: Skopiuj plik na serwer

Skopiuj `public/send-email.php` do głównego katalogu strony, np.:

```
/home/user/public_html/send-email.php
```

**LUB** (dla lepszego bezpieczeństwa) poza katalog public:

```
/home/user/scripts/send-email.php
```

(wtedy trzeba dodać rewrite w .htaccess)

#### KROK 2: Zmień email odbiorcy

W pliku `send-email.php` (linia 16):

```php
$recipient_email = 'kontakt@emkametal.pl'; // ← WPISZ WŁAŚCIWY EMAIL
```

#### KROK 3: Dodaj domenę do CORS

W pliku `send-email.php` (linia 20):

```php
$allowed_origins = [
    'http://localhost:3000',
    'https://emkametal.pl',        // ← ZMIEŃ NA SWOJĄ DOMENĘ
    'https://www.emkametal.pl'     // ← ZMIEŃ NA SWOJĄ DOMENĘ
];
```

#### KROK 4: Ustaw uprawnienia

```bash
chmod 644 send-email.php
```

#### KROK 5: Sprawdź czy PHP mail() działa

Utwórz testowy plik `test-mail.php`:

```php
<?php
$to = "twoj-email@example.com";
$subject = "Test email";
$message = "To jest test!";
$headers = "From: noreply@twojadomena.pl";

if (mail($to, $subject, $message, $headers)) {
    echo "Email wysłany!";
} else {
    echo "Błąd wysyłania!";
}
?>
```

Uruchom: `https://twojadomena.pl/test-mail.php`

#### KROK 6: Jeśli mail() nie działa

**Skonfiguruj SMTP** albo zainstaluj **PHPMailer**:

```bash
composer require phpmailer/phpmailer
```

I zmodyfikuj `send-email.php` do używania PHPMailer.

---

## 📦 CO WYSŁAĆ INFORMATYKOWI NA SERWER

Wyślij te pliki/foldery:

```
✅ .next/              (zbudowana aplikacja)
✅ public/             (zdjęcia + send-email.php)
✅ locales/            (tłumaczenia)
✅ package.json
✅ package-lock.json
✅ next.config.js
✅ middleware.js
✅ postcss.config.mjs
✅ jsconfig.json

❌ NIE wysyłaj: node_modules/, app/, components/, lib/
```

**Plik `send-email.php` już jest w folderze `public/`!**

---

## ⚠️ WAŻNE UWAGI

### Dla testowania lokalnego:

- Funkcja `mail()` na localhost **nie będzie wysyłać prawdziwych emaili**
- Sprawdź w konsoli przeglądarki czy request się wykonuje
- Możesz zainstalować **MailHog** lub **Papercut** do testowania emaili lokalnie

### Dla serwera produkcyjnego:

- Upewnij się, że serwer ma włączoną funkcję `mail()`
- Jeśli hosting blokuje `mail()`, poproś informatyka o dane SMTP
- Emaile mogą trafiać do SPAM - dodaj SPF/DKIM w DNS (opcjonalnie)

### Bezpieczeństwo:

- ✅ Skrypt ma walidację danych
- ✅ Zabezpieczenie przed XSS
- ✅ Limit rozmiaru pliku (10MB)
- ✅ CORS tylko dla dozwolonych domen
- ✅ Walidacja RODO/GDPR

---

## 🐛 ROZWIĄZYWANIE PROBLEMÓW

### Błąd: "CORS error"

**Rozwiązanie**: Dodaj domenę do `$allowed_origins` w `send-email.php`

### Błąd: "Cannot find send-email.php"

**Rozwiązanie**: Sprawdź czy plik jest w odpowiednim katalogu

### Email nie dociera

**Rozwiązanie**:

1. Sprawdź folder SPAM
2. Sprawdź czy `mail()` działa na serwerze
3. Poproś informatyka o logi serwera

### Błąd: "File upload failed"

**Rozwiązanie**: Zwiększ `upload_max_filesize` i `post_max_size` w php.ini

---

## 📞 KONTAKT

W razie problemów:

- Sprawdź konsołę przeglądarki (F12)
- Sprawdź logi błędów PHP na serwerze
- Skontaktuj się z informatykiem

---

**Powodzenia! 🚀**
