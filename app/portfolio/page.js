'use client'

import Navbar from '../../components/Navbar'
import MachineHero from '../../components/machines/MachineHero'
import MachinesList from '../../components/machines/MachinesList'
import ProjectsGallery from '../../components/machines/ProjectsGallery'
import Footer from '../../components/Footer'

export default function PortfolioPage() {
	return (
		<>
			<Navbar />
			<MachineHero />
			<MachinesList />
			<ProjectsGallery />
			<Footer />
		</>
	)
}
