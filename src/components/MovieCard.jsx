import { Link } from "react-router-dom";

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <Link to={`/movie/${id}`}>
      <article className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />

        <div className="movie-info-container">
          <p>Released {release_date}</p>
          <h2>{title}</h2>
        </div>
      </article>
    </Link>
  );
};
