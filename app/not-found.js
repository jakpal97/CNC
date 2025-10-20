'use client'

import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'

export default function NotFound() {
	const { translations } = useLanguage()

	return (
		<div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
			<div className="max-w-md w-full text-center">
				{/* 404 Number */}
				<div className="mb-8">
					<h1 className="text-9xl font-bold text-[#E10600] mb-4">404</h1>
					<div className="w-24 h-1 bg-[#E10600] mx-auto"></div>
				</div>

				{/* Error Message */}
				<div className="mb-8">
					<h2 className="text-2xl font-bold text-white mb-4">
						{translations?.notFound?.title || 'Strona nie została znaleziona'}
					</h2>
					<p className="text-gray-300 text-lg">
						{translations?.notFound?.description ||
							'Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.'}
					</p>
				</div>

				{/* Action Buttons */}
				<div className="space-y-4">
					<Link
						href="/"
						className="inline-block bg-[#E10600] hover:bg-[#C10500] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
						{translations?.notFound?.homeButton || 'Powrót do strony głównej'}
					</Link>

					<div className="pt-4">
						<Link
							href="/contact"
							className="inline-block text-[#E10600] hover:text-white border border-[#E10600] hover:bg-[#E10600] font-semibold py-3 px-8 rounded-lg transition-all duration-300">
							{translations?.notFound?.contactButton || 'Skontaktuj się z nami'}
						</Link>
					</div>
				</div>

				{/* Additional Info */}
				<div className="mt-12 pt-8 border-t border-gray-700">
					<p className="text-gray-400 text-sm">
						{translations?.notFound?.helpText ||
							'Jeśli uważasz, że to błąd, skontaktuj się z naszym zespołem technicznym.'}
					</p>
				</div>
			</div>
		</div>
	)
}
