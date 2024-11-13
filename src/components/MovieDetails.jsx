import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BodyText, HeaderTwo } from '../ui/Typography';

const MovieDetailsStyles = styled.div`
display: flex;
flex-direction: column;
background-color: #333333;
width: 100%;
padding: 10px;
`

export const MovieDetails = ({ movie }) => {
  console.log(movie);

  const { title, backdrop_path, overview } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w342/${backdrop_path}`;

  return (
    <MovieDetailsStyles>
      <img src={backgroundImage} alt={overview} />
      <HeaderTwo>{title}</HeaderTwo>
      <div>
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