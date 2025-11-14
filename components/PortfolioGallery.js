'use client'

import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import Image from 'next/image'


const portfolioImages = {
	lead: [
		'/olow/image00011.jpeg',
		'/olow/image00013.jpeg',
		'/olow/image00015.jpeg',
		'/olow/image00016.jpeg',
		'/olow/image00017.jpeg',
	],
	aluminum: [
		'/aluminium/20220315_081543.jpg',
		'/aluminium/20220315_144240.jpg',
		'/aluminium/20220328_153449.jpg',
		'/aluminium/20220328_153452.jpg',
		'/aluminium/20220427_133122.jpg',
		'/aluminium/20240126_154936.jpg',
		'/aluminium/20240126_154942.jpg',
		'/aluminium/20240214_174333.jpg',
		'/aluminium/20240214_174337.jpg',
		'/aluminium/20240214_174345.jpg',
		'/aluminium/20250605_145025.jpg',
		'/aluminium/20250605_145051.jpg',
		'/aluminium/20251027_134142.jpg',
		'/aluminium/20251027_134226.jpg',
	],
	steel: [
		'/stal-czarna/20221201_191135.jpg',
		'/stal-czarna/20221202_154911.jpg',
		'/stal-czarna/20221202_154915.jpg',
		'/stal-czarna/20251027_134332.jpg',
		'/stal-czarna/20251027_134343.jpg',
		'/stal-czarna/20251027_134352.jpg',
		'/stal-czarna/20251027_135421.jpg',
		'/stal-czarna/20251027_140005.jpg',
		'/stal-czarna/20251027_140014.jpg',
	],
	'stainless-steel': [
		'/stal-nierdzewna/20251027_134753.jpg',
		'/stal-nierdzewna/20251027_134805.jpg',
		'/stal-nierdzewna/20251027_134900.jpg',
		'/stal-nierdzewna/20251027_134934.jpg',
		'/stal-nierdzewna/20251027_135100.jpg',
		'/stal-nierdzewna/20251027_135116.jpg',
		'/stal-nierdzewna/20251027_135126.jpg',
		'/stal-nierdzewna/20251027_135315.jpg',
		'/stal-nierdzewna/20251027_140140.jpg',
		'/stal-nierdzewna/20251027_140155.jpg',
		'/stal-nierdzewna/20251027_140654.jpg',
		'/stal-nierdzewna/20251027_141852.jpg',
		'/stal-nierdzewna/20251027_141900.jpg',
		'/stal-nierdzewna/20251027_141910.jpg',
	],
	plastics: [
		'/tworzywa-sztuczne/20251027_140303.jpg',
		'/tworzywa-sztuczne/20251027_140329.jpg',
		'/tworzywa-sztuczne/20251027_140454.jpg',
		'/tworzywa-sztuczne/20251027_140528.jpg',
		'/tworzywa-sztuczne/20251027_140545.jpg',
		'/tworzywa-sztuczne/20251027_140550.jpg',
		'/tworzywa-sztuczne/20251027_140757.jpg',
		'/tworzywa-sztuczne/20251027_140927.jpg',
		'/tworzywa-sztuczne/20251027_140956.jpg',
		'/tworzywa-sztuczne/20251027_141240.jpg',
	],
}

