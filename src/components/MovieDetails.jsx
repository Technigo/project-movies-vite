import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BodyText, HeaderThree } from '../ui/Typography';
import "./MovieDetails.css";

const MovieDetailsStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
background-color: #333333;
width: 100%;
padding: 10px;
`

export const MovieDetails = ({ movie }) => {
  console.log(movie);

  const { title, backdrop_path, overview } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  return (
    <MovieDetailsStyles>
      <div className='img-movie-details-container'>
        <img src={backgroundImage} alt={overview} className="img-movie-details" />
      </div>
      <div className="text-movie-details-container">
        <HeaderThree>{title}</HeaderThree>
        <BodyText>{overview}</BodyText>
      </div>
    </MovieDetailsStyles>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};