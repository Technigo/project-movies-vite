import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const MovieDetails = ({ movie }) => {
  //   const backdrop_url = `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`;

  const { slug } = useParams();
  const matchedMovie = movie.find(
    (movie) => movie.title.toLowerCase().replace(/ /g, "-") === slug
  );

  return <div>MovieDetails</div>;
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};
