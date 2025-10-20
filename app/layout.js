import './globals.css'
import { LanguageProvider } from '../lib/LanguageContext'
import Script from 'next/script'

export const metadata = {
	title: 'eMKa Metal - Precyzja w obróbce metali | Twój partner CNC',
	description: 'Precyzja i doświadczenie w każdym detalu. eMKa Metal to Twój zaufany partner w obróbce metali CNC. Wysokiej jakości części o ścisłych tolerancjach dla przemysłu.',
	keywords: 'obróbka metali, CNC, precyzyjna obróbka, eMKa Metal, frezowanie CNC, toczenie CNC',
	authors: [{ name: 'eMKa Metal' }],
	openGraph: {
		title: 'eMKa Metal - Precyzja w obróbce metali',
		description: 'Twój partner w profesjonalnej obróbce metali CNC',
		locale: 'pl_PL',
		type: 'website',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
			</head>
			<body className="font-sans text-gray-800">
				<LanguageProvider>{children}</LanguageProvider>

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
			</body>
		</html>
	)
}
