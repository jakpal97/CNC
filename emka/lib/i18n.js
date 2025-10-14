import pl from '../locales/pl.json'
import en from '../locales/en.json'
import de from '../locales/de.json'

const translations = {
	pl,
	en,
	de,
}

export const locales = [
	{ code: 'pl', name: 'Polski', flag: '🇵🇱' },
	{ code: 'en', name: 'English', flag: '🇬🇧' },
	{ code: 'de', name: 'Deutsch', flag: '🇩🇪' },
]

export const defaultLocale = 'pl'

export function getTranslations(locale = defaultLocale) {
	return translations[locale] || translations[defaultLocale]
}
