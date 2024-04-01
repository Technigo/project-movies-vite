import { useParams } from "react-router-dom"
import "./Details.css"
import { useEffect, useState } from "react"

export const Details = () => {
	const movie = useParams()
	const [results, setResults] = useState()
	const API_KEY = "581a97ea9ebd9cf581e85b49251999f8"
	const API_LANG = "en-US"
	const POSTER_URL = "https://image.tmdb.org/t/p"

	useEffect(() => {
		const fetchDetails = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/${movie.slug}?api_key=${API_KEY}&language=${API_LANG}`
				)
				if (!response.ok) {
					throw Error("Something wrong with the fetch")
				}
				const data = await response.json()
				setResults(data)
			} catch (error) {
				console.error("Error", error)
			}
		}

		fetchDetails()
	}, [])

	return (
		<>
			{results && (
				<section
					className='details-container'
					style={{
						background: `linear-gradient(rgba(0, 0, 0, 0) 20%, rgb(0, 0, 0) 100%), url(${POSTER_URL}/original${results.backdrop_path}) center/cover no-repeat`,
					}}>
					<div className='details'>
						<img
							className='poster'
							src={`${POSTER_URL}/w500${results.poster_path}`}
							alt={results.title}
						/>
						<div className='summary'>
							<h1 className='title'>{results.title}</h1>
							<p className='ranking'>
								{Math.round(results.vote_average * 100) / 100}
							</p>
							<p className='desc'>{results.overview}</p>
						</div>
					</div>
				</section>
			)}
		</>
	)
}
