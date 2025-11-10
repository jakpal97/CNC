const siteUrl = 'https://emkametal.pl'

export const metadata = {
	title: 'Regulamin | eMKaMetal',
	description:
		'Regulamin świadczenia usług obróbki CNC przez eMKaMetal. Warunki współpracy, zasady składania zamówień i realizacji projektów.',
	
	keywords: [
		'regulamin',
		'warunki współpracy',
		'zasady świadczenia usług',
		'eMKaMetal',
		'regulamin CNC',
	],

	alternates: {
		canonical: `${siteUrl}/regulamin`,
	},

	openGraph: {
		title: 'Regulamin | eMKaMetal',
		description:
			'Regulamin świadczenia usług obróbki CNC przez eMKaMetal. Warunki współpracy, zasady składania zamówień i realizacji projektów.',
		url: `${siteUrl}/regulamin`,
		siteName: 'eMKaMetal',
		type: 'website',
		locale: 'pl_PL',
	},

	twitter: {
		card: 'summary',
		title: 'Regulamin | eMKaMetal',
		description:
			'Regulamin świadczenia usług obróbki CNC przez eMKaMetal.',
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

export default function TermsLayout({ children }) {
	return children
}

