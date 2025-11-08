# 📊 Instrukcja optymalizacji SEO - eMKaMetal

## ✅ Co zostało zoptymalizowane?

### 1. **Meta Tags i Metadata (app/layout.js)**

✅ Rozszerzone meta tagi z 40+ słowami kluczowymi  
✅ Open Graph tags dla social media  
✅ Twitter Cards  
✅ Canonical URLs  
✅ Alternate languages (hreflang)  
✅ Geo tags (lokalizacja firmy)  
✅ Business info tags  
✅ Rating tags  
✅ Apple Web App meta tagi

### 2. **Structured Data - JSON-LD (lib/structuredData.js)**

✅ Organization Schema  
✅ LocalBusiness Schema  
✅ Service Schema  
✅ FAQ Schema  
✅ Breadcrumb Schema  
✅ Aggregate Rating

### 3. **Technical SEO**

✅ robots.txt  
✅ sitemap.xml (dynamiczny)  
✅ manifest.json (PWA)  
✅ DNS Prefetch  
✅ Preconnect  
✅ Security headers  
✅ Cache headers  
✅ Redirects

### 4. **Performance**

✅ Image optimization (AVIF, WebP)  
✅ Code splitting  
✅ Minification  
✅ Lazy loading  
✅ Compression

---

## 🎯 Akcje do wykonania

### KROK 1: Zmień URL domeny

W plikach zamień `https://emkametal.pl` na swoją faktyczną domenę:

**Pliki do edycji:**

- `app/layout.js` (linia 6)
- `lib/structuredData.js` (wszystkie wystąpienia)
- `app/sitemap.js` (linia 2)

```javascript
// Przed:
const siteUrl = 'https://emkametal.pl'

// Po:
const siteUrl = 'https://twoja-domena.pl'
```

---

### KROK 2: Dodaj kody weryfikacji

#### Google Search Console

1. Idź na: https://search.google.com/search-console
2. Dodaj swoją domenę
3. Wybierz metodę weryfikacji "Meta tag HTML"
4. Skopiuj kod weryfikacji

W `app/layout.js` zamień:

```javascript
verification: {
    google: 'twój-kod-weryfikacji-google', // ← ZAMIEŃ
    ...
}
```

#### Bing Webmaster Tools

1. Idź na: https://www.bing.com/webmasters
2. Dodaj domenę
3. Skopiuj kod weryfikacji

---

### KROK 3: Skonfiguruj Google Analytics

1. Utwórz konto GA4: https://analytics.google.com
2. Skopiuj Measurement ID (wygląda jak: `G-XXXXXXXXXX`)

W `app/layout.js` zamień (2 miejsca):

```javascript
// Linia 246 i 254:
gtag/js?id=G-XXXXXXXXXX  // ← ZAMIEŃ na swój ID
gtag('config', 'G-XXXXXXXXXX'  // ← ZAMIEŃ na swój ID
```

---

### KROK 4: Facebook Pixel (opcjonalnie)

Jeśli używasz reklam na Facebooku:

1. Facebook Business Manager → Events Manager
2. Skopiuj Pixel ID

W `app/layout.js` zamień:

```javascript
fbq('init', 'TWOJ_FACEBOOK_PIXEL_ID') // ← ZAMIEŃ
```

**Jeśli nie używasz FB Pixel - usuń cały skrypt (linie 261-275)**

---

### KROK 5: Zaktualizuj dane firmy

W `lib/structuredData.js` zaktualizuj:

```javascript
// Social media (dodaj prawdziwe linki)
sameAs: [
    'https://www.facebook.com/emkametal',  // ← ZMIEŃ
    'https://www.linkedin.com/company/emkametal',  // ← ZMIEŃ
    'https://maps.google.com/?q=eMKaMetal+Tarnowskie+Góry',
],

// Rating (jeśli masz prawdziwe recenzje)
aggregateRating: {
    ratingValue: '4.9',  // ← Zmień na rzeczywistą ocenę
    reviewCount: '87',   // ← Zmień na rzeczywistą liczbę opinii
}
```

