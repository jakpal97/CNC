import { useState, useEffect } from 'react'
import { useLanguage } from '../lib/LanguageContext'

export const usePortfolio = () => {
	const { locale } = useLanguage()
	const [portfolioData, setPortfolioData] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadPortfolioData = async () => {
			try {
				const response = await fetch('/data/portfolio.json')
				const data = await response.json()
				setPortfolioData(data)
			} catch (error) {
				console.error('Error loading portfolio data:', error)
			} finally {
				setLoading(false)
			}
		}

		loadPortfolioData()
	}, [])

	const getProjects = () => {
		if (!portfolioData) return []

		return portfolioData.projects.map(project => ({
			id: project.id,
			title: project.title[locale] || project.title.pl,
			description: project.description[locale] || project.description.pl,
			material: project.material,
			category: project.category,
			image: project.image,
			specs: project.specs[locale] || project.specs.pl,
			tags: project.tags[locale] || project.tags.pl,
		}))
	}

	const getMaterials = () => {
		if (!portfolioData) return []

		const materials = portfolioData.materials[locale] || portfolioData.materials.pl
		return Object.entries(materials).map(([id, name]) => ({ id, name }))
	}

	const getCategories = () => {
		if (!portfolioData) return []

		const categories = portfolioData.categories[locale] || portfolioData.categories.pl
		return Object.entries(categories).map(([id, name]) => ({ id, name }))
	}

	const filterProjectsByMaterial = material => {
		const projects = getProjects()
		return material === 'all' ? projects : projects.filter(project => project.material === material)
	}

	const filterProjectsByCategory = category => {
		const projects = getProjects()
		return category === 'all' ? projects : projects.filter(project => project.category === category)
	}

	return {
		loading,
		getProjects,
		getMaterials,
		getCategories,
		filterProjectsByMaterial,
		filterProjectsByCategory,
	}
}
