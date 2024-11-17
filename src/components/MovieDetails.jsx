import PropTypes from "prop-types";
import { BodyText, HeaderThree } from "../ui/Typography";
import "./MovieDetails.css";

export const MovieDetails = ({ movie }) => {
  console.log(movie);

  const { title, backdrop_path, overview, original_language, vote_average
  } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  return (
    <>
      <section className="movie-detail-section-container">
        <div className='img-movie-details-container'>
          <img
            src={backgroundImage}
            alt={`Backdrop of the movie: ${title}`}
            className="img-movie-details" />
        </div>
        <div className="text-movie-details-container">
          <HeaderThree>{title}</HeaderThree>
          <div className="movie-info">
            <div className="language">original language: {original_language}</div>
            <div className="rating">
              <div aria-label="star rating">⭐</div>
              <div>{vote_average.toFixed(1)}</div></div>
          </div>
          <BodyText>{overview}</BodyText>
        </div>
      </section>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
    original_language: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};