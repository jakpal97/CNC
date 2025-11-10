# 🚀 Instrukcja Wdrożenia na Vercel - eMKaMetal

## ✅ Naprawione Problemy

### 1. **Problem z HTTPS**

- ✅ Usunięto nieprawidłową konfigurację `i18n` z `next.config.js`
- ✅ Dodano `vercel.json` z odpowiednimi headerami HTTPS i HSTS
- ✅ Dodano nagłówki bezpieczeństwa (Strict-Transport-Security, X-Frame-Options, etc.)

### 2. **Problem z Indeksowaniem (Canonical URLs)**

- ✅ Dodano `layout.js` z metadata dla każdej podstrony:
  - `/portfolio` - canonical URL i Open Graph
  - `/contact` - canonical URL i Open Graph
  - `/polityka-prywatnosci` - canonical URL
  - `/regulamin` - canonical URL
- ✅ Naprawiono `sitemap.js` - usunięto nieistniejącą stronę `/machines`
- ✅ Dodano strony do sitemap: `/polityka-prywatnosci` i `/regulamin`

### 3. **Problem ze stroną 404**

- ✅ Przerobiono `not-found.js` na **Server Component** z metadata
- ✅ Utworzono osobny **Client Component** `NotFoundContent.js` dla UI
- ✅ Dodano `middleware.js` dla lepszej obsługi 404 na Vercel
- ✅ Dodano metadata z `robots: { index: false }` dla strony 404

---

## 📋 Kroki Wdrożenia na Vercel

### Krok 1: Przygotowanie projektu

```bash
# Upewnij się, że wszystkie zmiany są commitowane
git add .
git commit -m "Fix: HTTPS headers, canonical URLs, 404 page"
git push origin main
```

### Krok 2: Deploy na Vercel

#### Opcja A: Przez Vercel Dashboard (Łatwiejsze)

