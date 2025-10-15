'use client'

import { useLanguage } from '../lib/LanguageContext'
import { useState } from 'react'

export default function Portfolio() {
	const { translations } = useLanguage()
	const t = translations.portfolio
	const [selectedMaterial, setSelectedMaterial] = useState('all')

	const parts = [
		{
			image:
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			title: t.parts.aerospace.title,
			description: t.parts.aerospace.description,
			material: 'titanium',
			tags: ['Titanium', '±0.001"', 'Anodized'],
		},
		{
			image:
				'https://images.unsplash.com/photo-1581093458171-5d3f3f720316?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			title: t.parts.medical.title,
			description: t.parts.medical.description,
			material: 'cobalt-chrome',
			tags: ['Cobalt Chrome', '±0.0005"', 'Mirror Polish'],
		},
		{
			image:
				'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			title: t.parts.automotive.title,
			description: t.parts.automotive.description,
			material: 'stainless-steel',
			tags: ['17-4PH SS', '±0.0002"', 'Passivated'],
		},
		{
			image:
				'https://images.unsplash.com/photo-1581094794329-c811329d521a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			title: t.parts.optical.title,
			description: t.parts.optical.description,
			material: 'aluminum',
			tags: ['Aluminum', '±0.001"', 'Black Anodize'],
		},
		{
			image:
				'https://images.unsplash.com/photo-1581092918056-0c4c3f58cc54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			title: t.parts.hydraulic.title,
			description: t.parts.hydraulic.description,
			material: 'steel',
			tags: ['Steel', '±0.002"', 'Nickel Plated'],
		},
		{
			image:
				'https://images.unsplash.com/photo-1581093057306-d3075e9cd5a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			title: t.parts.robotic.title,
			description: t.parts.robotic.description,
			material: 'aluminum',
			tags: ['7075 Aluminum', '±0.0005"', 'Hard Anodize'],
		},
	]

	const materials = [
		{ id: 'all', name: t.materials.all },
		{ id: 'titanium', name: t.materials.titanium },
		{ id: 'aluminum', name: t.materials.aluminum },
		{ id: 'steel', name: t.materials.steel },
		{ id: 'stainless-steel', name: t.materials['stainless-steel'] },
		{ id: 'cobalt-chrome', name: t.materials['cobalt-chrome'] },
	]

	const filteredParts = selectedMaterial === 'all' ? parts : parts.filter(part => part.material === selectedMaterial)

	return (
		<section className="py-12 sm:py-16 lg:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16">
					<span className="text-primary font-semibold text-sm sm:text-base">{t.tag}</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mt-2">{t.title}</h2>
					<p className="max-w-2xl mx-auto mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base px-4">{t.subtitle}</p>
				</div>

				{/* Material Filter */}
				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{materials.map((material, index) => (
						<button
							key={index}
							onClick={() => setSelectedMaterial(material.id)}
							className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
								selectedMaterial === material.id
									? 'bg-primary text-white shadow-lg scale-105'
									: 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md hover:shadow-lg'
							}`}>
							{material.name}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{filteredParts.map((part, index) => (
						<div key={index} className="part-hover relative overflow-hidden rounded-xl shadow-md group">
							<img src={part.image} alt={part.title} className="w-full h-48 sm:h-56 lg:h-64 object-cover" />
							<div className="part-overlay absolute inset-0 bg-primary bg-opacity-90 flex flex-col justify-center items-center p-4 sm:p-6 text-white">
								<h3 className="text-lg sm:text-xl font-bold mb-2">{part.title}</h3>
								<p className="text-center mb-3 sm:mb-4 text-sm sm:text-base">{part.description}</p>
								<div className="flex flex-wrap justify-center gap-2 mb-3 sm:mb-4">
									{part.tags.map((tag, idx) => (
										<span
											key={idx}
											className="bg-white text-black bg-opacity-20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-8 sm:mt-12">
					<button
						onClick={() => (window.location.href = '/portfolio')}
						className="bg-primary hover:bg-white border-primary border-2 hover:text-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition duration-300 text-sm sm:text-base cursor-pointer">
						{t.viewFull} <i className="fas fa-arrow-right ml-2"></i>
					</button>
				</div>
			</div>
		</section>
	)
}
