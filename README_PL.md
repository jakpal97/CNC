# ExactCut Parts - Projekt Next.js

## 🎯 Opis Projektu

Profesjonalna strona internetowa dla firmy zajmującej się precyzyjną obróbką CNC, zbudowana w Next.js 15 z Tailwind CSS 4.0.

### ✨ Funkcjonalności

- ✅ **Wielojęzyczność**: Polski (język domyślny), angielski i niemiecki z eleganckim dropdown menu
- ✅ **Responsywność**: Optymalizacja dla urządzeń mobilnych, tabletów i desktopów
- ✅ **Komponenty modułowe**: Każda sekcja jako osobny komponent
- ✅ **Nawigacja sticky**: Menu pozostaje na górze podczas przewijania
- ✅ **Formularz kontaktowy**: Z możliwością przesyłania plików PDF/CAD
- ✅ **Animacje**: Płynne przejścia i efekty hover
- ✅ **SEO-friendly**: Optymalizacja dla wyszukiwarek

## 🚀 Uruchomienie Projektu

### 1. Zainstaluj zależności (jeśli nie zainstalowane)

```bash
cd emka
npm install
```

### 2. Uruchom serwer deweloperski

```bash
npm run dev
```

### 3. Otwórz przeglądarkę

Przejdź do [http://localhost:32145](http://localhost:32145)

## 📁 Struktura Projektu

```
emka/
├── app/
│   ├── globals.css          # Globalne style + konfiguracja Tailwind
│   ├── layout.js            # Layout strony z LanguageProvider
│   └── page.js              # Główna strona (wszystkie komponenty)
├── components/
│   ├── Navbar.js            # Nawigacja z przełącznikiem języka
│   ├── Hero.js              # Sekcja hero
│   ├── TrustedBy.js         # Sekcja zaufanych firm
│   ├── Services.js          # Usługi CNC
│   ├── Capabilities.js      # Usługi systemów wysokiej wydajności (4 karty z robotami)
│   ├── Portfolio.js         # Portfolio wykonanych części
│   ├── About.js             # O firmie
│   ├── Testimonials.js      # Opinie klientów
│   ├── CTA.js               # Call-to-action
│   ├── Contact.js           # Formularz kontaktowy
│   └── Footer.js            # Stopka
├── lib/
│   ├── i18n.js              # Konfiguracja tłumaczeń
│   └── LanguageContext.js   # Context API dla języków
└── locales/
    ├── pl.json              # Tłumaczenia polskie
    ├── en.json              # Tłumaczenia angielskie
    └── de.json              # Tłumaczenia niemieckie
```

## 🌍 Zmiana Języka

Użytkownicy mogą wybierać spośród trzech języków (Polski, English, Deutsch):

- **Desktop**: Dropdown menu z flagami i nazwami języków w nawigacji (prawy górny róg)
- **Mobile**: Dropdown menu z flagami po kliknięciu ikony flagi obok menu hamburger
- Aktywny język jest oznaczony ikoną checkmark
- Menu zamyka się automatycznie po wyborze lub kliknięciu poza nim

## 📱 Responsywność

Strona jest w pełni responsywna dla następujących breakpointów:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 🎨 Kolory

Projekt używa następujących kolorów:

- **Primary**: `#2563eb` (niebieski)
- **Secondary**: `#1e40af` (ciemny niebieski)
- **Accent**: `#3b82f6` (jasny niebieski)
- **Dark**: `#1e293b` (ciemny szary)
- **Light**: `#f8fafc` (jasny szary)

## 📧 Formularz Kontaktowy

Formularz w sekcji Contact obsługuje:

- Pola: Imię, Email, Telefon, Firma, Temat, Wiadomość
- **Upload plików**: PDF, DWG, DXF, STEP, STP, IGS, IGES
- Walidacja po stronie klienta
- Pola wymagane oznaczone `*`

## 🔧 Dostosowanie

### Zmiana kolorów

Edytuj plik `app/globals.css` w sekcji `@theme inline`:

```css
@theme inline {
	--color-primary: #twój-kolor;
	--color-secondary: #twój-kolor;
	/* ... */
}
```

### Dodawanie nowych tłumaczeń

1. Edytuj pliki w folderze `locales/`:

   - `pl.json` - polski
   - `en.json` - angielski
   - `de.json` - niemiecki

2. Dodaj nowy klucz i wartości we wszystkich plikach językowych

3. Użyj w komponencie:

```javascript
const { translations } = useLanguage()
const t = translations
// Dostęp: t.twójKlucz.zagnieżdżonyKlucz
```

### Dodawanie nowego języka

1. Stwórz nowy plik w `locales/`, np. `es.json` (hiszpański)
2. Dodaj język do `lib/i18n.js`:

```javascript
import es from '../locales/es.json'

const translations = {
	pl,
	en,
	de,
	es,
}

export const locales = [
	{ code: 'pl', name: 'Polski', flag: '🇵🇱' },
	{ code: 'en', name: 'English', flag: '🇬🇧' },
	{ code: 'de', name: 'Deutsch', flag: '🇩🇪' },
	{ code: 'es', name: 'Español', flag: '🇪🇸' },
]
```

3. Nowy język pojawi się automatycznie w dropdown menu

## 🚀 Budowanie dla Produkcji

```bash
npm run build
npm run start
```

## 📝 Notatki

- Font Awesome 6.4.0 jest załadowany z CDN
- Projekt używa Tailwind CSS 4.0 (nowa składnia `@theme inline`)
- Next.js 15.5.5 z React 19.1.0
- Smooth scroll jest zaimplementowany w `layout.js`

## 🐛 Rozwiązywanie Problemów

### Problem: Tailwind nie działa

```bash
npm install
```

### Problem: Brak ikon Font Awesome

Sprawdź czy link do Font Awesome jest w `layout.js`

### Problem: Błędy ESLint

```bash
npm run lint
```

## 📞 Wsparcie

W razie problemów sprawdź:

- Dokumentację Next.js: https://nextjs.org/docs
- Dokumentację Tailwind CSS: https://tailwindcss.com/docs
