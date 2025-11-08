'use client'

import { useLanguage } from '../lib/LanguageContext'
import ContactForm from './ContactForm'

export default function Contact() {
	const { translations } = useLanguage()
	const t = translations.contact

	const contactInfo = [
		{
			icon: 'fa-map-marker-alt',
			title: t.info.location.title,
			content: t.info.location.address,
		},
		{
			icon: 'fa-phone-alt',
			title: t.info.phone.title,
			content: `${t.info.phone.main}\n${t.info.phone.sales}`,
		},
		{
			icon: 'fa-envelope',
			title: t.info.email.title,
			content: t.info.email.sales,
		},
		{
			icon: 'fa-clock',
			title: t.info.hours.title,
			content: `${t.info.hours.weekdays}\n${t.info.hours.weekend}`,
		},
	]

	return (
		<section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
					<div className="lg:w-1/2">
						<span className="text-primary font-semibold text-sm sm:text-base">{t.tag}</span>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mt-2 mb-4 sm:mb-6">{t.title}</h2>
						<p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">{t.subtitle}</p>

						<div className="space-y-4 sm:space-y-6">
							{contactInfo.map((info, index) => (
								<div key={index} className="flex gap-3 sm:gap-4">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-primary text-white">
											<i className={`fas ${info.icon} text-sm sm:text-base`}></i>
										</div>
									</div>
									<div>
										<h4 className="text-base sm:text-lg font-medium text-dark">{info.title}</h4>
										<p className="text-gray-600 mt-1 whitespace-pre-line text-sm sm:text-base">{info.content}</p>
									</div>
								</div>
							))}
						</div>

						{/* Zdjęcie firmy */}
						<div className="mt-6 sm:mt-8 rounded-xl overflow-hidden shadow-lg">
							<img 
								src="/images/zewnatrz.jpg" 
								alt="eMKa Metal - Zakład produkcyjny" 
								className="w-full h-64 sm:h-80 object-cover"
							/>
						</div>
					</div>

					<div className="lg:w-1/2">
						<ContactForm variant="light" />
					</div>
				</div>
			</div>
		</section>
	)
}
