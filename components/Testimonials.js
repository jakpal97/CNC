'use client'

import { useLanguage } from '../lib/LanguageContext'

export default function Testimonials() {
	const { translations } = useLanguage()
	const t = translations.testimonials

	const testimonials = [
		{
			...t.reviews[0],
			image: 'https://randomuser.me/api/portraits/men/32.jpg',
			stars: 5,
		},
		{
			...t.reviews[1],
			image: 'https://randomuser.me/api/portraits/women/44.jpg',
			stars: 5,
		},
		{
			...t.reviews[2],
			image: 'https://randomuser.me/api/portraits/men/75.jpg',
			stars: 4.5,
		},
	]

	const renderStars = rating => {
		const fullStars = Math.floor(rating)
		const hasHalfStar = rating % 1 !== 0

		return (
			<div className="flex items-center text-yellow-400 text-base sm:text-xl">
				{[...Array(fullStars)].map((_, i) => (
					<i key={i} className="fas fa-star"></i>
				))}
				{hasHalfStar && <i className="fas fa-star-half-alt"></i>}
			</div>
		)
	}

	return (
		<section className="py-12 sm:py-16 lg:py-20 bg-primary text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16">
					<span className="font-semibold text-primary-200 text-sm sm:text-base">{t.tag}</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">{t.title}</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 sm:p-8">
							<div className="mb-3 sm:mb-4">{renderStars(testimonial.stars)}</div>
							<p className="mb-4 sm:mb-6 italic text-sm sm:text-base">{testimonial.text}</p>
							<div className="flex items-center gap-3 sm:gap-4">
								<img
									src={testimonial.image}
									alt={testimonial.author}
									className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
								/>
								<div>
									<h4 className="font-bold text-sm sm:text-base">{testimonial.author}</h4>
									<p className="text-xs sm:text-sm text-primary-200">{testimonial.position}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
