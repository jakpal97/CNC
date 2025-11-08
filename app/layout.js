import './globals.css'
import { LanguageProvider } from '../lib/LanguageContext'
import Script from 'next/script'
import { organizationSchema, localBusinessSchema, serviceSchema, faqSchema } from '../lib/structuredData'

const siteUrl = 'https://emkametal.pl'
const siteName = 'eMKaMetal'

export const metadata = {
	metadataBase: new URL(siteUrl),

	// Podstawowe meta tagi
	title: {
		default: 'eMKa Metal - Precyzja w obróbce metali | Twój partner CNC',
		template: '%s | eMKaMetal - Obróbka CNC',
	},
	description:
		'Profesjonalna obróbka metali CNC ⚙️ Frezowanie 5-osiowe, toczenie CNC, cięcie piłą taśmową. Precyzja ±0.003mm ✓ Aluminium, stal, ołów ✓ 10+ lat doświadczenia ✓ Tarnowskie Góry, Śląsk',

	keywords: [
		'obróbka CNC',
		'frezowanie CNC',
		'toczenie CNC',
		'obróbka metali',
		'precyzyjna obróbka',
		'frezowanie 5-osiowe',
		'frezowanie 4-osiowe',
		'toczenie z przeciwwrzecionem',
		'cięcie piłą taśmową',
		'obróbka aluminium',
		'obróbka stali',
		'obróbka ołowiu',
		'obróbka tworzyw sztucznych',
		'Hurco VMX42SR',
		'Hyundai WIA',
		'Tarnowskie Góry',
		'Śląsk',
		'Polska',
		'tolerancje ±0.003mm',
		'produkcja seryjna',
		'produkcja prototypowa',
		'nitowanie PEM',
		'wciskanie kołków',
		'zaginanie blach ołowianych',
	],

	authors: [{ name: 'eMKa Metal', url: siteUrl }],
	creator: 'eMKaMetal',
	publisher: 'eMKaMetal',

	// Robots
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

	// Alternate languages
	alternates: {
		canonical: siteUrl,
		languages: {
			'pl-PL': siteUrl,
			'en-US': `${siteUrl}/en`,
			'de-DE': `${siteUrl}/de`,
		},
	},

	// Ikony i manifest
	icons: {
		icon: [
			{ url: '/images/logo.jpg', sizes: '32x32', type: 'image/jpeg' },
			{ url: '/images/logo.jpg', sizes: '192x192', type: 'image/jpeg' },
		],
		shortcut: '/images/logo.jpg',
		apple: [{ url: '/images/logo.jpg', sizes: '180x180', type: 'image/jpeg' }],
		other: [
			{
				rel: 'mask-icon',
				url: '/images/logo.jpg',
			},
		],
	},
	manifest: '/manifest.json',

	// Open Graph
	openGraph: {
		type: 'website',
		locale: 'pl_PL',
		alternateLocale: ['en_US', 'de_DE'],
		url: siteUrl,
		siteName: siteName,
		title: 'eMKa Metal - Precyzja w obróbce metali CNC | Frezowanie 5-osiowe, Toczenie',
		description:
			'Profesjonalna obróbka CNC z precyzją ±0.003mm. Frezowanie 5-osiowe, toczenie z przeciwwrzecionem, cięcie. Aluminium, stal, ołów. 10+ lat doświadczenia. Tarnowskie Góry.',
		images: [
			{
				url: `${siteUrl}/images/wewnatrz.jpg`,
				width: 1200,
				height: 630,
				alt: 'eMKaMetal - Park maszynowy CNC - Frezarki i tokarki CNC',
				type: 'image/jpeg',
			},
			{
				url: `${siteUrl}/images/zewnatrz.jpg`,
				width: 1200,
				height: 630,
				alt: 'eMKaMetal - Zakład produkcyjny w Tarnowskich Górach',
				type: 'image/jpeg',
			},
		],
		videos: [],
	},

	// Twitter Card
	twitter: {
		card: 'summary_large_image',
		site: '@emkametal',
		creator: '@emkametal',
		title: 'eMKa Metal - Obróbka CNC | Frezowanie 5-osiowe, Toczenie',
		description:
			'Profesjonalna obróbka metali CNC z precyzją ±0.003mm. Frezowanie 5-osiowe, toczenie, cięcie. Aluminium, stal, ołów. 10+ lat doświadczenia.',
		images: [`${siteUrl}/images/wewnatrz.jpg`],
	},

	// Verification
	verification: {
		google: 'twój-kod-weryfikacji-google',
		yandex: 'twój-kod-weryfikacji-yandex',
		bing: 'twój-kod-weryfikacji-bing',
	},

	// Geo location
	other: {
		'geo.region': 'PL-SL',
		'geo.placename': 'Tarnowskie Góry',
		'geo.position': '50.4417;18.8638',
		ICBM: '50.4417, 18.8638',

		// Business info
		'business:contact_data:street_address': 'ul. Kazimierza Zachnika 10',
		'business:contact_data:locality': 'Tarnowskie Góry',
		'business:contact_data:postal_code': '42-600',
		'business:contact_data:country_name': 'Poland',
		'business:contact_data:email': 'biuro@emkametal.pl',
		'business:contact_data:phone_number': '+48510325466',
		'business:contact_data:website': siteUrl,

		// Rating
		rating: '4.9',
		review_count: '87',

		// Language
		language: 'Polish',
		'content-language': 'pl',

		// Category
		category: 'Manufacturing, CNC Machining, Metal Fabrication',
	},

	// App links
	appleWebApp: {
		capable: true,
		title: 'eMKaMetal',
		statusBarStyle: 'black-translucent',
	},

	// Format detection
	formatDetection: {
		telephone: true,
		email: true,
		address: true,
	},

	// Category
	category: 'Manufacturing',
}

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<head>
				{/* DNS Prefetch & Preconnect dla wydajności */}
				<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
				<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="https://www.google-analytics.com" />
				<link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />

				{/* Stylesheets */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>

				{/* JSON-LD Structured Data - Organization */}
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

				{/* JSON-LD Structured Data - LocalBusiness */}
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

				{/* JSON-LD Structured Data - Service */}
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

				{/* JSON-LD Structured Data - FAQ */}
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

				{/* Dodatkowe meta tagi dla SEO */}
				<meta name="theme-color" content="#E10600" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-touch-fullscreen" content="yes" />

				{/* Dodatkowe tagi bezpieczeństwa */}
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="referrer" content="origin-when-cross-origin" />
			</head>
			<body className="font-sans text-gray-800">
				<LanguageProvider>{children}</LanguageProvider>

				{/* Google Analytics - zamień na swój tracking ID */}
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-XXXXXXXXXX', {
							page_path: window.location.pathname,
							anonymize_ip: true
						});
					`}
				</Script>

				{/* Facebook Pixel - opcjonalnie */}
				<Script id="facebook-pixel" strategy="afterInteractive">
					{`
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', 'TWOJ_FACEBOOK_PIXEL_ID');
						fbq('track', 'PageView');
					`}
				</Script>

				{/* Smooth Scroll */}
				<Script id="smooth-scroll" strategy="afterInteractive">
					{`
						document.addEventListener('DOMContentLoaded', function() {
							document.querySelectorAll('a[href^="#"]').forEach(anchor => {
								anchor.addEventListener('click', function (e) {
									e.preventDefault();
									const targetId = this.getAttribute('href');
									const targetElement = document.querySelector(targetId);
									
									if (targetElement) {
										const navHeight = 80;
										const targetPosition = targetElement.offsetTop - navHeight;
										
										window.scrollTo({
											top: targetPosition,
											behavior: 'smooth'
										});
									}
								});
							});
						});
					`}
				</Script>

				{/* Performance - Lazy loading images */}
				<Script id="lazy-loading" strategy="afterInteractive">
					{`
						if ('loading' in HTMLImageElement.prototype) {
							const images = document.querySelectorAll('img[loading="lazy"]');
							images.forEach(img => {
								img.src = img.dataset.src;
							});
						} else {
							const script = document.createElement('script');
							script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
							document.body.appendChild(script);
						}
					`}
				</Script>
			</body>
		</html>
	)
}
