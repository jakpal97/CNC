'use client'

import { useLanguage } from '../lib/LanguageContext'
import { useEffect, useRef } from 'react'

export default function CTA() {
	const { translations } = useLanguage()
	const t = translations.cta
	const parallaxRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			if (!parallaxRef.current) return

			const scrolled = window.pageYOffset
			const rect = parallaxRef.current.getBoundingClientRect()
			const offsetTop = rect.top + scrolled
			const elementHeight = rect.height

			// Sprawdź czy element jest w viewport
			if (scrolled + window.innerHeight > offsetTop && scrolled < offsetTop + elementHeight) {
				const parallax = (scrolled - offsetTop) * 0.5
				parallaxRef.current.style.transform = `translateY(${parallax}px)`
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
			{/* Background Image with Parallax */}
			<div className="absolute inset-0 z-0 will-change-transform">
				<div
					ref={parallaxRef}
					className="absolute inset-0 w-full h-[120%] -top-[10%]"
					style={{
						backgroundImage: 'url(/images/paralel.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						transition: 'transform 0.1s ease-out',
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<div className="max-w-2xl">
					{/* Text Box with fade-in animation */}
					<div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 transform transition-all duration-700 hover:bg-opacity-90">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
							{t.title}
						</h2>
						<p className="text-gray-200 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">{t.subtitle}</p>

						{/* Buttons */}
						<div className="flex flex-col sm:flex-row gap-4">
							<button
								onClick={() => (window.location.href = '/contact')}
								className="bg-primary hover:bg-white hover:text-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition duration-300 text-sm sm:text-base flex items-center justify-center group cursor-pointer">
								{t.requestQuote}
								<i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
							</button>
							<button
								onClick={() => (window.location.href = '/portfolio')}
								className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition duration-300 text-sm sm:text-base flex items-center justify-center group cursor-pointer">
								{t.learnMore}
								<i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
