'use client'

import { useLanguage } from '../lib/LanguageContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function TrustedBy() {
	const { translations } = useLanguage()
	const t = translations.trusted

	const companies = [
		'Company+1',
		'Company+2',
		'Company+3',
		'Company+4',
		'Company+5',
		'Company+6',
		'Company+7',
	]

	return (
		<section className="bg-gray-50 py-10 sm:py-14">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
					{t.title || 'Trusted by industry leaders'}
				</p>

				<Swiper
					modules={[Autoplay]}
					spaceBetween={40}
					slidesPerView={2}
					breakpoints={{
						640: { slidesPerView: 3, spaceBetween: 40 },
						768: { slidesPerView: 4, spaceBetween: 60 },
						1024: { slidesPerView: 5, spaceBetween: 80 },
					}}
					loop
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
					}}
					speed={3000}
					freeMode
					className="flex items-center"
				>
					{companies.map((company, index) => (
						<SwiperSlide key={index} className="flex justify-center">
							<img
								src={`https://via.placeholder.com/150x60?text=${company}`}
								alt={company}
								className="h-10 sm:h-12 lg:h-14 opacity-70 hover:opacity-100 transition duration-300"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
