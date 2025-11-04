'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import Services from '../components/Services'
import Capabilities from '../components/Capabilities'
import PortfolioGallery from '../components/PortfolioGallery'
import About from '../components/About'

import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			
			<Services />
			<Capabilities />
			<PortfolioGallery isHomePage={true} />
			<About />
			
			<CTA />
			<Contact />
			<Footer />
		</>
	)
}