---

### KROK 6: Weryfikacja Google Maps

1. Google My Business: https://business.google.com
2. Dodaj/zweryfikuj firmę
3. Upewnij się, że dane zgadzają się z `lib/structuredData.js`:
   - Adres
   - Telefon
   - Godziny otwarcia
   - Kategoria działalności

---

### KROK 7: Prześlij sitemap do Google

Po wdrożeniu:

1. Google Search Console → Sitemaps
2. Dodaj URL: `https://twoja-domena.pl/sitemap.xml`
3. Kliknij "Submit"

Zrób to samo w Bing Webmaster Tools.

---

## 📊 Monitorowanie SEO

### Google Search Console

- Sprawdzaj indeksację stron
- Monitoruj błędy
- Analizuj zapytania
- Sprawdzaj Core Web Vitals

### Google Analytics

- Ruch organiczny
- Źródła ruchu
- Zachowanie użytkowników
- Konwersje

### PageSpeed Insights

https://pagespeed.web.dev/

Sprawdzaj prędkość ładowania:

- Mobile: cel >90
- Desktop: cel >95

---

## 🔍 Testowanie SEO

### 1. Test Structured Data

https://validator.schema.org/

Wklej URL strony i sprawdź czy JSON-LD jest poprawny.

### 2. Test Open Graph

https://www.opengraph.xyz/

Sprawdź jak strona wygląda na social media.

### 3. Test Mobile-Friendly

https://search.google.com/test/mobile-friendly

Upewnij się, że strona jest mobile-friendly.

### 4. Test Robots.txt

```
https://twoja-domena.pl/robots.txt
```

Sprawdź czy plik jest dostępny.

### 5. Test Sitemap

```
https://twoja-domena.pl/sitemap.xml
```

Sprawdź czy sitemap jest generowany poprawnie.

---

## 📈 Słowa kluczowe

### Główne frazy (dodane w metadata):

1. **obróbka CNC** - główna fraza
2. **frezowanie CNC** - usługa #1
3. **toczenie CNC** - usługa #2
4. **frezowanie 5-osiowe** - specjalizacja
5. **obróbka metali Tarnowskie Góry** - lokalna SEO
6. **obróbka aluminium CNC** - materiał #1
7. **obróbka stali CNC** - materiał #2
8. **Hurco VMX42SR** - sprzęt (niszowa fraza)
9. **tolerancje ±0.003mm** - precyzja (unique selling point)
10. **produkcja seryjna CNC** - typ produkcji

### Long-tail keywords (dodane):

- "precyzyjna obróbka CNC Śląsk"
- "frezowanie 5-osiowe aluminium"
- "toczenie z przeciwwrzecionem Polska"
- "obróbka CNC małe serie"
- "prototypy CNC Tarnowskie Góry"

---

## 🎯 Lokalne SEO

### Google My Business (GMB)

1. Uzupełnij wszystkie informacje
2. Dodaj zdjęcia (min. 10)
3. Regularnie publikuj posty
4. Zbieraj opinie od klientów
5. Odpowiadaj na opinie

### Lokalne katalogi

Dodaj firmę do:

- Panorama Firm
- Pkt.pl
- Golden Line
- Europages
- Kompass
- ThomasNet (dla eksportu)

---

## 📝 Content Marketing (zalecenia na przyszłość)

### Blog / Aktualności

Tematy do rozwinięcia:

1. "Czym różni się frezowanie 3, 4 i 5-osiowe?"
2. "Jakie tolerancje są możliwe w obróbce CNC?"
3. "Aluminium vs stal - który materiał wybrać?"
4. "Jak przygotować rysunki CAD do obróbki CNC?"
5. "Produkcja prototypowa vs seryjna - co wybrać?"
6. "Case study: Realizacja projektu dla branży lotniczej"

### FAQ (dodaj na stronę)

Pytania już dodane w JSON-LD:

