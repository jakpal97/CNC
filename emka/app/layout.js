import './globals.css'
import { LanguageProvider } from '../lib/LanguageContext'
import Script from 'next/script'

export const metadata = {
	title: 'ExactCut Parts - Precision CNC Machining Solutions',
	description:
		'High-quality CNC machined parts with tight tolerances and exceptional surface finishes for industries worldwide.',
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
