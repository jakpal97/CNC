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
			{/* Subtle gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Content */}
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

						{/* Buttons */}
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

					{/* Right Content - Robot with Stats */}
					<div className="relative flex items-center justify-center" ref={parallaxRef}>
						{/* Main Robot Image */}
						<div className="relative w-full max-w-lg">
							<img
								src="/images/frezarka.png"
								alt="CNC Machine"
								className="w-full h-auto transform hover:scale-105 transition-transform duration-700 z-30"
							/>

							{/* Floating Stat Card - Top Right */}
							<div className="absolute -top-4 -right-4 sm:top-8 sm:right-0 lg:-top-12 lg:-right-12 bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10 animate-float z-20">
								<div className="text-center">
									<div className="text-4xl font-bold text-white mb-2">10+</div>
									<div className="text-sm text-gray-400">{t.years}</div>
								</div>
							</div>

							{/* Floating Stat Card - Bottom Left */}
							<div
								className="absolute -bottom-4 -left-4 sm:bottom-12 sm:left-0 lg:-bottom-15 lg:-left-12 bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10 animate-float -z-10"
								style={{ animationDelay: '1s' }}>
								<div className="text-center">
									<div className="text-4xl font-bold text-white mb-2">1000+</div>
									<div className="text-sm text-gray-400">{t.parts}</div>
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
