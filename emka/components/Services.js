import { useLanguage } from '../lib/LanguageContext'

export default function Services() {
	const { translations } = useLanguage()
	const t = translations.services

	const services = [
		{
			icon: 'fa-tools',
			title: t.milling.title,
			description: t.milling.description,
			features: t.milling.features,
		},
		{
			icon: 'fa-circle-notch',
			title: t.turning.title,
			description: t.turning.description,
			features: t.turning.features,
		},
		{
			icon: 'fa-bolt',
			title: t.edm.title,
			description: t.edm.description,
			features: t.edm.features,
		},
	]

	return (
		<section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16">
					<span className="text-primary font-semibold text-sm sm:text-base">{t.tag}</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mt-2">{t.title}</h2>
					<p className="max-w-2xl mx-auto mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base px-4">{t.subtitle}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{services.map((service, index) => (
						<div key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition duration-300">
							<div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
								<i className={`fas ${service.icon} text-primary text-xl text-white sm:text-2xl`}></i>
							</div>
							<h3 className="text-lg sm:text-xl font-bold text-dark mb-2 sm:mb-3">{service.title}</h3>
							<p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
							<ul className="space-y-2">
								{service.features.map((feature, idx) => (
									<li key={idx} className="flex items-start text-sm sm:text-base">
										<i className="fas fa-check text-primary mt-1 mr-2 text-xs sm:text-sm flex-shrink-0"></i>
										<span className="text-gray-600">{feature}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
