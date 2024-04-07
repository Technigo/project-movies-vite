import "./MovieList.css";
export const MovieList = ({ movie }) => {
  return (
    <>
      <img
        className="movie-poster"
        src={`http://image.tmdb.org/t/p//w500${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
      />
      <section className="hover-menu">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-release-date">Released {movie.release_date}</p>
      </section>
    </>
  );
};
