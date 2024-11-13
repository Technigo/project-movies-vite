import PropTypes from 'prop-types';

export const MovieDetails = ({ movie }) => {
  console.log(movie);

  const { title, backdrop_path, overview } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w342/${backdrop_path}`;

  return (
    <div>
      <img src={backgroundImage} alt={overview} />
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};