1. Idź do [vercel.com](https://vercel.com)
2. Zaloguj się i kliknij **"Add New Project"**
3. Zaimportuj swoje repozytorium z GitHub/GitLab/Bitbucket
4. Vercel automatycznie wykryje Next.js
5. Kliknij **"Deploy"**

#### Opcja B: Przez Vercel CLI

```bash
# Zainstaluj Vercel CLI (jednorazowo)
npm install -g vercel

# Zaloguj się
vercel login

# Deploy
vercel

# Deploy na produkcję
vercel --prod
```

### Krok 3: Sprawdź ustawienia w Vercel Dashboard

Po deploy, idź do **Settings** w Vercel Dashboard:

1. **Domains** → Dodaj swoją domenę `emkametal.pl`
2. **Environment Variables** → Dodaj jeśli potrzebujesz (obecnie brak wymaganych)
3. **Git** → Upewnij się że auto-deploy jest włączony

---

## 🧪 Testowanie Poprawek

### Test 1: HTTPS Headers

Po deploy, sprawdź headers:

```bash
curl -I https://emkametal.pl
```

Powinieneś zobaczyć:

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
```

### Test 2: Strona 404

1. Wejdź na nieistniejącą stronę: `https://emkametal.pl/nieistniejaca-strona`
2. Powinieneś zobaczyć nową stronę 404 z:
   - Dużym numerem **404** (animowany)
   - Linkami do: Strona główna, Portfolio, Kontakt, Usługi
   - Navbar i Footer

### Test 3: Canonical URLs

Sprawdź źródło strony (Ctrl+U) na każdej podstronie:

- `/portfolio` → `<link rel="canonical" href="https://emkametal.pl/portfolio">`
- `/contact` → `<link rel="canonical" href="https://emkametal.pl/contact">`

### Test 4: Sitemap

Wejdź na: `https://emkametal.pl/sitemap.xml`
Powinieneś zobaczyć wszystkie strony BEZ `/machines`

---

## 🔍 Weryfikacja w Google Search Console

### 1. Ponowna weryfikacja stron

Po deploy, idź do [Google Search Console](https://search.google.com/search-console):

1. Kliknij **"URL Inspection"** (Inspekcja adresu URL)
2. Wpisz każdy URL:
   - `https://emkametal.pl/portfolio`
   - `https://emkametal.pl/contact`
   - `https://emkametal.pl/polityka-prywatnosci`
   - `https://emkametal.pl/regulamin`
3. Kliknij **"Request Indexing"** (Poproś o indeksowanie)

### 2. Prześlij sitemap

1. W Google Search Console → **Sitemaps**
2. Dodaj: `https://emkametal.pl/sitemap.xml`
3. Kliknij **"Submit"**

### 3. Sprawdź błędy HTTPS

1. W Google Search Console → **Security & Manual Actions** → **Security Issues**
2. Powinno być: **"No issues detected"**

### 4. Monitoruj canonical URLs

- W ciągu **3-7 dni** Google powinien poprawnie wykryć canonical URLs
- Sprawdzaj w **Coverage** → **Excluded** - błędy powinny zniknąć

---

## 📊 Co się zmieniło w kodzie?

### Nowe pliki:

```
app/portfolio/layout.js          ← Metadata dla portfolio
app/contact/layout.js            ← Metadata dla kontakt
app/polityka-prywatnosci/layout.js  ← Metadata dla polityki
app/regulamin/layout.js          ← Metadata dla regulaminu
components/NotFoundContent.js    ← UI dla strony 404
middleware.js                    ← Middleware dla obsługi requestów
vercel.json                      ← Konfiguracja Vercel
```

### Zmodyfikowane pliki:

```
next.config.js                   ← Usunięto nieprawidłową konfigurację i18n
app/sitemap.js                   ← Naprawiono sitemap (usunięto /machines)
app/not-found.js                 ← Przerobiono na Server Component z metadata
```

---

## 🎯 Oczekiwane Rezultaty

Po deploy i ponownej weryfikacji w Google Search Console (3-7 dni):

### ✅ Problem HTTPS

- **Przed:** "Strony HTTPS nie zostały zweryfikowane"
- **Po:** Wszystkie strony HTTPS zweryfikowane ✓

### ✅ Problem Canonical URLs

- **Przed:** "Alternatywna strona zawierająca prawidłowy tag strony kanonicznej"
- **Po:** Wszystkie strony mają prawidłowe canonical URLs ✓

### ✅ Problem Indeksowania

- **Przed:** "Strony nie są zindeksowane"
- **Po:** Strony są prawidłowo indeksowane przez Google ✓

### ✅ Strona 404

- **Przed:** Brak strony 404 / niepoprawna strona
- **Po:** Profesjonalna strona 404 z linkami nawigacyjnymi ✓

---

## 🆘 Rozwiązywanie Problemów

### Problem: Strona 404 nie działa lokalnie

```bash
# Zrestartuj dev server
npm run dev
```

### Problem: Strona 404 nie działa na Vercel

1. Sprawdź logi build w Vercel Dashboard
2. Upewnij się że `app/not-found.js` jest commitowany
3. Zrób **Redeploy** w Vercel Dashboard

### Problem: Canonical URLs nadal nie działają

1. Sprawdź czy `layout.js` są w odpowiednich folderach
2. Sprawdź źródło strony (Ctrl+U) czy są tagi `<link rel="canonical">`
3. Poczekaj 3-7 dni na ponowne zindeksowanie przez Google

### Problem: Headers HTTPS nie działają

1. Sprawdź czy `vercel.json` jest w głównym katalogu projektu
2. Zrób **Redeploy** w Vercel Dashboard
3. Sprawdź headers komendą: `curl -I https://emkametal.pl`

---

## 📞 Wsparcie

Jeśli masz problemy z deploy:

- Vercel Support: https://vercel.com/support
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

---

## ✨ Następne Kroki (Opcjonalne)

### 1. Dodaj Google Analytics

Zamień w `app/layout.js` (linia 231):

```javascript
// Przed:
gtag('config', 'G-XXXXXXXXXX', {

// Po:
gtag('config', 'G-TWOJ-TRACKING-ID', {
```

### 2. Dodaj Facebook Pixel

Zamień w `app/layout.js` (linia 255):

```javascript
// Przed:
fbq('init', 'TWOJ_FACEBOOK_PIXEL_ID')

// Po:
fbq('init', 'TWOJ-PRAWDZIWY-PIXEL-ID')
```

### 3. Dodaj Google Search Console Verification

W `app/layout.js` (linia 133):

```javascript
verification: {
    google: 'TWOJ-KOD-WERYFIKACJI-GOOGLE',
},
```

---

**✅ Gotowe! Twoja strona jest teraz prawidłowo skonfigurowana dla Vercel!** 🎉
