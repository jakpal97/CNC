

import { useLanguage } from '../lib/LanguageContext'

export default function About() {
	const { translations } = useLanguage()
	const t = translations.about

	const features = [
		{
			icon: 'fa-medal',
			title: t.features.certified.title,
			description: t.features.certified.description,
		},
		{
			icon: 'fa-user-tie',
			title: t.features.skilled.title,
			description: t.features.skilled.description,
		},
		{
			icon: 'fa-chart-line',
			title: t.features.improvement.title,
			description: t.features.improvement.description,
		},
	]

	return (
		<section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
					<div className="lg:w-1/2">
						<span className="text-primary font-semibold text-sm sm:text-base">{t.tag}</span>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-4 sm:mb-6">{t.title}</h2>
						<p className="text-white mb-4 sm:mb-6 text-sm sm:text-base">{t.description}</p>

						<div className="space-y-4 sm:space-y-6">
							{features.map((feature, index) => (
								<div key={index} className="flex gap-3 sm:gap-4">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-primary text-white">
											<i className={`fas ${feature.icon} text-sm sm:text-base`}></i>
										</div>
									</div>
									<div>
										<h4 className="text-base sm:text-lg font-medium text-white">{feature.title}</h4>
										<p className="text-white mt-1 text-sm sm:text-base">{feature.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="lg:w-1/2 relative w-full">
						<div className="bg-white p-2 rounded-xl shadow-xl">
							<img
								src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
								alt="CNC Machine Shop"
								className="w-full h-auto rounded-lg"
							/>
						</div>
						<div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-primary text-white p-3 sm:p-4 rounded-lg shadow-lg hidden md:block">
							<div className="text-2xl sm:text-3xl font-bold">10+</div>
							<div className="text-xs sm:text-sm">{t.stats.years}</div>
						</div>
						<div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white text-primary p-3 sm:p-4 rounded-lg shadow-lg hidden md:block">
							<div className="text-2xl sm:text-3xl font-bold">1000+</div>
							<div className="text-xs sm:text-sm">{t.stats.parts}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
