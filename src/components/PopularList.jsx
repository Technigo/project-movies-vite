import '../styling/PopularList.css'
import { Link } from 'react-router-dom'

//functional component
export const PopularList = ({ movieData }) => {
	console.log('moviedata popularLIst', movieData)

	return (
		<>
			{movieData &&
				movieData.results.map((movie) => (
          <Link key={movie.id} to= {`/details/${movie.id}`}>
					<div className="movie-wrapper">
						<div className="movie-list">
							<div className="movie-card" key={movie.id}>
								<div className="movie-image">
									<img
										className="detail-poster"
										src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
										alt={`Movie poster for ${movie.title}`}
									/>
								</div>
								<div className="movie-text">
									<h1 className='title'>{movie.title}</h1>
									<h2 className='release-date'>{movie.release_date}</h2>
								</div>
							</div>
						</div>
					</div>
          </Link>
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
