/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export const MoviePreview = ({ movie }) => {
  console.log(movie);
  const { title, backdrop_path, overview, poster_path, vote_average } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  const posterImage = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  return (
    <div
      className="movie-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Link to="/">
        <button className="go-back-btn fa fa-chevron-circle-left">
          <p>Movies</p>
        </button>
      </Link>
      <div className="movie-summary">
        <img src={posterImage} alt={title} />
        <div className="movie-info">
          <div className="title-and-score">
            <h1 className="movie-title">{title}</h1>
            <h2 className="movie-score"> ⭐{vote_average.toFixed(1)}</h2>
          </div>
          <p className="movie-overview">{overview}</p>
        </div>
      </div>
    </div>
  );
};