- Jakie materiały obrabiamy?
- Jakie tolerancje zapewniamy?
- Czy realizujemy zamówienia prototypowe?
- Jaki jest czas realizacji?
- Czy eksportujemy poza Polskę?

---

## 🔗 Link Building

### Strategia pozyskiwania linków:

1. **Katalogi branżowe** - wymienione wyżej
2. **Współpraca z klientami** - case studies
3. **Artykuły eksperckie** - publikacje w branżowych portalach
4. **Wywiady** - dla lokalnych mediów
5. **Webinary** - jako ekspert z branży
6. **YouTube** - nagrania z produkcji

---

## ⚡ Optymalizacja wydajności

### Obecny stan:

✅ Image optimization (WebP, AVIF)  
✅ Code splitting  
✅ Lazy loading  
✅ Minification  
✅ Compression  
✅ Cache headers

### Do zrobienia:

- [ ] Skompresuj wszystkie obrazy w /public/images
- [ ] Rozważ CDN (np. Cloudflare)
- [ ] Włącz HTTP/2 lub HTTP/3 na serwerze

---

## 🚀 Wdrożenie

### Przed publikacją:

- [ ] Zamień wszystkie placeholder URL na rzeczywiste
- [ ] Dodaj prawdziwe kody GA4 i weryfikacji
- [ ] Zaktualizuj dane firmy w structuredData.js
- [ ] Przetestuj wszystkie linki
- [ ] Sprawdź robots.txt
- [ ] Sprawdź sitemap.xml
- [ ] Przetestuj na mobile

### Po publikacji:

- [ ] Prześlij sitemap do Google/Bing
- [ ] Zweryfikuj Google Search Console
- [ ] Zweryfikuj Bing Webmaster Tools
- [ ] Skonfiguruj Google My Business
- [ ] Dodaj do katalogów branżowych
- [ ] Zacznij zbierać opinie

---

## 📊 KPI do monitorowania

### Miesiąc 1-3:

- Indeksacja wszystkich stron (Google Search Console)
- Pierwsze zapytania organiczne
- Pozycje dla brand keywords

### Miesiąc 3-6:

- Top 20 dla głównych fraz lokalnych
- 50-100 sesji organicznych miesięcznie
- CTR >2% w wynikach wyszukiwania

### Miesiąc 6-12:

- Top 10 dla głównych fraz lokalnych
- Top 20 dla fraz ogólnopolskich
- 200-500 sesji organicznych miesięcznie
- 5-10 zapytań kontaktowych z organic

---

## 🆘 Pomoc

### Narzędzia SEO (darmowe):

- Google Search Console
- Google Analytics
- Bing Webmaster Tools
- Google PageSpeed Insights
- Schema.org Validator
- Mobile-Friendly Test
- Lighthouse (w Chrome DevTools)

### Dalsze zasoby:

- Moz Beginner's Guide to SEO
- Google SEO Starter Guide
- Ahrefs Blog (free content)

---

## ✅ Checklist ostateczny

**Technical SEO:**

- [x] robots.txt
- [x] sitemap.xml
- [x] manifest.json
- [x] Meta tags (title, description)
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Structured Data (JSON-LD)
- [x] Canonical URLs
- [x] Hreflang tags
- [x] Security headers
- [x] Performance optimization

**Do zrobienia przez Ciebie:**

- [ ] Zmień URL na prawdziwy
- [ ] Dodaj kody weryfikacji (Google, Bing)
- [ ] Skonfiguruj Google Analytics
- [ ] Zaktualizuj dane firmy
- [ ] Prześlij sitemap
- [ ] Zweryfikuj Google My Business
- [ ] Dodaj do katalogów
- [ ] Zacznij zbierać opinie

---

## 🎉 Gotowe!

Strona jest w **100% gotowa pod SEO**. Wszystkie najważniejsze elementy są wdrożone. Teraz potrzebujesz tylko:

1. Zamienić placeholder dane na prawdziwe
2. Regularnie tworzyć content
3. Budować linki
4. Zbierać opinie

**Powodzenia w rankingu Google!** 🚀
