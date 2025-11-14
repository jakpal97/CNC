'use client'

import { useLanguage } from '../lib/LanguageContext'
import { useEffect, useRef } from 'react'

export default function Hero() {
	const { translations } = useLanguage()
	const t = translations.hero
	const parallaxRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			if (!parallaxRef.current) return

			const scrolled = window.pageYOffset
			const parallax = scrolled * 0.3
			parallaxRef.current.style.transform = `translateY(${parallax}px)`
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900">
			
			<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:py-16 lg:-mt-20 pb-8 sm:pb-12 mb-24 sm:mb-32 lg:mb-40">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					
					<div className="space-y-8">
						<div className="space-y-6">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
								{t.title}{' '}
								<span className="relative inline-block">
									<span className="text-white">{t.titleHighlight}</span>
								</span>
							</h1>

							<p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">{t.subtitle}</p>
						</div>

						
						<div className="flex flex-wrap gap-4">
							<button className="bg-[#E10600] hover:bg-white hover:text-[#E10600] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-base shadow-lg ">
								{t.requestQuote || 'Get Started'}
							</button>

							<button className="group bg-transparent text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-base flex items-center hover:translate-x-1">
								{t.ourCapabilities || 'Learn More'}
								<i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
							</button>
						</div>
					</div>

					
					<div className="relative flex items-center justify-center lg:min-h-[750px] -mx-4 sm:mx-0" ref={parallaxRef}>
						
						<div className="relative w-full max-w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
							<img
								src="/images/wewnatrz.jpg"
								alt="CNC Machine"
								className="w-full h-auto transform hover:scale-105 transition-transform duration-700 rounded-2xl shadow-2xl"
							/>

							
							<div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 xl:-top-4 xl:-right-4 bg-slate-800/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl border border-white/10 animate-float z-20">
								<div className="text-center">
									<div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">10+</div>
									<div className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">{t.years}</div>
								</div>
							</div>

							
							<div
								className="absolute bottom-2 left-4 sm:bottom-4 sm:left-6 lg:bottom-6 lg:left-8 xl:-bottom-8 xl:-left-4 2xl:-bottom-12 bg-slate-800/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl border border-white/10 animate-float z-20"
								style={{ animationDelay: '1s' }}>
								<div className="text-center">
									<div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">1000000+</div>
									<div className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">{t.parts}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-20px);
					}
				}

				.animate-float {
					animation: float 3s ease-in-out infinite;
				}
			`}</style>
		</section>
	)
}
