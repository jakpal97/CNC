// robots.js dla eMKaMetal - Next.js 13+ App Router
// Umieść w folderze: app/robots.js

export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: [
					'/api/',
					'/_next/',
					'/admin/',
					'/404',
					'/*.json$',
					'/private/',
				],
			},
			{
				userAgent: 'Googlebot',
				allow: '/',
				crawlDelay: 0,
			},
			{
				userAgent: 'Googlebot-Image',
				allow: '/',
				crawlDelay: 0,
			},
			{
				userAgent: 'Bingbot',
				allow: '/',
				crawlDelay: 0,
			},
			{
				userAgent: 'Slurp', // Yahoo
				allow: '/',
				crawlDelay: 1,
			},
			// Boty scrapujące - ograniczenie
			{
				userAgent: 'AhrefsBot',
				crawlDelay: 10,
				disallow: '/',
			},
			{
				userAgent: 'SemrushBot',
				crawlDelay: 10,
				disallow: '/',
			},
			{
				userAgent: 'MJ12bot',
				disallow: '/',
			},
			{
				userAgent: 'DotBot',
				disallow: '/',
			},
		],
		sitemap: 'https://www.emkametal.pl/sitemap.xml',
		host: 'https://www.emkametal.pl',
	}
}