import { useParams, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


export const MovieDetails = ( ) => {
  //   const backdrop_url = `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`;
    const location = useLocation();
    const movie = location.state;
    console.log(movie)
    //const { state } = location.movie;
    // console.log("State: ",state)

  const { slug } = useParams();
  const matchedMovie = state.find(
    (movie) => movie.title.toLowerCase().replace(/ /g, "-") === slug
  );

  return <div>MovieDetails</div>;
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};


