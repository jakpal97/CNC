'use client'

import { useLanguage } from '../lib/LanguageContext'

export default function Capabilities() {
	const { translations } = useLanguage()
	const t = translations.capabilities

	// Obrazy maszyn CNC
	const machineImages = [
		'/images/image1.jpg', // Frezarki CNC 5-osiowe
		'/images/image2.jpg', // Tokarki CNC
		'/images/image3.jpg', // Centra obróbcze
		'/images/image4.jpg', // Systemy pomiarowe
	]

	return (
		<section id="capabilities" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16">
					<span className="text-[#E10600] font-semibold text-sm sm:text-base uppercase tracking-wide">{t.tag}</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">{t.title}</h2>
					<p className="max-w-2xl mx-auto mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base px-4">{t.subtitle}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
					{t.services.map((service, index) => (
						<div
							key={index}
							className="group relative bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							{/* Machine Image Background */}
							<div className="relative h-64 sm:h-80 overflow-hidden">
								<img
									src={machineImages[index]}
									alt={service.title}
									className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
								/>
								{/* Dark Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
							</div>

							{/* Content */}
							<div className="relative -mt-32 p-6 sm:p-8 z-10">
								<h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#E10600] transition-colors">
									{service.title}
								</h3>
								<p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">{service.description}</p>

								<button
									onClick={() => (window.location.href = '/portfolio')}
									className="inline-flex items-center text-white hover:text-[#E10600] transition-colors text-sm sm:text-base font-semibold group/btn cursor-pointer">
									{service.learnMore}
									<i className="fas fa-arrow-right ml-2 group-hover/btn:translate-x-2 transition-transform"></i>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
