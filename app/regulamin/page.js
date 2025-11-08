'use client'

import { useLanguage } from '../../lib/LanguageContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function TermsOfService() {
	const { translations } = useLanguage()
	const t = translations.terms

	return (
		<>
			<Navbar />
			<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
				<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{t.title}</h1>
				
				<div className="prose prose-lg max-w-none">
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.section1.title}</h2>
						<p className="text-gray-700 mb-4">{t.section1.content}</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.section2.title}</h2>
						<p className="text-gray-700 mb-4">{t.section2.content}</p>
						<ul className="list-disc pl-6 space-y-2">
							{t.section2.list.map((item, index) => (
								<li key={index} className="text-gray-700">{item}</li>
							))}
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.section3.title}</h2>
						<p className="text-gray-700 mb-4">{t.section3.content}</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.section4.title}</h2>
						<p className="text-gray-700 mb-4">{t.section4.content}</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.section5.title}</h2>
						<p className="text-gray-700 mb-4">{t.section5.content}</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.section6.title}</h2>
						<p className="text-gray-700 mb-4">{t.section6.content}</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.section7.title}</h2>
						<p className="text-gray-700 mb-4">{t.section7.content}</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.section8.title}</h2>
						<p className="text-gray-700 mb-4">{t.section8.content}</p>
					</section>
				</div>

				<div className="mt-8 pt-6 border-t border-gray-200">
					<p className="text-sm text-gray-600">{t.lastUpdated}</p>
				</div>

				<div className="mt-6">
					<Link
						href="/#contact"
						className="inline-block bg-[#E10600] hover:bg-[#C10500] text-white px-6 py-3 rounded-lg transition-colors duration-300">
						{t.contactButton}
					</Link>
				</div>
			</div>
		</div>
		<Footer />
		</>
	)
}

