// sitemap.js dla eMKaMetal - Next.js 13+ App Router
// Umieść w folderze: app/sitemap.js

export default function sitemap() {
	const baseUrl = 'https://www.emkametal.pl'
	const currentDate = new Date().toISOString()

	return [
		// Strona główna
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 1.0,
			alternates: {
				languages: {
					pl: baseUrl,
					en: `${baseUrl}/en`,
					de: `${baseUrl}/de`,
				},
			},
		},

		// Kontakt
		{
			url: `${baseUrl}/contact`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.9,
			alternates: {
				languages: {
					pl: `${baseUrl}/contact`,
					en: `${baseUrl}/en/contact`,
					de: `${baseUrl}/de/contact`,
				},
			},
		},

		// Portfolio
		{
			url: `${baseUrl}/portfolio`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.8,
			alternates: {
				languages: {
					pl: `${baseUrl}/portfolio`,
					en: `${baseUrl}/en/portfolio`,
					de: `${baseUrl}/de/portfolio`,
				},
			},
		},

		// Usługi - dodaj wszystkie!
		{
			url: `${baseUrl}/services/cnc-milling`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.9,
			alternates: {
				languages: {
					pl: `${baseUrl}/services/cnc-milling`,
					en: `${baseUrl}/en/services/cnc-milling`,
					de: `${baseUrl}/de/services/cnc-milling`,
				},
			},
		},

		{
			url: `${baseUrl}/services/5-axis-milling`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.9,
			alternates: {
				languages: {
					pl: `${baseUrl}/services/5-axis-milling`,
					en: `${baseUrl}/en/services/5-axis-milling`,
					de: `${baseUrl}/de/services/5-axis-milling`,
				},
			},
		},

		{
			url: `${baseUrl}/services/cnc-turning`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.9,
			alternates: {
				languages: {
					pl: `${baseUrl}/services/cnc-turning`,
					en: `${baseUrl}/en/services/cnc-turning`,
					de: `${baseUrl}/de/services/cnc-turning`,
				},
			},
		},

		{
			url: `${baseUrl}/services/band-saw-cutting`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					pl: `${baseUrl}/services/band-saw-cutting`,
					en: `${baseUrl}/en/services/band-saw-cutting`,
					de: `${baseUrl}/de/services/band-saw-cutting`,
				},
			},
		},

		// Park maszynowy
		{
			url: `${baseUrl}/machinery`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.7,
			alternates: {
				languages: {
					pl: `${baseUrl}/machinery`,
					en: `${baseUrl}/en/machinery`,
					de: `${baseUrl}/de/machinery`,
				},
			},
		},

		// O firmie
		{
			url: `${baseUrl}/about`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					pl: `${baseUrl}/about`,
					en: `${baseUrl}/en/about`,
					de: `${baseUrl}/de/about`,
				},
			},
		},

		// Polityka prywatności
		{
			url: `${baseUrl}/polityka-prywatnosci`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},

		// Regulamin
		{
			url: `${baseUrl}/regulamin`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
	]
}