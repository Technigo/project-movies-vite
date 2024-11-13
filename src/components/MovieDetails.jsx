// This component displays detailed information about a selected movie, including title, backgroud image, a description, and average rating.

import PropTypes from "prop-types";

export const MovieDetails = ({ movie }) => {
  // Destructure these fields from the movie object
  const { title, backdrop_path, overview, vote_average } = movie;

  // Construct the URL for the movie's backdrop image
  const backgroundImage = `https://image.tmdb.org/t/p/w342/${backdrop_path}`;

  return (
    <div>
      <img src={backgroundImage} alt={overview} />

      <h1>{title}</h1>

      <p>{vote_average}</p>

      <p>{overview}</p>
    </div>
  );
};

// Props validation
MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
