import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
	try {
		const formData = await request.formData()
		
		const name = formData.get('name')
		const email = formData.get('email')
		const phone = formData.get('phone') || 'Nie podano'
		const company = formData.get('company') || 'Nie podano'
		const subject = formData.get('subject')
		const message = formData.get('message')
		const file = formData.get('file')

		// Walidacja wymaganych pól
		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'Brakuje wymaganych pól' },
				{ status: 400 }
			)
		}

		// Przygotowanie załącznika jeśli istnieje
		let attachments = []
		if (file && file.size > 0) {
			const bytes = await file.arrayBuffer()
			const buffer = Buffer.from(bytes)
			
			attachments.push({
				filename: file.name,
				content: buffer,
			})
		}

		// Wysyłanie emaila przez Resend
		const data = await resend.emails.send({
			from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
			to: process.env.RESEND_TO_EMAIL || 'your-email@example.com',
			subject: `Nowe zapytanie: ${subject}`,
			replyTo: email,
			html: `
				<!DOCTYPE html>
				<html>
				<head>
					<style>
						body {
							font-family: Arial, sans-serif;
							line-height: 1.6;
							color: #333;
						}
						.container {
							max-width: 600px;
							margin: 0 auto;
							padding: 20px;
						}
						.header {
							background-color: #E10600;
							color: white;
							padding: 20px;
							text-align: center;
							border-radius: 5px 5px 0 0;
						}
						.content {
							background-color: #f9f9f9;
							padding: 30px;
							border: 1px solid #ddd;
							border-radius: 0 0 5px 5px;
						}
						.field {
							margin-bottom: 15px;
						}
						.label {
							font-weight: bold;
							color: #E10600;
						}
						.value {
							margin-top: 5px;
							padding: 10px;
							background-color: white;
							border-left: 3px solid #E10600;
						}
						.footer {
							text-align: center;
							margin-top: 20px;
							padding-top: 20px;
							border-top: 1px solid #ddd;
							font-size: 12px;
							color: #666;
						}
					</style>
				</head>
				<body>
					<div class="container">
						<div class="header">
							<h1>Nowe zapytanie kontaktowe</h1>
						</div>
						<div class="content">
							<div class="field">
								<div class="label">Imię i nazwisko:</div>
								<div class="value">${name}</div>
							</div>
							
							<div class="field">
								<div class="label">Email:</div>
								<div class="value"><a href="mailto:${email}">${email}</a></div>
							</div>
							
							<div class="field">
								<div class="label">Telefon:</div>
								<div class="value">${phone}</div>
							</div>
							
							<div class="field">
								<div class="label">Firma:</div>
								<div class="value">${company}</div>
							</div>
							
							<div class="field">
								<div class="label">Temat:</div>
								<div class="value">${subject}</div>
							</div>
							
							<div class="field">
								<div class="label">Wiadomość:</div>
								<div class="value">${message.replace(/\n/g, '<br>')}</div>
							</div>
							
							${file && file.size > 0 ? `
							<div class="field">
								<div class="label">Załącznik:</div>
								<div class="value">📎 ${file.name} (${(file.size / 1024).toFixed(2)} KB)</div>
							</div>
							` : ''}
						</div>
						<div class="footer">
							<p>Ten email został wysłany z formularza kontaktowego na stronie eMKaMetal</p>
						</div>
					</div>
				</body>
				</html>
			`,
			attachments: attachments.length > 0 ? attachments : undefined,
		})

		return NextResponse.json(
			{ success: true, messageId: data.id },
			{ status: 200 }
		)
	} catch (error) {
		console.error('Error sending email:', error)
		return NextResponse.json(
			{ error: 'Błąd podczas wysyłania wiadomości', details: error.message },
			{ status: 500 }
		)
	}
}

