import { useState, useEffect } from 'react'
import '../styling/PopularList.css'
import { MovieCard } from './MovieCard.jsx'
import { Loader } from './Loader.jsx'

//functional component
export const PopularList = ({ movieData }) => {
	console.log('moviedata popularLIst', movieData)

	return (
		<>
			{movieData &&
				movieData.results.map((movie) => (
					<div className="movie-card" key={movie.id}>
						<div className="movie-image">
							<img src="" alt=""></img>
						</div>
						<div className="movie-text">
							<h2>Titel</h2>
							<h3>Släppdatum</h3>
						</div>
					</div>
				))}
		</>
	)
}

// 	return (
// 		<>
// 			{jsonMovies.map((movie) => (
// 				<article className="movie-card" key={movie.id}>
// 					<Link to={`/details/${movie.id}`}></Link>
// 				</article>
// 			))}
// 		</>
// 	)
// }
