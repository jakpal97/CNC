export default function sitemap() {
	const baseUrl = 'https://emkametal.pl'
	const currentDate = new Date().toISOString()

	return [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 1.0,
			alternates: {
				languages: {
					pl: `${baseUrl}`,
					en: `${baseUrl}/en`,
					de: `${baseUrl}/de`,
				},
			},
		},
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
		{
			url: `${baseUrl}/polityka-prywatnosci`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
		{
			url: `${baseUrl}/regulamin`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
	]
}

