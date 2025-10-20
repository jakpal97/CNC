'use client'

import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'

export default function Contact() {
	const { translations } = useLanguage()
	const t = translations.contact
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		subject: '',
		message: '',
		file: null,
	})

	const handleSubmit = e => {
		e.preventDefault()
		// Tu będzie logika wysyłania formularza
		console.log('Form submitted:', formData)
	}

	const handleFileChange = e => {
		const file = e.target.files?.[0]
		if (file) {
			setFormData({ ...formData, file })
		}
	}

	const contactInfo = [
		{
			icon: 'fa-map-marker-alt',
			title: t.info.location.title,
			content: t.info.location.address,
		},
		{
			icon: 'fa-phone-alt',
			title: t.info.phone.title,
			content: `${t.info.phone.main}\n${t.info.phone.sales}`,
		},
		{
			icon: 'fa-envelope',
			title: t.info.email.title,
			content: t.info.email.sales,
		},
		{
			icon: 'fa-clock',
			title: t.info.hours.title,
			content: `${t.info.hours.weekdays}\n${t.info.hours.weekend}`,
		},
	]

	return (
		<section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
					<div className="lg:w-1/2">
						<span className="text-primary font-semibold text-sm sm:text-base">{t.tag}</span>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mt-2 mb-4 sm:mb-6">{t.title}</h2>
						<p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">{t.subtitle}</p>

						<div className="space-y-4 sm:space-y-6">
							{contactInfo.map((info, index) => (
								<div key={index} className="flex gap-3 sm:gap-4">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-primary text-white">
											<i className={`fas ${info.icon} text-sm sm:text-base`}></i>
										</div>
									</div>
									<div>
										<h4 className="text-base sm:text-lg font-medium text-dark">{info.title}</h4>
										<p className="text-gray-600 mt-1 whitespace-pre-line text-sm sm:text-base">{info.content}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="lg:w-1/2">
						<div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md">
							<h3 className="text-lg sm:text-xl font-bold text-dark mb-4 sm:mb-6">{t.form.title}</h3>
							<form onSubmit={handleSubmit}>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
											{t.form.name}
											{t.form.required}
										</label>
										<input
											type="text"
											id="name"
											required
											value={formData.name}
											onChange={e => setFormData({ ...formData, name: e.target.value })}
											className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
											{t.form.email}
											{t.form.required}
										</label>
										<input
											type="email"
											id="email"
											required
											value={formData.email}
											onChange={e => setFormData({ ...formData, email: e.target.value })}
											className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
										/>
									</div>
									<div>
										<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
											{t.form.phone}
										</label>
										<input
											type="tel"
											id="phone"
											value={formData.phone}
											onChange={e => setFormData({ ...formData, phone: e.target.value })}
											className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
										/>
									</div>
									<div>
										<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
											{t.form.company}
										</label>
										<input
											type="text"
											id="company"
											value={formData.company}
											onChange={e => setFormData({ ...formData, company: e.target.value })}
											className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
										/>
									</div>
								</div>
								<div className="mb-4 sm:mb-6">
									<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
										{t.form.subject}
										{t.form.required}
									</label>
									<input
										type="text"
										id="subject"
										required
										value={formData.subject}
										onChange={e => setFormData({ ...formData, subject: e.target.value })}
										className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
									/>
								</div>
								<div className="mb-4 sm:mb-6">
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
										{t.form.message}
										{t.form.required}
									</label>
									<textarea
										id="message"
										rows="4"
										required
										value={formData.message}
										onChange={e => setFormData({ ...formData, message: e.target.value })}
										className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"></textarea>
								</div>
								<div className="mb-4 sm:mb-6">
									<label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
										{t.form.file}
									</label>
									<input
										type="file"
										id="file"
										accept=".pdf,.dwg,.dxf,.step,.stp,.igs,.iges"
										onChange={handleFileChange}
										className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
									/>
									{formData.file && (
										<p className="mt-2 text-xs sm:text-sm text-gray-600">
											<i className="fas fa-file mr-1"></i>
											{formData.file.name}
										</p>
									)}
								</div>
								<button
									type="submit"
									className="w-full bg-primary hover:bg-secondary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition duration-300 text-sm sm:text-base">
									{t.form.submit} <i className="fas fa-paper-plane ml-2"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
