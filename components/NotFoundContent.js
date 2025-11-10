'use client'

import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'

export default function NotFoundContent() {
	const { translations } = useLanguage()

	return (
		<div className="flex items-center justify-center px-4 py-20">
			<div className="max-w-2xl w-full text-center">
				{/* 404 Number with Animation */}
				<div className="mb-8 relative">
					<h1 className="text-9xl sm:text-[12rem] font-bold text-[#E10600] mb-4 animate-pulse">404</h1>
					<div className="w-24 h-1 bg-[#E10600] mx-auto"></div>
					
					{/* Gear Icon */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
						<i className="fas fa-cog text-white text-9xl"></i>
					</div>
				</div>

				{/* Error Message */}
				<div className="mb-10">
					<h2 className="text-3xl font-bold text-white mb-4">
						{translations?.notFound?.title || 'Strona nie została znaleziona'}
					</h2>
					<p className="text-gray-300 text-lg max-w-xl mx-auto">
						{translations?.notFound?.description ||
							'Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona. Może te linki pomogą Ci znaleźć to, czego szukasz?'}
					</p>
				</div>

				{/* Action Buttons */}
				<div className="space-y-4 mb-10">
					<Link
						href="/"
						className="inline-block bg-[#E10600] hover:bg-[#C10500] text-white font-semibold py-4 px-10 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
						<i className="fas fa-home mr-2"></i>
						{translations?.notFound?.homeButton || 'Powrót do strony głównej'}
					</Link>
				</div>

				{/* Quick Links */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
					<Link
						href="/portfolio"
						className="bg-slate-800 hover:bg-slate-700 text-white p-6 rounded-lg transition-all duration-300 border border-slate-700 hover:border-[#E10600] group">
						<i className="fas fa-images text-3xl text-[#E10600] mb-3 group-hover:scale-110 transition-transform"></i>
						<h3 className="font-semibold text-lg">Portfolio</h3>
						<p className="text-gray-400 text-sm mt-2">Zobacz nasze realizacje</p>
					</Link>

					<Link
						href="/contact"
						className="bg-slate-800 hover:bg-slate-700 text-white p-6 rounded-lg transition-all duration-300 border border-slate-700 hover:border-[#E10600] group">
						<i className="fas fa-envelope text-3xl text-[#E10600] mb-3 group-hover:scale-110 transition-transform"></i>
						<h3 className="font-semibold text-lg">Kontakt</h3>
						<p className="text-gray-400 text-sm mt-2">Skontaktuj się z nami</p>
					</Link>

					<Link
						href="/#services"
						className="bg-slate-800 hover:bg-slate-700 text-white p-6 rounded-lg transition-all duration-300 border border-slate-700 hover:border-[#E10600] group">
						<i className="fas fa-cogs text-3xl text-[#E10600] mb-3 group-hover:scale-110 transition-transform"></i>
						<h3 className="font-semibold text-lg">Usługi</h3>
						<p className="text-gray-400 text-sm mt-2">Poznaj nasze możliwości</p>
					</Link>
				</div>

				{/* Additional Info */}
				<div className="pt-8 border-t border-gray-700">
					<p className="text-gray-400 text-sm flex items-center justify-center gap-2">
						<i className="fas fa-question-circle"></i>
						{translations?.notFound?.helpText ||
							'Potrzebujesz pomocy? Zadzwoń: '}
						<a href="tel:+48510325466" className="text-[#E10600] hover:text-white font-semibold ml-1">
							+48 510 325 466
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}

