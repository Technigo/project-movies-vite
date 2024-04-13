import { useState, useEffect } from 'react'
import { PopularList } from './PopularList.jsx'
import { Loader } from './Loader'

export const Movies = () => {
	const [movieData, setMovieData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	const BASE_URL = 'https://api.themoviedb.org/3/movie/'
	const API_KEY = '23ace2b0c27910f5cec13f5bdb014044'
	// const urlMovies = `${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`

	const testUrl =
		'https://api.themoviedb.org/3/movie/popular?api_key=23ace2b0c27910f5cec13f5bdb014044&language=en-US&page=1'

	useEffect(() => {
		fetch(testUrl)
			.then((result) => result.json())
			.then((json) => {
				setMovieData(json)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [testUrl])
	console.log('moviedata firstpage', movieData)
	return (
		<>
			{isLoading && <Loader />}
			<PopularList movieData={movieData} />
		</>
	)
}
