import { useLanguage } from '../lib/LanguageContext'

export default function Footer() {
	const { translations } = useLanguage()
	const t = translations.footer

	const quickLinks = [
		{ label: translations.nav.home, href: '#home' },
		{ label: translations.nav.services, href: '#services' },
		{ label: translations.nav.capabilities, href: '#capabilities' },
		{ label: translations.nav.about, href: '#about' },
		{ label: translations.nav.contact, href: '#contact' },
	]

	const servicesList = [
		{ label: t.servicesList.milling, href: '#' },
		{ label: t.servicesList.turning, href: '#' },
		{ label: t.servicesList.edm, href: '#' },
		{ label: t.servicesList.prototyping, href: '#' },
		{ label: t.servicesList.production, href: '#' },
	]

	const socialLinks = [
		{ icon: 'fa-facebook-f', href: '#' },
		{ icon: 'fa-twitter', href: '#' },
		{ icon: 'fa-linkedin-in', href: '#' },
		{ icon: 'fa-instagram', href: '#' },
	]

	return (
		<footer className="bg-gray-900 text-white py-8 sm:py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
					<div>
						<div className="flex items-center mb-3 sm:mb-4 gap-5">
							<img src="images/logo.jpg" alt="eMKaMetal logo" className="h-10 w-20" />
							<span className="text-lg sm:text-xl font-bold">
								eMKa<span className="text-primary">Metal</span>
							</span>
						</div>
						<p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{t.description}</p>
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									className="text-gray-400 hover:text-primary transition duration-300"
									aria-label={`Social link ${index + 1}`}>
									<i className={`fab ${social.icon} text-base sm:text-lg`}></i>
								</a>
							))}
						</div>
					</div>

					<div>
						<h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t.quickLinks}</h3>
						<ul className="space-y-2">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-gray-400 hover:text-primary transition duration-300 text-sm sm:text-base">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t.services}</h3>
						<ul className="space-y-2">
							{servicesList.map((service, index) => (
								<li key={index}>
									<a
										href={service.href}
										className="text-gray-400 hover:text-primary transition duration-300 text-sm sm:text-base">
										{service.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">{t.legal.copyright}</p>
					<div className="flex flex-wrap justify-center gap-4 sm:gap-6">
						<a href="#" className="text-gray-400 hover:text-primary transition duration-300 text-xs sm:text-sm">
							{t.legal.privacy}
						</a>
						<a href="#" className="text-gray-400 hover:text-primary transition duration-300 text-xs sm:text-sm">
							{t.legal.terms}
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
