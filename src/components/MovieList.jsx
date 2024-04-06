export const MovieList = ({ movie }) => {
  return (
    <>
      <img
        className="movie-poster"
        src={`http://image.tmdb.org/t/p//w780${movie.poster_path}`}
        loading="lazy"
        alt={movie.title}
      />
      <section className="hover-menu">
        <p className="movie-title">{movie.title}</p>
        <p className="movie-release-date">Released {movie.release_date}</p>
      </section>
    </>
  );
};
