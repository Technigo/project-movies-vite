import { Link } from "react-router-dom";
import "./moviecard.css";

export const MovieCard = ({ title, release, image, id }) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w300/${image}`} alt={title} />
        <div className="movie-data">
          <h2>{title}</h2>
          <h3>{release}</h3>
        </div>
      </div>
    </Link>
  );
};
