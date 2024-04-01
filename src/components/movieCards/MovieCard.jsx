import "./MovieCard.css"
import { Link } from "react-router-dom"

export const MovieCard = ({ data }) => {
	const POSTER_URL = "https://image.tmdb.org/t/p/w500"
	return (
		<div className='movie-poster-container'>
			<Link to={`/movies/${data.id}`}>
				<img
					className='movie-image'
					src={`${POSTER_URL}${data.poster_path}`}
					alt={data.title}
				/>
				<div className='movie-title'>
					<h2>{data.title} </h2>
					<p>Release date {data.release_date}</p>
				</div>
			</Link>
		</div>
	)
}
