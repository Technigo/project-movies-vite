import { Link } from 'react-router-dom'

export const MovieCard = ({jsonMovies}) => {
	console.log('json in movieCard', jsonMovies)

	return (
		<>
			{jsonMovies.map((movie) => (
				<article className="movie-card" key={movie.id}>
					<Link to={`/details/${movie.id}`}></Link>
				</article>
			))}
		</>
	)
}



// {movieData.map((movie) => (
//   console.log('movie', movie)
//   <article>
//     <Link to={`/details/${movie.id}`}></Link>
//   </article>
// ))}
