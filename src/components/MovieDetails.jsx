import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BodyText, HeaderThree } from '../ui/Typography';
import "./MovieDetails.css";

export const MovieDetails = ({ movie }) => {
  console.log(movie);

  const { title, backdrop_path, overview, original_language
  } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  return (
    <>
      <section className="movie-detail-section-container">
        <div className='img-movie-details-container'>
          <img src={backgroundImage} alt={overview} className="img-movie-details" />
        </div>
        <div className="text-movie-details-container">
          <HeaderThree>{title}</HeaderThree>
          <div className="language">original language: {original_language}</div>
          <BodyText>{overview}</BodyText>
        </div>
      </section>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};