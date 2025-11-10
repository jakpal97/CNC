const siteUrl = 'https://emkametal.pl'

export const metadata = {
	title: 'Kontakt | eMKaMetal - Obróbka CNC Tarnowskie Góry',
	description:
		'Skontaktuj się z nami! eMKaMetal - ul. Kazimierza Zachnika 10, Tarnowskie Góry. Tel: +48 510 325 466. Email: biuro@emkametal.pl. Bezpłatna wycena obróbki CNC.',
	
	keywords: [
		'kontakt obróbka CNC',
		'eMKaMetal kontakt',
		'CNC Tarnowskie Góry',
		'wycena obróbki CNC',
		'formularz kontaktowy',
		'adres eMKaMetal',
		'telefon CNC',
		'email obróbka metali',
		'Tarnowskie Góry',
		'Śląsk',
	],

	alternates: {
		canonical: `${siteUrl}/contact`,
		languages: {
			'pl-PL': `${siteUrl}/contact`,
			'en-US': `${siteUrl}/en/contact`,
			'de-DE': `${siteUrl}/de/contact`,
		},
	},

	openGraph: {
		title: 'Kontakt | eMKaMetal - Obróbka CNC Tarnowskie Góry',
		description:
			'Skontaktuj się z nami! eMKaMetal - ul. Kazimierza Zachnika 10, Tarnowskie Góry. Tel: +48 510 325 466. Bezpłatna wycena obróbki CNC.',
		url: `${siteUrl}/contact`,
		siteName: 'eMKaMetal',
		type: 'website',
		locale: 'pl_PL',
		images: [
			{
				url: `${siteUrl}/images/zewnatrz.jpg`,
				width: 1200,
				height: 630,
				alt: 'eMKaMetal - Zakład produkcyjny w Tarnowskich Górach',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Kontakt | eMKaMetal - Obróbka CNC',
		description:
			'Skontaktuj się z nami! eMKaMetal - Tarnowskie Góry. Tel: +48 510 325 466. Bezpłatna wycena.',
		images: [`${siteUrl}/images/zewnatrz.jpg`],
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function ContactLayout({ children }) {
	return children
}

