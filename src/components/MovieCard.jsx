import { Link } from "react-router-dom";

export const MovieCard = ({ id, title, releaseDate, posterPath }) => {
  return (
    <Link to={`/movie/${id}`}>
      <article className="movie-card">
        <p>
          {title}
          {releaseDate}
        </p>
        <img
          src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
          alt={title}
        ></img>
      </article>
    </Link>
  );
};
