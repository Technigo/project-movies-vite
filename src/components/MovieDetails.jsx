// MovieDetails.jsx

export const MovieDetails = ({ movie }) => {
    // Debugging: Confirm the movie prop is received
    console.log("Movie Details:", movie);

    // Ensure that movie is defined and contains the expected properties
    if (!movie || !movie.poster_path || !movie.title || !movie.release_date || !movie.overview) {
        return <div>No details available for this movie.</div>;
    }

    return (
        <div className="movie-details">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-details-poster"
            />
            <div className="movie-details-info">
                <h2>{movie.title}</h2>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Overview:</strong> {movie.overview}</p>
                {/* Add additional movie details as needed */}
            </div>
        </div>
    );
};
