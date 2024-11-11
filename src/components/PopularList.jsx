import "../styling/PopularList.css"
import { Link } from "react-router-dom"

//functional component
export const PopularList = ({ movieData }) => {
	return (
		<div className="movie-wrapper">
			<div className="movie-list">
				{movieData &&
					movieData.results.map((movie) => (
						<Link key={movie.id} to={`/details/${movie.id}`}>
							<div className="movie-card" key={movie.id}>
								<div className="hover-text">
									<h1 className="title">{movie.title}</h1>
									<h2 className="release-date">
										Released {movie.release_date}
									</h2>
								</div>
								<div className="poster">
									<img
										className="movie-image"
										src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
										alt={`Movie poster for ${movie.title}`}
									/>
								</div>
							</div>
						</Link>
					))}
			</div>
		</div>
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
