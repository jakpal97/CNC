'use client'

import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'

export default function ContactForm({ variant = 'dark' }) {
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

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(null)

	const handleFileChange = e => {
		const file = e.target.files?.[0]
		if (file) {
			// Sprawdź rozmiar pliku (max 10MB)
			if (file.size > 10 * 1024 * 1024) {
				setSubmitStatus('error')
				alert('Plik jest zbyt duży. Maksymalny rozmiar to 10MB.')
				return
			}
			setFormData({ ...formData, file })
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus(null)

		try {
			const formDataToSend = new FormData()
			formDataToSend.append('name', formData.name)
			formDataToSend.append('email', formData.email)
			formDataToSend.append('phone', formData.phone)
			formDataToSend.append('company', formData.company)
			formDataToSend.append('subject', formData.subject)
			formDataToSend.append('message', formData.message)
			
			if (formData.file) {
				formDataToSend.append('file', formData.file)
			}

			const response = await fetch('/api/contact', {
				method: 'POST',
				body: formDataToSend,
			})

			const data = await response.json()

			if (response.ok) {
				setSubmitStatus('success')
				setFormData({
					name: '',
					email: '',
					phone: '',
					company: '',
					subject: '',
					message: '',
					file: null,
				})
				// Reset file input
				const fileInput = document.getElementById('file')
				if (fileInput) fileInput.value = ''
			} else {
				setSubmitStatus('error')
				console.error('Error:', data.error)
			}
		} catch (error) {
			setSubmitStatus('error')
			console.error('Error submitting form:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	// Wariant ciemny (dla podstrony kontaktowej)
	const darkStyles = {
		container: 'bg-slate-800 rounded-2xl p-8 shadow-2xl',
		label: 'block text-sm font-medium text-gray-300 mb-2',
		input: 'w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-white placeholder-gray-400',
		textarea: 'w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-white placeholder-gray-400 resize-none',
		button: 'w-full bg-[#E10600] hover:bg-[#C10500] disabled:bg-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2',
		title: 'text-2xl font-bold text-white mb-6',
		fileArea: 'border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-[#E10600] transition-colors cursor-pointer',
		fileText: 'text-gray-400',
		fileTextSmall: 'text-sm text-gray-500 mt-1',
		required: 'text-[#E10600]',
	}

	// Wariant jasny (dla sekcji na stronie głównej)
	const lightStyles = {
		container: 'bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md',
		label: 'block text-sm font-medium text-gray-700 mb-1',
		input: 'w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-sm sm:text-base',
		textarea: 'w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-sm sm:text-base',
		button: 'w-full bg-[#E10600] hover:bg-[#C10500] disabled:bg-gray-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition duration-300 text-sm sm:text-base',
		title: 'text-lg sm:text-xl font-bold text-dark mb-4 sm:mb-6',
		fileArea: 'w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent text-sm sm:text-base',
		fileText: 'text-gray-600',
		fileTextSmall: 'mt-2 text-xs sm:text-sm text-gray-600',
		required: 'text-[#E10600]',
	}

	const styles = variant === 'dark' ? darkStyles : lightStyles

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{t.form.title}</h3>

			{submitStatus === 'success' && (
				<div className="mb-6 p-4 bg-green-600/20 border border-green-600 rounded-lg">
					<p className="text-green-400 text-sm sm:text-base">
						{t.form.successMessage || 'Wiadomość została wysłana pomyślnie!'}
					</p>
				</div>
			)}

			{submitStatus === 'error' && (
				<div className="mb-6 p-4 bg-red-600/20 border border-red-600 rounded-lg">
					<p className="text-red-400 text-sm sm:text-base">
						{t.form.errorMessage || 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.'}
					</p>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					<div>
						<label htmlFor="name" className={styles.label}>
							{t.form.name} <span className={styles.required}>{t.form.required}</span>
						</label>
						<input
							type="text"
							id="name"
							required
							value={formData.name}
							onChange={e => setFormData({ ...formData, name: e.target.value })}
							className={styles.input}
							placeholder="Wprowadź imię i nazwisko"
						/>
					</div>
					<div>
						<label htmlFor="email" className={styles.label}>
							{t.form.email} <span className={styles.required}>{t.form.required}</span>
						</label>
						<input
							type="email"
							id="email"
							required
							value={formData.email}
							onChange={e => setFormData({ ...formData, email: e.target.value })}
							className={styles.input}
							placeholder="Wprowadź adres email"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					<div>
						<label htmlFor="phone" className={styles.label}>
							{t.form.phone}
						</label>
						<input
							type="tel"
							id="phone"
							value={formData.phone}
							onChange={e => setFormData({ ...formData, phone: e.target.value })}
							className={styles.input}
							placeholder="Wprowadź numer telefonu"
						/>
					</div>
					<div>
						<label htmlFor="company" className={styles.label}>
							{t.form.company}
						</label>
						<input
							type="text"
							id="company"
							value={formData.company}
							onChange={e => setFormData({ ...formData, company: e.target.value })}
							className={styles.input}
							placeholder="Wprowadź nazwę firmy"
						/>
					</div>
				</div>

				<div>
					<label htmlFor="subject" className={styles.label}>
						{t.form.subject} <span className={styles.required}>{t.form.required}</span>
					</label>
					<input
						type="text"
						id="subject"
						required
						value={formData.subject}
						onChange={e => setFormData({ ...formData, subject: e.target.value })}
						className={styles.input}
						placeholder="Wprowadź temat wiadomości"
					/>
				</div>

				<div>
					<label htmlFor="message" className={styles.label}>
						{t.form.message} <span className={styles.required}>{t.form.required}</span>
					</label>
					<textarea
						id="message"
						required
						rows={variant === 'dark' ? 6 : 4}
						value={formData.message}
						onChange={e => setFormData({ ...formData, message: e.target.value })}
						className={styles.textarea}
						placeholder="Wprowadź treść wiadomości"
					/>
				</div>

				<div>
					<label htmlFor="file" className={styles.label}>
						{t.form.file}
					</label>
					{variant === 'dark' ? (
						<div className={styles.fileArea}>
							<input
								type="file"
								id="file"
								accept=".pdf,.dwg,.dxf,.step,.stp,.igs,.iges,.jpg,.jpeg,.png"
								onChange={handleFileChange}
								className="hidden"
							/>
							<label htmlFor="file" className="cursor-pointer">
								<i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
								<p className={styles.fileText}>
									{formData.file ? formData.file.name : 'Kliknij aby wybrać pliki lub przeciągnij tutaj'}
								</p>
								<p className={styles.fileTextSmall}>PDF, CAD, JPG, PNG (max 10MB)</p>
							</label>
						</div>
					) : (
						<>
							<input
								type="file"
								id="file"
								accept=".pdf,.dwg,.dxf,.step,.stp,.igs,.iges,.jpg,.jpeg,.png"
								onChange={handleFileChange}
								className={styles.fileArea}
							/>
							{formData.file && (
								<p className={styles.fileTextSmall}>
									<i className="fas fa-file mr-1"></i>
									{formData.file.name}
								</p>
							)}
						</>
					)}
				</div>

				<button type="submit" disabled={isSubmitting} className={styles.button}>
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
	)
}

