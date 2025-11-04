'use client'

import Navbar from '../../components/Navbar'
import PortfolioGallery from '../../components/PortfolioGallery'
import MachinesList from '../../components/machines/MachinesList'
import Footer from '../../components/Footer'
import { useLanguage } from '../../lib/LanguageContext'

export default function PortfolioPage() {
	const { translations } = useLanguage()
	const t = translations.portfolio

	return (
		<>
			<Navbar />
			{/* Hero Section */}
			<section className="py-16 sm:py-20 bg-gradient-to-b from-slate-800 to-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<span className="text-[#E10600] font-semibold text-sm sm:text-base uppercase tracking-wide">{t.tag}</span>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">{t.title}</h1>
					<p className="max-w-2xl mx-auto text-gray-300 text-lg">{t.subtitle}</p>
				</div>
			</section>
			
			{/* Sekcja z maszynami */}
			<MachinesList />
			
			{/* Galeria portfolio */}
			<PortfolioGallery isHomePage={false} />
			
			<Footer />
		</>
	)
}
