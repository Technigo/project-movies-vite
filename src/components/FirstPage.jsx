import { useState, useEffect } from "react"
import { PopularList } from "./PopularList.jsx"
import { Loader } from "./Loader"

export const Movies = () => {
	const [movieData, setMovieData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	const apiEnv = import.meta.env.VITE_OPENDB_KEY
	const testUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`

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
	console.log("moviedata firstpage", movieData)
	return (
		<>
			{isLoading && <Loader />}
			<PopularList movieData={movieData} />
		</>
	)
}
