import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NotFoundContent from '../components/NotFoundContent'

const siteUrl = 'https://emkametal.pl'

// Metadata dla strony 404
export const metadata = {
	title: '404 - Strona nie znaleziona | eMKaMetal',
	description:
		'Przepraszamy, strona której szukasz nie istnieje. Wróć do strony głównej eMKaMetal lub skontaktuj się z nami.',
	robots: {
		index: false,
		follow: true,
	},
	alternates: {
		canonical: `${siteUrl}/404`,
	},
}

// Server Component - aby Vercel poprawnie wykrywał 404
export default function NotFound() {
	return (
		<div className="min-h-screen bg-slate-900">
			<Navbar />
			<NotFoundContent />
			<Footer />
		</div>
	)
}
