'use client'

import { createContext, useContext, useState } from 'react'
import { getTranslations, defaultLocale } from './i18n'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
	const [locale, setLocale] = useState(defaultLocale)
	const translations = getTranslations(locale)

	const changeLanguage = newLocale => {
		setLocale(newLocale)
	}

	return (
		<LanguageContext.Provider value={{ locale, setLocale, translations, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
