// Component for detailed information for a specific movie
import './MovieDetails.css';

export const MovieDetails = ({ movie }) => {
	console.log("Movie Details:", movie);

	const { title, backdrop_path, poster_path, overview, vote_average } = movie;

	const backgroundImage = `https://image.tmdb.org/t/p/original${backdrop_path}`;
	const posterImage = `https://image.tmdb.org/t/p/w500${poster_path}`;

	return (
		<div className="movie-details-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
			{/* Movie's poster image */}
			<img
				src={posterImage}
				alt={title}
				className="movie-image"
			/>

			<div className="movie-details">
				{/* Movie title and rating */}
				<div className="movie-title-rating">
					<h1 className="movie-title">{title}</h1>
					<span className="movie-rating">⭐ {vote_average.toFixed(1)}</span>
				</div>

				{/* Movie description */}
				<p className="movie-summary">{overview}</p>
			</div>
		</div>
	);
};
