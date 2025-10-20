'use client'

import { useState } from 'react'
import { useLanguage } from '../../lib/LanguageContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ContactPage() {
	const { translations } = useLanguage()
	const t = translations.contact

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		subject: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(null)

	const handleSubmit = async e => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus(null)

		try {
			// Symulacja wysyłania formularza
			await new Promise(resolve => setTimeout(resolve, 1000))
			setSubmitStatus('success')
			setFormData({
				name: '',
				email: '',
				phone: '',
				company: '',
				subject: '',
				message: '',
			})
		} catch (error) {
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="min-h-screen bg-slate-900 text-white">
			<Navbar />
			{/* Hero Section */}
			<section className="py-16 sm:py-20 bg-gradient-to-b from-slate-800 to-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<span className="text-[#E10600] font-semibold text-sm sm:text-base uppercase tracking-wide">{t.tag}</span>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">{t.title}</h1>
					<p className="max-w-2xl mx-auto text-gray-300 text-lg">{t.subtitle}</p>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="text-2xl font-bold text-white mb-6">Informacje kontaktowe</h2>

								{/* Location */}
								<div className="flex items-start space-x-4 mb-6">
									<div className="flex-shrink-0 w-12 h-12 bg-[#E10600] rounded-lg flex items-center justify-center">
										<i className="fas fa-map-marker-alt text-white text-lg"></i>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">{t.info.location.title}</h3>
										<p className="text-gray-300 whitespace-pre-line">{t.info.location.address}</p>
									</div>
								</div>

								{/* Phone */}
								<div className="flex items-start space-x-4 mb-6">
									<div className="flex-shrink-0 w-12 h-12 bg-[#E10600] rounded-lg flex items-center justify-center">
										<i className="fas fa-phone text-white text-lg"></i>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">{t.info.phone.title}</h3>
										<p className="text-gray-300">{t.info.phone.main}</p>
										<p className="text-gray-300">{t.info.phone.sales}</p>
									</div>
								</div>

								{/* Email */}
								<div className="flex items-start space-x-4 mb-6">
									<div className="flex-shrink-0 w-12 h-12 bg-[#E10600] rounded-lg flex items-center justify-center">
										<i className="fas fa-envelope text-white text-lg"></i>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">{t.info.email.title}</h3>
										<p className="text-gray-300">{t.info.email.sales}</p>
									</div>
								</div>

								{/* Hours */}
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-12 h-12 bg-[#E10600] rounded-lg flex items-center justify-center">
										<i className="fas fa-clock text-white text-lg"></i>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-2">{t.info.hours.title}</h3>
										<p className="text-gray-300">{t.info.hours.weekdays}</p>
										<p className="text-gray-300">{t.info.hours.weekend}</p>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
							<h2 className="text-2xl font-bold text-white mb-6">{t.form.title}</h2>

							{submitStatus === 'success' && (
								<div className="mb-6 p-4 bg-green-600/20 border border-green-600 rounded-lg">
									<p className="text-green-400">Wiadomość została wysłana pomyślnie!</p>
								</div>
							)}

							{submitStatus === 'error' && (
								<div className="mb-6 p-4 bg-red-600/20 border border-red-600 rounded-lg">
									<p className="text-red-400">Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.</p>
								</div>
							)}

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
											{t.form.name} <span className="text-[#E10600]">{t.form.required}</span>
										</label>
										<input
											type="text"
											id="name"
											required
											value={formData.name}
											onChange={e => setFormData({ ...formData, name: e.target.value })}
											className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-white placeholder-gray-400"
											placeholder="Wprowadź imię i nazwisko"
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
											{t.form.email} <span className="text-[#E10600]">{t.form.required}</span>
										</label>
										<input
											type="email"
											id="email"
											required
											value={formData.email}
											onChange={e => setFormData({ ...formData, email: e.target.value })}
											className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-white placeholder-gray-400"
											placeholder="Wprowadź adres email"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
											{t.form.phone}
										</label>
										<input
											type="tel"
											id="phone"
											value={formData.phone}
											onChange={e => setFormData({ ...formData, phone: e.target.value })}
											className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-white placeholder-gray-400"
											placeholder="Wprowadź numer telefonu"
										/>
									</div>
									<div>
										<label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
											{t.form.company}
										</label>
										<input
											type="text"
											id="company"
											value={formData.company}
											onChange={e => setFormData({ ...formData, company: e.target.value })}
											className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-white placeholder-gray-400"
											placeholder="Wprowadź nazwę firmy"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
										{t.form.subject} <span className="text-[#E10600]">{t.form.required}</span>
									</label>
									<input
										type="text"
										id="subject"
										required
										value={formData.subject}
										onChange={e => setFormData({ ...formData, subject: e.target.value })}
										className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-white placeholder-gray-400"
										placeholder="Wprowadź temat wiadomości"
									/>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
										{t.form.message} <span className="text-[#E10600]">{t.form.required}</span>
									</label>
									<textarea
										id="message"
										required
										rows={6}
										value={formData.message}
										onChange={e => setFormData({ ...formData, message: e.target.value })}
										className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-white placeholder-gray-400 resize-none"
										placeholder="Wprowadź treść wiadomości"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-300 mb-2">{t.form.file}</label>
									<div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-[#E10600] transition-colors cursor-pointer">
										<i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
										<p className="text-gray-400">Kliknij aby wybrać pliki lub przeciągnij tutaj</p>
										<p className="text-sm text-gray-500 mt-1">PDF, CAD, JPG, PNG (max 10MB)</p>
									</div>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-[#E10600] hover:bg-[#C10500] disabled:bg-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
									{isSubmitting ? (
										<>
											<i className="fas fa-spinner fa-spin"></i>
											<span>Wysyłanie...</span>
										</>
									) : (
										<>
											<i className="fas fa-paper-plane"></i>
											<span>{t.form.submit}</span>
										</>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
