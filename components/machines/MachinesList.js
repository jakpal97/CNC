

import { useLanguage } from '../../lib/LanguageContext'
import { useState } from 'react'

export default function MachinesList() {
	const { translations } = useLanguage()
	const t = translations.machinesPage
	const [selectedMachine, setSelectedMachine] = useState(0)

	const machineImages = ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg']

	return (
		<section className="py-16 sm:py-20 lg:py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12 sm:mb-16">
					<span className="text-[#E10600] font-semibold text-sm sm:text-base uppercase tracking-wide">
						{t.machines.tag}
					</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">{t.machines.title}</h2>
					<p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600">{t.machines.subtitle}</p>
				</div>

				{/* Machines Grid */}
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Machine Selection */}
					<div className="space-y-4">
						{t.machines.list.map((machine, index) => (
							<div
								key={index}
								onClick={() => setSelectedMachine(index)}
								className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
									selectedMachine === index
										? 'bg-slate-900 shadow-2xl scale-105'
										: 'bg-gray-50 hover:bg-gray-100 hover:shadow-lg'
								}`}>
								<div className="flex items-start gap-4">
									{/* Icon */}
									<div
										className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
											selectedMachine === index
												? 'bg-[#E10600] text-white'
												: 'bg-white text-slate-900 group-hover:bg-slate-100'
										}`}>
										<i className={`fas ${machine.icon} text-2xl`}></i>
									</div>

									{/* Content */}
									<div className="flex-1">
										<h3
											className={`text-xl sm:text-2xl font-bold mb-2 transition-colors ${
												selectedMachine === index ? 'text-white' : 'text-slate-900'
											}`}>
											{machine.name}
										</h3>
										<p
											className={`text-sm sm:text-base transition-colors ${
												selectedMachine === index ? 'text-gray-300' : 'text-gray-600'
											}`}>
											{machine.shortDesc}
										</p>

										{/* Specs preview */}
										{selectedMachine === index && (
											<div className="mt-4 space-y-2 animate-fade-in">
												{machine.specs.map((spec, idx) => (
													<div key={idx} className="flex items-center text-sm text-gray-300">
														<i className="fas fa-check text-[#E10600] mr-2"></i>
														{spec}
													</div>
												))}
											</div>
										)}
									</div>

									{/* Arrow indicator */}
									<div className={`transition-transform duration-300 ${selectedMachine === index ? 'rotate-90' : ''}`}>
										<i
											className={`fas fa-chevron-right text-xl ${
												selectedMachine === index ? 'text-[#E10600]' : 'text-gray-400'
											}`}></i>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Machine Image Display */}
					<div className="relative">
						<div className="relative rounded-2xl overflow-hidden shadow-2xl">
							<img
								src={machineImages[selectedMachine]}
								alt={t.machines.list[selectedMachine].name}
								className="w-full h-[500px] object-cover transition-all duration-500"
							/>
							{/* Overlay with machine name */}
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex items-end p-8">
								<div className="text-white">
									<h3 className="text-2xl sm:text-3xl font-bold mb-2">{t.machines.list[selectedMachine].name}</h3>
									<p className="text-gray-300">{t.machines.list[selectedMachine].manufacturer}</p>
								</div>
							</div>
						</div>

						{/* Decorative element */}
						<div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-[#E10600] rounded-2xl opacity-20"></div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(-10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fade-in {
					animation: fade-in 0.3s ease-out forwards;
				}
			`}</style>
		</section>
	)
}
