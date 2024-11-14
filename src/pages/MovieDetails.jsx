/* eslint-disable react/prop-types */
//MovieDetail represents a full page that is displayed when navigating to a specific movie (e.g., /movie/:movieId)
//This component handles the route-specific logic and renders a complete view of the movie details.

export const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};
