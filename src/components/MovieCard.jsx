import { Link } from 'react-router-dom'

export const MovieCard = ({ jsonMovies, results }) => {
console.log('id',results )

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
