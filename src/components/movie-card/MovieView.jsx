import { Link } from "react-router-dom";

export const MovieView = ({ movie }) => {
  // Receives the movie objects and selects the relevant information for display
  const { title, backdrop_path, overview, poster_path, vote_average } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  const posterImage = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  return (
    <div
      className="movie-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* A link that leads the user back to the movie list display */}
      <Link to="/">
        <button className="go-back-btn fa fa-chevron-circle-left">
          <p>Movies</p>
        </button>
      </Link>
      {/* Information regarding the movie such as title, description, poster and score */}
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
