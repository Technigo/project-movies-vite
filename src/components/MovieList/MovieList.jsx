/**
 * 1. URL using the secure_base_url + size + path from the API response.
 * 2. Use w342 for size
 */
import { Link } from "react-router-dom";
import "./MovieList.scss";

export const MovieList = ({ movies, genreTitle }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w342";

  // Add different subtitle depending on category
  return (
    <section className="movieListContainer">
      <div className="titleContainer">
        <h2 className="title">{genreTitle}</h2>

        <p className="subtitle">
          {genreTitle !== "popular"
            ? `The most popular ${genreTitle} movies at the moment`
            : "The most popular movies at the moment"}
        </p>
      </div>
      {movies.map((movie) => (
        <div key={movie.id} className="movieWrapper">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.title}
              className="movieImg"
            />
            <div className="details">
              <h3 className="title">{movie.title}</h3>
              <p className="date">{movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};
