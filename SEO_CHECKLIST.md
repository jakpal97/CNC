# ✅ SEO Checklist - Szybka konfiguracja

## 🚨 WYMAGANE (zrób to TERAZ)

### 1. Zmień URL domeny
📁 Pliki: `app/layout.js`, `lib/structuredData.js`, `app/sitemap.js`

```javascript
// Znajdź i zamień we WSZYSTKICH plikach:
const siteUrl = 'https://emkametal.pl'
// NA:
const siteUrl = 'https://twoja-rzeczywista-domena.pl'
```

---

### 2. Google Search Console
1. 🌐 Idź na: https://search.google.com/search-console
2. ➕ Dodaj swoją domenę
3. 📋 Skopiuj kod weryfikacji
4. 📝 Wklej w `app/layout.js` linia 135:
   ```javascript
   verification: {
       google: 'TUTAJ_WKLEJ_KOD',
   ```

---

### 3. Google Analytics 4
1. 🌐 Idź na: https://analytics.google.com
2. 🆕 Utwórz nową właściwość (GA4)
3. 📋 Skopiuj Measurement ID (np. `G-ABC123XYZ`)
4. 📝 Wklej w `app/layout.js` (2 miejsca - linie 246 i 254):
   ```javascript
   gtag/js?id=G-ABC123XYZ
   gtag('config', 'G-ABC123XYZ'
   ```

---

### 4. Prześlij Sitemap
**DOPIERO PO WDROŻENIU NA SERWER:**

1. Google Search Console → Sitemaps
2. Dodaj URL: `https://twoja-domena.pl/sitemap.xml`
3. Kliknij "Submit"

---

## 📊 ZALECANE (zrób w pierwszym tygodniu)

### 5. Bing Webmaster Tools
🌐 https://www.bing.com/webmasters
- Dodaj domenę
- Skopiuj kod weryfikacji
- Wklej w `app/layout.js` linia 136

---

### 6. Google My Business
🌐 https://business.google.com
- [ ] Zweryfikuj firmę
- [ ] Dodaj zdjęcia (min. 10)
- [ ] Dodaj godziny otwarcia
- [ ] Dodaj opis działalności
- [ ] Wybierz kategorie

---

### 7. Zaktualizuj dane firmy
📁 Plik: `lib/structuredData.js`

```javascript
// Znajdź i zaktualizuj:
telephone: '+48510325466',           // ← Sprawdź numer
email: 'biuro@emkametal.pl',        // ← Sprawdź email
sameAs: [
    'https://www.facebook.com/emkametal',  // ← DODAJ prawdziwy FB
    'https://www.linkedin.com/company/emkametal',  // ← DODAJ prawdziwy LinkedIn
]
```

---

## 🎯 OPCJONALNE (zrób gdy masz czas)

### 8. Facebook Pixel (jeśli używasz reklam FB)
📝 `app/layout.js` linia 272:
```javascript
fbq('init', 'TWOJ_PIXEL_ID');
```
**Jeśli NIE używasz - USUŃ cały blok (linie 261-275)**

---

### 9. Kompresja obrazów
🛠️ Narzędzie: https://tinypng.com lub https://squoosh.app

Skompresuj wszystkie obrazy w:
- `/public/images/`
- `/public/aluminium/`
- `/public/olow/`
- `/public/stal-czarna/`
- `/public/stal-nierdzewna/`
- `/public/tworzywa-sztuczne/`

**Cel:** Zmniejsz rozmiar o 50-70% bez utraty jakości

---

### 10. Dodaj do katalogów
- [ ] Panorama Firm
- [ ] Pkt.pl
- [ ] Golden Line
- [ ] Europages
- [ ] Kompass

---

## 🧪 TESTY (po wdrożeniu)

### Test 1: robots.txt
```
https://twoja-domena.pl/robots.txt
```
✅ Powinien się wyświetlić

---

### Test 2: sitemap.xml
```
https://twoja-domena.pl/sitemap.xml
```
✅ Powinien pokazać XML z listą stron

---

### Test 3: Structured Data
🌐 https://validator.schema.org/
- Wklej URL strony
- ✅ Sprawdź czy nie ma błędów

---

### Test 4: Open Graph
🌐 https://www.opengraph.xyz/
- Wklej URL
- ✅ Sprawdź jak wygląda podgląd na FB/LinkedIn

---

### Test 5: Mobile-Friendly
🌐 https://search.google.com/test/mobile-friendly
- Wklej URL
- ✅ Wynik: "Page is mobile-friendly"

---

### Test 6: PageSpeed
🌐 https://pagespeed.web.dev/
- Wklej URL
- 🎯 Cel: >90 (mobile), >95 (desktop)

---

## 📈 MONITOROWANIE (co tydzień)

### Google Search Console
- [ ] Sprawdź indeksację stron
- [ ] Sprawdź błędy
- [ ] Zobacz pierwsze zapytania

### Google Analytics
- [ ] Zobacz ruch organiczny
- [ ] Sprawdź źródła ruchu
- [ ] Analizuj zachowanie użytkowników

---

## 🎓 NAUKA (przeczytaj w wolnym czasie)

1. 📖 Google SEO Starter Guide
   https://developers.google.com/search/docs/beginner/seo-starter-guide

2. 📖 Schema.org dla beginners
   https://schema.org/docs/gs.html

3. 🎬 YouTube: "SEO for beginners"
   Kanał: Ahrefs, Moz

---

## ❓ FAQ

**Q: Kiedy zobaczę efekty SEO?**  
A: Pierwsze efekty: 2-4 tygodnie. Pełne efekty: 3-6 miesięcy.

**Q: Czy muszę płacić za Google Search Console?**  
A: NIE, to całkowicie darmowe narzędzie.

**Q: Czy muszę mieć Google Analytics?**  
A: Nie jest wymagane, ale BARDZO zalecane. To darmowe i daje cenne dane.

**Q: Jak często aktualizować content?**  
A: Minimum 1x miesięcznie (np. aktualności, realizacje).

**Q: Czy potrzebuję agencji SEO?**  
A: Na start nie. Wszystko podstawowe jest już zrobione. Po 6 miesiącach rozważ audyt.

---

## 🆘 POMOC

**Wszystko zepsułem, co robić?**
1. Wróć do wersji przed zmianami (Git)
2. Przeczytaj `INSTRUKCJA_SEO.md`
3. Sprawdź logi błędów w konsoli

**Strona nie indeksuje się w Google**
1. Sprawdź robots.txt
2. Sprawdź Google Search Console
3. Poczekaj 2-4 tygodnie

**Niska prędkość ładowania**
1. Skompresuj obrazy
2. Włącz CDN (Cloudflare)
3. Sprawdź hosting

---

## ✅ Minimum do startu:

```
☐ Zmieniono URL domeny
☐ Dodano Google Search Console
☐ Dodano Google Analytics
☐ Przesłano sitemap
☐ Przetestowano wszystkie linki
☐ Sprawdzono mobile-friendly
```

**Jak wyżej jest ✅ = możesz publikować! 🚀**

---

Pełna instrukcja: `INSTRUKCJA_SEO.md`

