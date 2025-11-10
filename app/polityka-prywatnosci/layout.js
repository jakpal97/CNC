const siteUrl = 'https://emkametal.pl'

export const metadata = {
	title: 'Polityka Prywatności | eMKaMetal',
	description:
		'Polityka prywatności i ochrony danych osobowych eMKaMetal. Dowiedz się, jak przetwarzamy i chronimy Twoje dane zgodnie z RODO.',
	
	keywords: [
		'polityka prywatności',
		'ochrona danych osobowych',
		'RODO',
		'przetwarzanie danych',
		'eMKaMetal',
	],

	alternates: {
		canonical: `${siteUrl}/polityka-prywatnosci`,
	},

	openGraph: {
		title: 'Polityka Prywatności | eMKaMetal',
		description:
			'Polityka prywatności i ochrony danych osobowych eMKaMetal. Dowiedz się, jak przetwarzamy i chronimy Twoje dane zgodnie z RODO.',
		url: `${siteUrl}/polityka-prywatnosci`,
		siteName: 'eMKaMetal',
		type: 'website',
		locale: 'pl_PL',
	},

	twitter: {
		card: 'summary',
		title: 'Polityka Prywatności | eMKaMetal',
		description:
			'Polityka prywatności i ochrony danych osobowych eMKaMetal zgodnie z RODO.',
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
}

export default function PrivacyPolicyLayout({ children }) {
	return children
}

