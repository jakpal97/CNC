const siteUrl = 'https://emkametal.pl'

export const metadata = {
	title: 'Portfolio | Realizacje CNC - Aluminium, Stal, Ołów',
	description:
		'Zobacz nasze realizacje w obróbce CNC: aluminium, stal nierdzewna, stal czarna, ołów i tworzywa sztuczne. Precyzyjne frezowanie 5-osiowe i toczenie CNC.',
	
	keywords: [
		'portfolio obróbka CNC',
		'realizacje CNC',
		'aluminium CNC',
		'stal nierdzewna obróbka',
		'frezowanie aluminium',
		'toczenie stali',
		'obróbka ołowiu',
		'tworzywa sztuczne CNC',
		'galeria realizacji',
		'przykłady obróbki CNC',
	],

	alternates: {
		canonical: `${siteUrl}/portfolio`,
		languages: {
			'pl-PL': `${siteUrl}/portfolio`,
			'en-US': `${siteUrl}/en/portfolio`,
			'de-DE': `${siteUrl}/de/portfolio`,
		},
	},

	openGraph: {
		title: 'Portfolio | eMKaMetal - Realizacje CNC',
		description:
			'Zobacz nasze realizacje w obróbce CNC: aluminium, stal nierdzewna, stal czarna, ołów i tworzywa sztuczne. Precyzyjne frezowanie 5-osiowe i toczenie CNC.',
		url: `${siteUrl}/portfolio`,
		siteName: 'eMKaMetal',
		type: 'website',
		locale: 'pl_PL',
		images: [
			{
				url: `${siteUrl}/images/wewnatrz.jpg`,
				width: 1200,
				height: 630,
				alt: 'eMKaMetal - Portfolio realizacji CNC',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Portfolio | eMKaMetal - Realizacje CNC',
		description:
			'Zobacz nasze realizacje w obróbce CNC: aluminium, stal nierdzewna, stal czarna, ołów i tworzywa sztuczne.',
		images: [`${siteUrl}/images/wewnatrz.jpg`],
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

export default function PortfolioLayout({ children }) {
	return children
}

