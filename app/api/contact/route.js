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
		const gdprConsent = formData.get('gdprConsent')
		const marketingConsent = formData.get('marketingConsent')
		const consentTimestamp = formData.get('consentTimestamp')

	
		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'Brakuje wymaganych pól' },
				{ status: 400 }
			)
		}

		
		let attachments = []
		if (file && file.size > 0) {
			const bytes = await file.arrayBuffer()
			const buffer = Buffer.from(bytes)
			
			attachments.push({
				filename: file.name,
				content: buffer,
			})
		}

		
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
							<hr style="border: none; border-top: 3px solid #E10600; margin: 25px 0;">
							
							<h2 style="color: #E10600; font-size: 16px; margin-bottom: 15px; text-align: center;">
								━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━<br>
								✅ ZGODA RODO
								<br>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
							</h2>
							
							<div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #4caf50;">
								<h3 style="color: #2e7d32; margin-top: 0; font-size: 14px;">
									${gdprConsent === 'true' ? '✅ ZGODA WYRAŻONA' : '❌ BRAK ZGODY'}
								</h3>
								
								<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
									<tr>
										<td style="padding: 8px 0; border-bottom: 1px solid #c8e6c9;">
											<strong style="color: #1b5e20;">Treść zgody:</strong>
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; font-size: 12px; color: #424242;">
											"Wyrażam zgodę na przetwarzanie moich danych osobowych przez eMKa Metal w celu udzielenia odpowiedzi na wysłane zapytanie."
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; border-bottom: 1px solid #c8e6c9;">
											<strong style="color: #1b5e20;">Podstawa prawna:</strong>
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; font-size: 12px; color: #424242;">
											art. 6 ust. 1 lit. a RODO
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; border-bottom: 1px solid #c8e6c9;">
											<strong style="color: #1b5e20;">Data wyrażenia:</strong>
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; font-size: 12px; color: #424242;">
											${new Date(consentTimestamp).toLocaleString('pl-PL', { 
												timeZone: 'Europe/Warsaw',
												year: 'numeric',
												month: '2-digit',
												day: '2-digit',
												hour: '2-digit',
												minute: '2-digit',
												second: '2-digit'
											})}
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; border-bottom: 1px solid #c8e6c9;">
											<strong style="color: #1b5e20;">IP użytkownika:</strong>
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; font-size: 12px; color: #424242;">
											${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Nieznane'}
										</td>
									</tr>
								</table>
							</div>
							
							${marketingConsent === 'true' ? `
							<div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #ff9800;">
								<h3 style="color: #e65100; margin-top: 0; font-size: 14px;">
									📧 ZGODA MARKETINGOWA (OPCJONALNA)
								</h3>
								
								<table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
									<tr>
										<td style="padding: 8px 0; border-bottom: 1px solid #ffe0b2;">
											<strong style="color: #bf360c;">Treść zgody:</strong>
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; font-size: 12px; color: #424242;">
											"Wyrażam zgodę na otrzymywanie informacji handlowych od eMKa Metal drogą elektroniczną (newsletter, oferty) zgodnie z ustawą o świadczeniu usług drogą elektroniczną."
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; border-bottom: 1px solid #ffe0b2;">
											<strong style="color: #bf360c;">Status:</strong>
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; font-size: 12px; color: #424242;">
											✅ Wyrażona
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; border-bottom: 1px solid #ffe0b2;">
											<strong style="color: #bf360c;">Data wyrażenia:</strong>
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 0; font-size: 12px; color: #424242;">
											${new Date(consentTimestamp).toLocaleString('pl-PL', { 
												timeZone: 'Europe/Warsaw',
												year: 'numeric',
												month: '2-digit',
												day: '2-digit',
												hour: '2-digit',
												minute: '2-digit',
												second: '2-digit'
											})}
										</td>
									</tr>
								</table>
							</div>
							` : ''}
							
							<div style="background-color: #ffebee; padding: 15px; border-radius: 5px; border-left: 5px solid #d32f2f; margin-bottom: 20px;">
								<p style="margin: 0; font-size: 12px; color: #c62828;">
									⚠️ <strong>WAŻNE:</strong> Zachowaj ten email jako dowód wyrażenia zgody zgodnie z art. 7 RODO.
								</p>
							</div>
							
							<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
							<p style="font-size: 11px; color: #999; text-align: center;">
								Ten email został wysłany z formularza kontaktowego na stronie <strong>eMKaMetal</strong><br>
								ul. Kazimierza Zachnika 10, 42-600 Tarnowskie Góry
							</p>
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

