import "./MovieCard.css";
import { Link } from "react-router-dom";

export const MovieCard = ({
  id,
  title,
  release_date,
  poster_path,
  vote_average,
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <article className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
        <div className="movie-card-info">
          <h1>{title}</h1>
          <p>Released {release_date}</p>
        </div>
      </article>
    </Link>
  );
};

//You need to construct a URL using the secure_base_url + size + path from the API response.

//https://image.tmdb.org/t/p/w300/`${poster_path}`

/* för framsidan är det w300 som gäller. 
Inne på ett kort är det följande: 
div class=background, w1280:
För summary-div:en är det image size 342 https://image.tmdb.org/t/p/w1280${movie.backdrop_path}, för summary-bilden: w342*/
