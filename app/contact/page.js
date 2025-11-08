'use client'

import { useLanguage } from '../../lib/LanguageContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
	const { translations } = useLanguage()
	const t = translations.contact

	return (
		<div className="min-h-screen bg-slate-900 text-white">
			<Navbar />
			{/* Hero Section */}
			<section className="py-16 sm:py-20 bg-gradient-to-b from-slate-800 to-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<span className="text-[#E10600] font-semibold text-sm sm:text-base uppercase tracking-wide">{t.tag}</span>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">{t.title}</h1>
					<p className="max-w-2xl mx-auto text-gray-300 text-lg">{t.subtitle}</p>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="text-2xl font-bold text-white mb-6">Informacje kontaktowe</h2>

								{/* Location */}
								<div className="flex items-start space-x-4 mb-6">
									<div className="flex-shrink-0 w-12 h-12 bg-[#E10600] rounded-lg flex items-center justify-center">
										<i className="fas fa-map-marker-alt text-white text-lg"></i>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">{t.info.location.title}</h3>
										<p className="text-gray-300 whitespace-pre-line">{t.info.location.address}</p>
									</div>
								</div>

								{/* Phone */}
								<div className="flex items-start space-x-4 mb-6">
									<div className="flex-shrink-0 w-12 h-12 bg-[#E10600] rounded-lg flex items-center justify-center">
										<i className="fas fa-phone text-white text-lg"></i>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">{t.info.phone.title}</h3>
										<p className="text-gray-300">{t.info.phone.main}</p>
										<p className="text-gray-300">{t.info.phone.sales}</p>
									</div>
								</div>

								{/* Email */}
								<div className="flex items-start space-x-4 mb-6">
									<div className="flex-shrink-0 w-12 h-12 bg-[#E10600] rounded-lg flex items-center justify-center">
										<i className="fas fa-envelope text-white text-lg"></i>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">{t.info.email.title}</h3>
										<p className="text-gray-300">{t.info.email.sales}</p>
									</div>
								</div>

								{/* Hours */}
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-12 h-12 bg-[#E10600] rounded-lg flex items-center justify-center">
										<i className="fas fa-clock text-white text-lg"></i>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">{t.info.hours.title}</h3>
										<p className="text-gray-300">{t.info.hours.weekdays}</p>
										<p className="text-gray-300">{t.info.hours.weekend}</p>
									</div>
								</div>
							</div>

							{/* Zdjęcie firmy */}
							<div className="mt-8 rounded-xl overflow-hidden shadow-2xl">
								<img 
									src="/images/zewnatrz.jpg" 
									alt="eMKa Metal - Zakład produkcyjny" 
									className="w-full h-64 sm:h-80 object-cover"
								/>
							</div>
						</div>

						{/* Contact Form */}
						<ContactForm variant="dark" />
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
