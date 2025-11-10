/** @type {import('next').NextConfig} */
const nextConfig = {
	// Kompresja i optymalizacja
	compress: true,
	poweredByHeader: false,
	
	// Optymalizacja obrazów
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
		],
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 31536000, // 1 rok w sekundach
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		unoptimized: false,
	},
	
	// Headers dla SEO i bezpieczeństwa
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains',
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
				],
			},
			{
				source: '/images/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			{
				source: '/_next/static/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		]
	},
	
	// Redirects dla SEO
	async redirects() {
		return [
			{
				source: '/index.html',
				destination: '/',
				permanent: true,
			},
			{
				source: '/home',
				destination: '/',
				permanent: true,
			},
		]
	},
	
	// Optymalizacja SWC
	swcMinify: true,
	
	// Experimental features dla lepszej wydajności
	experimental: {
		optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
	},
	
	// Webpack optimizations
	webpack: (config, { dev, isServer }) => {
		// Produkcja: minimalizacja i optymalizacja
		if (!dev && !isServer) {
			config.optimization = {
				...config.optimization,
				minimize: true,
				moduleIds: 'deterministic',
				runtimeChunk: 'single',
				splitChunks: {
					chunks: 'all',
					cacheGroups: {
						default: false,
						vendors: false,
						commons: {
							name: 'commons',
							chunks: 'all',
							minChunks: 2,
							priority: 10,
						},
						lib: {
							test: /[\\/]node_modules[\\/]/,
							name(module) {
								const packageName = module.context.match(
									/[\\/]node_modules[\\/](.*?)([\\/]|$)/
								)?.[1]
								return `npm.${packageName?.replace('@', '')}`
							},
							priority: 20,
						},
					},
				},
			}
		}
		
		return config
	},
}

module.exports = nextConfig
