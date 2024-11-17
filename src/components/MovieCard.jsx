// Component for showing the movie posters

import "./MovieCard.css";

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
        className="movie-poster"
      />
      <div className="movie-info">

        <h3>{title}</h3>
        <p>Release Date: {release_date}</p>
      </div>
    </div>
  );
};
