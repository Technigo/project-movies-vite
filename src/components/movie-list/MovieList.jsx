import "./MovieList.css";
export const MovieList = ({ movie }) => {
  return (
    <>
      {movie.poster_path ? (
        <img
          className="movie-poster"
          src={`http://image.tmdb.org/t/p//w500${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
        />
      ) : (
        <p className="poster-error">No poster available</p>
      )}

      <section className="hover-menu">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-release-date">Released {movie.release_date}</p>
      </section>
    </>
  );
};
