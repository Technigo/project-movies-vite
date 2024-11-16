// MovieCard.jsx - This component represents a single movie card for use in a movie list or gallery.
// It displays the movie's poster, title, and release date, with a link to a detailed movie information page.

import { Link } from "react-router-dom";

export const MovieCard = ({ id, title, release_date, poster_path }) => {
    return (
      <article>
        <Link to={`/movie/${id}`}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={`Movie poster for ${title}`}
            />
            <div>
              <h1>{title}</h1>
              <p>Released {release_date}</p>
            </div>
          </div>
        </Link>
      </article>
    );
  };