// JSON-LD Structured Data dla SEO

export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'eMKaMetal',
	alternateName: 'eMKa Metal',
	url: 'https://emkametal.pl',
	logo: 'https://emkametal.pl/images/logo.jpg',
	image: 'https://emkametal.pl/images/wewnatrz.jpg',
	description:
		'Profesjonalna obróbka metali CNC - frezowanie 5-osiowe, toczenie, cięcie piłą taśmową. Precyzja do ±0.003mm dla aluminium, stali, ołowiu i tworzyw sztucznych.',
	
	foundingDate: '2013',
	
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'ul. Kazimierza Zachnika 10',
		addressLocality: 'Tarnowskie Góry',
		postalCode: '42-600',
		addressCountry: 'PL',
		addressRegion: 'Śląskie',
	},
	
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 50.4417,
		longitude: 18.8638,
	},
	
	contactPoint: [
		{
			'@type': 'ContactPoint',
			telephone: '+48-510-325-466',
			contactType: 'customer service',
			areaServed: ['PL', 'EU'],
			availableLanguage: ['Polish', 'English', 'German'],
		},
		{
			'@type': 'ContactPoint',
			telephone: '+48-517-911-771',
			contactType: 'sales',
			areaServed: ['PL', 'EU', 'Worldwide'],
			availableLanguage: ['Polish', 'English', 'German'],
		},
	],
	
	email: 'biuro@emkametal.pl',
	
	sameAs: [
		'https://www.facebook.com/emkametal',
		'https://www.linkedin.com/company/emkametal',
		'https://maps.google.com/?q=eMKaMetal+Tarnowskie+Góry',
	],
	
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi obróbki CNC',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Frezowanie CNC 5-osiowe',
					description: 'Precyzyjne frezowanie CNC na maszynach 3, 4 i 5-osiowych z tolerancją ±0.003mm',
					serviceType: 'CNC Milling',
					areaServed: ['PL', 'EU', 'Worldwide'],
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Toczenie CNC',
					description: 'Toczenie CNC z przeciwwrzecionem i narzędziami napędzanymi, średnica do Ø310mm',
					serviceType: 'CNC Turning',
					areaServed: ['PL', 'EU', 'Worldwide'],
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Cięcie piłą taśmową',
					description: 'Automatyczne cięcie piłą taśmową materiałów do Ø255mm z dokładnością 0.1mm',
					serviceType: 'Band Saw Cutting',
					areaServed: ['PL', 'EU', 'Worldwide'],
				},
			},
		],
	},
	
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '4.9',
		reviewCount: '87',
		bestRating: '5',
		worstRating: '1',
	},
	
	numberOfEmployees: {
		'@type': 'QuantitativeValue',
		value: '15',
	},
	
	keywords:
		'obróbka CNC, frezowanie CNC, toczenie CNC, obróbka metali, precyzyjna obróbka, 5-axis milling, aluminium, stal, ołów, tworzywa sztuczne, Tarnowskie Góry, Śląsk, Polska',
}

export const localBusinessSchema = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	'@id': 'https://emkametal.pl/#localbusiness',
	name: 'eMKaMetal',
	image: 'https://emkametal.pl/images/wewnatrz.jpg',
	'@id': 'https://emkametal.pl',
	url: 'https://emkametal.pl',
	telephone: '+48510325466',
	email: 'biuro@emkametal.pl',
	priceRange: '$$',
	
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'ul. Kazimierza Zachnika 10',
		addressLocality: 'Tarnowskie Góry',
		postalCode: '42-600',
		addressCountry: 'PL',
	},
	
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 50.4417,
		longitude: 18.8638,
	},
	
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '08:00',
			closes: '16:00',
		},
	],
	
	paymentAccepted: 'Cash, Credit Card, Bank Transfer',
	currenciesAccepted: 'PLN, EUR',
}

export const breadcrumbSchema = path => {
	const pathSegments = path.split('/').filter(Boolean)
	const baseUrl = 'https://emkametal.pl'

	const itemListElement = [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Strona główna',
			item: baseUrl,
		},
	]

	pathSegments.forEach((segment, index) => {
		const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
		const url = `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`

		itemListElement.push({
			'@type': 'ListItem',
			position: index + 2,
			name,
			item: url,
		})
	})

	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement,
	}
}

export const serviceSchema = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	name: 'eMKaMetal - Obróbka CNC',
	image: 'https://emkametal.pl/images/wewnatrz.jpg',
	url: 'https://emkametal.pl',
	telephone: '+48510325466',
	priceRange: '$$',
	
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'ul. Kazimierza Zachnika 10',
		addressLocality: 'Tarnowskie Góry',
		postalCode: '42-600',
		addressCountry: 'PL',
	},
	
	areaServed: [
		{
			'@type': 'Country',
			name: 'Poland',
		},
		{
			'@type': 'Place',
			name: 'European Union',
		},
		{
			'@type': 'Place',
			name: 'Worldwide',
		},
	],
	
	serviceType: ['CNC Machining', 'Metal Fabrication', 'Precision Manufacturing'],
}

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: [
		{
			'@type': 'Question',
			name: 'Jakie materiały obrabiamy?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Specjalizujemy się w obróbce aluminium, stali czarnej, stali nierdzewnej, ołowiu oraz tworzyw sztucznych. Oferujemy precyzyjną obróbkę z tolerancją do ±0.003mm.',
			},
		},
		{
			'@type': 'Question',
			name: 'Jakie tolerancje obróbcze zapewniamy?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Nasze maszyny CNC umożliwiają obróbkę z precyzją do ±0.003mm. Posiadamy frezarki 5-osiowe Hurco VMX42SR i tokarki CNC Hyundai WIA z przeciwwrzecionem.',
			},
		},
		{
			'@type': 'Question',
			name: 'Czy realizujemy zamówienia prototypowe?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Tak, realizujemy zarówno produkcję prototypową (od 1 sztuki), jak i seryjną (do 1 miliona części). Posiadamy ponad 10 lat doświadczenia w branży.',
			},
		},
		{
			'@type': 'Question',
			name: 'Jaki jest czas realizacji zamówienia?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Czas realizacji zależy od złożoności projektu. Standardowe zamówienia realizujemy w 5-10 dni roboczych. W przypadku pilnych zleceń oferujemy tryb ekspresowy.',
			},
		},
		{
			'@type': 'Question',
			name: 'Czy eksportujemy poza Polskę?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Tak, współpracujemy z klientami z całej Europy i świata. Oferujemy obsługę w języku polskim, angielskim i niemieckim. Zapewniamy profesjonalne pakowanie i wysyłkę międzynarodową.',
			},
		},
	],
}

