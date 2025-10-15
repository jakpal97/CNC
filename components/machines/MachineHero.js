import { useLanguage } from '../../lib/LanguageContext'

export default function MachineHero() {
	const { translations } = useLanguage()
	const t = translations.machinesPage

	return (
		<section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
			{/* Animated background pattern */}
			<div className="absolute inset-0 opacity-10">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
				<div className="text-center">
					{/* Animated badge */}
					

					{/* Main title with animation */}
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
						{t.hero.title}
					</h1>

					{/* Subtitle */}
					<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up animation-delay-200">
						{t.hero.subtitle}
					</p>

					{/* Stats */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 animate-fade-in animation-delay-400">
						{t.hero.stats.map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-3xl sm:text-4xl font-bold text-[#E10600] mb-2">{stat.value}</div>
								<div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			

			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}

				@keyframes slide-up {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fade-in {
					animation: fade-in 0.8s ease-out forwards;
				}

				.animate-slide-up {
					animation: slide-up 0.8s ease-out forwards;
				}

				.animation-delay-200 {
					animation-delay: 0.2s;
					opacity: 0;
				}

				.animation-delay-400 {
					animation-delay: 0.4s;
					opacity: 0;
				}

				.animation-delay-1000 {
					animation-delay: 1s;
				}
			`}</style>
		</section>
	)
}
