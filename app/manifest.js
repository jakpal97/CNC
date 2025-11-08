export default function manifest() {
	return {
		name: 'eMKaMetal - Precyzyjna obróbka CNC',
		short_name: 'eMKaMetal',
		description: 'Profesjonalna obróbka metali CNC - frezowanie, toczenie, cięcie. Wysokiej jakości części o ścisłych tolerancjach dla przemysłu.',
		start_url: '/',
		display: 'standalone',
		background_color: '#0f172a',
		theme_color: '#E10600',
		orientation: 'portrait-primary',
		scope: '/',
		lang: 'pl',
		dir: 'ltr',
		categories: ['business', 'productivity', 'manufacturing'],
		icons: [
			{
				src: '/images/logo.jpg',
				sizes: '192x192',
				type: 'image/jpeg',
				purpose: 'any maskable',
			},
			{
				src: '/images/logo.jpg',
				sizes: '512x512',
				type: 'image/jpeg',
				purpose: 'any maskable',
			},
		],
		screenshots: [
			{
				src: '/images/wewnatrz.jpg',
				sizes: '1280x720',
				type: 'image/jpeg',
				form_factor: 'wide',
			},
		],
	}
}

