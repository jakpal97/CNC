'use client'
import { useLanguage } from '../../lib/LanguageContext'
import { useState } from 'react'

export default function ProjectsGallery() {
	const { translations } = useLanguage()
	const t = translations.machinesPage
	const [selectedMaterial, setSelectedMaterial] = useState('all')

	// Placeholder images - można zastąpić prawdziwymi
	const projectImages = [
		'/images/image1.jpg',
		'/images/image2.jpg',
		'/images/image3.jpg',
		'/images/image4.jpg',
		'/images/image1.jpg',
		'/images/image2.jpg',
	]

	// Materiały do wyboru (zaktualizowane)
	const materials = [
		{ id: 'all', name: t.projects.materials?.all || 'Wszystkie materiały' },
		{ id: 'lead', name: t.projects.materials?.lead || 'Ołów' },
		{ id: 'aluminum', name: t.projects.materials?.aluminum || 'Aluminium' },
		{ id: 'steel', name: t.projects.materials?.steel || 'Stal' },
		{ id: 'stainless-steel', name: t.projects.materials?.['stainless-steel'] || 'Stal nierdzewna' },
		{ id: 'plastics', name: t.projects.materials?.plastics || 'Tworzywa sztuczne' },
	]

	// Dodajemy właściwość material do projektów (zaktualizowane ID materiałów)
	const projectsWithMaterials = t.projects.items.map((project, index) => ({
		...project,
		material: ['lead', 'plastics', 'stainless-steel', 'aluminum', 'steel', 'aluminum'][index % 6],
	}))

	const filteredProjects =
		selectedMaterial === 'all'
			? projectsWithMaterials
			: projectsWithMaterials.filter(project => project.material === selectedMaterial)

	return (
		<section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12">
					<span className="text-[#E10600] font-semibold text-sm sm:text-base uppercase tracking-wide">
						{t.projects.tag}
					</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">{t.projects.title}</h2>
					<p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600">{t.projects.subtitle}</p>
				</div>

				{/* Material Filter */}
				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{materials.map((material, index) => (
						<button
							key={index}
							onClick={() => setSelectedMaterial(material.id)}
							className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
								selectedMaterial === material.id
									? 'bg-[#E10600] text-white shadow-lg scale-105'
									: 'bg-white text-slate-900 hover:bg-slate-100 shadow-md hover:shadow-lg'
							}`}>
							{material.name}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{filteredProjects.map((project, index) => (
						<div
							key={index}
							className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							{/* Project Image */}
							<div className="relative h-64 overflow-hidden">
								<img
									src={projectImages[index % projectImages.length]}
									alt={project.title}
									className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
								/>
								{/* Material Badge */}
								<div className="absolute top-4 right-4 bg-[#E10600] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
									{materials.find(mat => mat.id === project.material)?.name || project.material}
								</div>
								{/* Hover Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
									<button className="text-white font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
										<span>{t.projects.viewDetails}</span>
										<i className="fas fa-arrow-right"></i>
									</button>
								</div>
							</div>

							{/* Project Info */}
							<div className="p-6">
								<h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#E10600] transition-colors">
									{project.title}
								</h3>
								<p className="text-gray-600 text-sm mb-4">{project.description}</p>

								{/* Specs */}
								<div className="space-y-2">
									{project.specs.map((spec, idx) => (
										<div key={idx} className="flex items-center text-sm text-gray-700">
											<div className="w-2 h-2 bg-[#E10600] rounded-full mr-3"></div>
											{spec}
										</div>
									))}
								</div>
							</div>

							{/* Animated border */}
							<div className="absolute inset-0 border-2 border-[#E10600] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						</div>
					))}
				</div>

				{/* Load More Button */}
				<div className="text-center mt-12">
					<button className="bg-slate-900 hover:bg-[#E10600] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3">
						{t.projects.loadMore}
						<i className="fas fa-plus"></i>
					</button>
				</div>
			</div>
		</section>
	)
}
