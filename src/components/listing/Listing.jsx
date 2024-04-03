import { useEffect, useState } from "react"
import "./Listing.css"
import { MovieCard } from "../movieCards/MovieCard"

export const Listing = ({ genreId }) => {
	const [results, setResults] = useState([])
	const [page, setPage] = useState(1)
	const API_KEY = "581a97ea9ebd9cf581e85b49251999f8"
	const API_LANG = "en-US"

	const fetchMovie = async () => {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${API_LANG}&page=${page}`
			)
			if (!response.ok) {
				throw Error("Something wrong with the fetch")
			}
			const data = await response.json()
			const movies = data.results

			// If page is over 1, add new results to previous results
			if (page > 1) {
				const newData = movies.map((movie) => ({
					...movie,
					uniqueKey: `${movie.id}-${page}`, // Ensure unique key
				}))
				setResults((prevResults) => [...prevResults, ...newData])
			} else {
				// Otherwise, just take the results
				setResults(movies)
			}
		} catch (error) {
			console.error("Error", error)
		}
	}

	useEffect(() => {
		fetchMovie()
	}, [])

	const loadMore = () => {
		setPage((prevPage) => prevPage + 1)
		fetchMovie()
	}

	return (
		<>
			<section className='movie-card'>
				{results &&
					results.map((movie, index) => {
						// console.log(movie)
						return <MovieCard key={index} data={movie} />
					})}
			</section>
			<div className='load-more-wrapper'>
				<button id='load-more-btn' onClick={loadMore}>
					{" "}
					Load more{" "}
				</button>
			</div>
		</>
	)
}
