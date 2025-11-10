import { NextResponse } from 'next/server'

export function middleware(request) {
	// Użyj tego middleware do obsługi szczególnych przypadków
	// Na razie po prostu przepuszczamy wszystkie requesty
	return NextResponse.next()
}

// Konfiguracja matcher - określa dla których ścieżek middleware ma działać
export const config = {
	// Wykluczamy ścieżki statyczne i API
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public folder files
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*|sitemap.xml|robots.txt|manifest.json).*)',
	],
}