export default function PortfolioGallery({ isHomePage = false }) {
	const { translations } = useLanguage()
	const t = translations.portfolio
	const [selectedMaterial, setSelectedMaterial] = useState('all')
	const [currentPage, setCurrentPage] = useState(1)
	const imagesPerPage = 9

	
	const materials = [
		{ id: 'all', name: t.materials?.all || 'Wszystkie materiały' },
		{ id: 'lead', name: t.materials?.lead || 'Ołów' },
		{ id: 'aluminum', name: t.materials?.aluminum || 'Aluminium' },
		{ id: 'steel', name: t.materials?.steel || 'Stal czarna' },
		{ id: 'stainless-steel', name: t.materials?.['stainless-steel'] || 'Stal nierdzewna' },
		{ id: 'plastics', name: t.materials?.plastics || 'Tworzywa sztuczne' },
	]

	
	const getAllFilteredImages = () => {
		if (selectedMaterial === 'all') {
			
			const allImages = []
			Object.entries(portfolioImages).forEach(([material, images]) => {
				images.forEach(image => {
					allImages.push({ image, material })
				})
			})
			return allImages
		} else {
			
			return (
				portfolioImages[selectedMaterial]?.map(image => ({
					image,
					material: selectedMaterial,
				})) || []
			)
		}
	}

	const allImages = getAllFilteredImages()
	const totalPages = Math.ceil(allImages.length / imagesPerPage)

	
	const getCurrentPageImages = () => {
		if (isHomePage) {
			
			return allImages.slice(0, 9)
		} else {
			
			const startIndex = (currentPage - 1) * imagesPerPage
			const endIndex = startIndex + imagesPerPage
			return allImages.slice(startIndex, endIndex)
		}
	}

	const displayedImages = getCurrentPageImages()

	
	const handleMaterialChange = materialId => {
		setSelectedMaterial(materialId)
		setCurrentPage(1)
	}

	
	const getMaterialBadge = material => {
		const materialMap = {
			lead: t.materials?.lead || 'Ołów',
			aluminum: t.materials?.aluminum || 'Aluminium',
			steel: t.materials?.steel || 'Stal czarna',
			'stainless-steel': t.materials?.['stainless-steel'] || 'Stal nierdzewna',
			plastics: t.materials?.plastics || 'Tworzywa sztuczne',
		}
		return materialMap[material] || ''
	}

	return (
		<section className={`${isHomePage ? 'py-12 sm:py-16 lg:py-20 bg-white' : 'py-16 sm:py-20 bg-slate-50'}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				
				{isHomePage && (
					<div className="text-center mb-12 sm:mb-16">
						<span className="text-primary font-semibold text-sm sm:text-base">{t.tag}</span>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mt-2">{t.title}</h2>
						<p className="max-w-2xl mx-auto mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base px-4">{t.subtitle}</p>
					</div>
				)}

				
				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{materials.map((material, index) => (
						<button
							key={index}
							onClick={() => handleMaterialChange(material.id)}
							className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
								selectedMaterial === material.id
									? 'bg-primary text-white shadow-lg scale-105'
									: isHomePage
									? 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md hover:shadow-lg'
									: 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
							}`}>
							{material.name}
						</button>
					))}
				</div>

				{/* Gallery Grid */}
				{displayedImages.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{displayedImages.map((item, index) => {
							return (
								<div
									key={index}
									className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
									style={{ aspectRatio: '4/3' }}>
									<div className="relative w-full h-full bg-gray-200">
										<Image
											src={item.image}
											alt={getMaterialBadge(item.material)}
											fill
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
											quality={75}
											className="object-cover"
											priority={index < 3}
											loading={index < 3 ? undefined : 'lazy'}
										/>
									</div>
									
									<div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg z-10">
										{getMaterialBadge(item.material)}
									</div>
								</div>
							)
						})}
					</div>
				) : (
					<div className="text-center py-12">
						<p className="text-gray-500 text-lg">Brak zdjęć w tej kategorii</p>
					</div>
				)}

				
				{!isHomePage && totalPages > 1 && (
					<div className="flex flex-col items-center mt-12 space-y-4">
						<div className="flex items-center space-x-2">
							{/* Poprzednia strona */}
							<button
								onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
								disabled={currentPage === 1}
								className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
									currentPage === 1
										? 'bg-gray-200 text-gray-400 cursor-not-allowed'
										: 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md'
								}`}>
								<i className="fas fa-chevron-left"></i>
							</button>

							
							{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
								<button
									key={page}
									onClick={() => setCurrentPage(page)}
									className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
										currentPage === page
											? 'bg-primary text-white shadow-lg scale-110'
											: 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
									}`}>
									{page}
								</button>
							))}

							
							<button
								onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
								disabled={currentPage === totalPages}
								className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
									currentPage === totalPages
										? 'bg-gray-200 text-gray-400 cursor-not-allowed'
										: 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md'
								}`}>
								<i className="fas fa-chevron-right"></i>
							</button>
						</div>

						
						<p className="text-gray-600 text-sm">
							Strona {currentPage} z {totalPages} ({allImages.length} zdjęć)
						</p>
					</div>
				)}

				
				{isHomePage && (
					<div className="text-center mt-8 sm:mt-12">
						<button
							onClick={() => (window.location.href = '/portfolio')}
							className="bg-primary hover:bg-white border-primary border-2 hover:text-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition duration-300 text-sm sm:text-base cursor-pointer">
							{t.viewFull} <i className="fas fa-arrow-right ml-2"></i>
						</button>
					</div>
				)}
			</div>
		</section>
	)
}
