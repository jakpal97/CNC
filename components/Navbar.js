'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { locales } from '../lib/i18n'

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
	const { locale, changeLanguage, translations } = useLanguage()
	const t = translations.nav
	const dropdownRef = useRef(null)

	// Zamknij dropdown po kliknięciu poza nim
	useEffect(() => {
		const handleClickOutside = event => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setLanguageDropdownOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const currentLocale = locales.find(l => l.code === locale) || locales[0]

	const menuItems = [
		{ label: t.home, href: '/' },
		{ label: t.services, href: '#services' },
		{ label: t.capabilities, href: '/portfolio' },
		{ label: t.about, href: '#about' },
		{ label: t.contact, href: '#contact' },
	]

	return (
		<nav className="bg-white shadow-lg sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0 flex items-center gap-5">
							<img src='images/logo.jpg' alt='eMKaMetal logo' className='h-10 w-20'/>
							<span className="text-lg sm:text-xl font-bold text-dark">
								eMKa<span className="text-primary">Metal</span>
							</span>
						</div>
					</div>

					<div className="hidden md:flex items-center space-x-4 lg:space-x-8">
						{menuItems.map((item, index) => (
							<a
								key={index}
								href={item.href}
								className="text-dark hover:text-primary px-2 lg:px-3 py-2 font-medium transition-colors text-sm lg:text-base">
								{item.label}
							</a>
						))}

						{/* Language Dropdown - Desktop */}
						<div className="relative" ref={dropdownRef}>
							<button
								onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
								className="flex items-center gap-2 text-dark hover:text-primary px-2 lg:px-3 py-2 font-medium transition-colors text-sm lg:text-base"
								aria-label="Select language">
								<span className="text-lg">{currentLocale.flag}</span>
								<span className="hidden lg:inline">{currentLocale.name}</span>
								<span className="lg:hidden">{currentLocale.code.toUpperCase()}</span>
								<i
									className={`fas fa-chevron-down text-xs transition-transform ${
										languageDropdownOpen ? 'rotate-180' : ''
									}`}></i>
							</button>

							{languageDropdownOpen && (
								<div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
									{locales.map(lang => (
										<button
											key={lang.code}
											onClick={() => {
												changeLanguage(lang.code)
												setLanguageDropdownOpen(false)
											}}
											className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 ${
												locale === lang.code ? 'bg-gray-50 text-primary font-medium' : 'text-gray-700'
											}`}>
											<span className="text-base">{lang.flag}</span>
											<span>{lang.name}</span>
											{locale === lang.code && <i className="fas fa-check ml-auto text-primary text-xs"></i>}
										</button>
									))}
								</div>
							)}
						</div>

						<button className="bg-primary hover:bg-secondary hover:text-primary hover:border-primary border-2 text-white px-3 lg:px-4 py-2 rounded-md font-medium transition duration-300 text-sm lg:text-base cursor-pointer">
							{t.getQuote}
						</button>
					</div>

					<div className="md:hidden flex items-center space-x-2">
						<button
							onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
							className="text-gray-500 hover:text-primary focus:outline-none p-2 relative"
							aria-label="Select language">
							<span className="text-xl">{currentLocale.flag}</span>
						</button>

						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="text-gray-500 hover:text-primary focus:outline-none"
							aria-label="Toggle menu">
							<i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{menuItems.map((item, index) => (
						<a
							key={index}
							href={item.href}
							className="block px-3 py-2 text-base font-medium text-dark hover:text-[#E10600] hover:bg-gray-50 rounded-md transition-colors"
							onClick={() => setMobileMenuOpen(false)}>
							{item.label}
						</a>
					))}
					<button className="w-full bg-[#E10600] hover:bg-white hover:text-primary text-white px-4 py-2 rounded-md font-medium mt-2 transition duration-300">
						{t.getQuote}
					</button>
				</div>
			</div>

			{/* Mobile Language Dropdown */}
			{languageDropdownOpen && (
				<div className="md:hidden bg-white border-t border-b">
					<div className="px-2 py-2 space-y-1">
						{locales.map(lang => (
							<button
								key={lang.code}
								onClick={() => {
									changeLanguage(lang.code)
									setLanguageDropdownOpen(false)
								}}
								className={`w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors flex items-center gap-3 ${
									locale === lang.code ? 'bg-primary text-white' : 'text-dark hover:bg-gray-50 hover:text-primary'
								}`}>
								<span className="text-xl">{lang.flag}</span>
								<span>{lang.name}</span>
								{locale === lang.code && <i className="fas fa-check ml-auto text-sm"></i>}
							</button>
						))}
					</div>
				</div>
			)}
		</nav>
	)
}
