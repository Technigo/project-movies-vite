import "./MovieDetails.css";
import { BackButton } from "../BackButton/BackButton";
import { IoIosStar } from "react-icons/io";
import PropTypes from "prop-types";

export const MovieDetails = ({ movieDetails }) => {
  console.log("Movie Details showing", movieDetails);

  // Destructure specific properties from the movieDetails-object
  const { title, overview, vote_average, backdrop_path, poster_path } =
    movieDetails;

  // Define the background image for the movieinfo-page.
  const imageBackground = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
  };

  return (
    <article className="movie-details-card">
      {/* Render the Back component for navigation */}
      <BackButton />
      <div className="background-image" style={imageBackground}>
        <div className="movie-details-summary">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={title}
          />
          <div className="movie-details">
            <h1>
              <span className="movie-title">{title}</span>
              <span className="movie-rating">
                {/* Import star from react icons-library */}
                <IoIosStar className="star-icon" />
                {Math.round(vote_average * 10) / 10}
              </span>
            </h1>
            <p className="overview-text">{overview}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};
