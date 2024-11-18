// This component displays detailed information about a selected movie, including title, backgroud image, a description, and average rating.
import PropTypes from "prop-types";
import starIcon from "../assets/star.svg";
import "./MovieDetails.css";

export const MovieDetails = ({ movie }) => {
  // Destructure these fields from the movie object
  const { title, poster_path, overview, vote_average } = movie;

  return (
    <>
      <img
        className="poster-image"
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={title}
      />

      <div className="movie-details-container">
        <h1 className="title-container">
          <span className="title">{title}</span>
          <span className="rating">
            <img src={starIcon} alt="Star" className="star-icon" />
            {vote_average.toFixed(1)}
          </span>
        </h1>
        <p className="overview">{overview}</p>
      </div>
    </>
  );
};

// Props validation
MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
