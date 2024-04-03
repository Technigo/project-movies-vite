import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const MovieDetails = ({ data }) => {
  const { slug } = useParams();

  console.log("Slug:", slug);
  console.log("MovieDetails:", data);

  const matchedMovie = data.results.find(
    (movie) => movie.title.toLowerCase().replace(/ /g, "-") === slug
  );

  const backdrop_url = `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${matchedMovie.backdrop_path}`;
  const poster_url = `https://media.themoviedb.org/t/p/w220_and_h330_face/${matchedMovie.poster_path}`;

  console.log("MovieDetails matchedMovie:", matchedMovie);

  return (
    <div className="movie-details">
      <img src={backdrop_url} alt={matchedMovie.title} />
      <h2>{matchedMovie.title}</h2>
      <h3>{matchedMovie.original_title}</h3>
      <img src={poster_url} alt={matchedMovie.title}></img>
      <p className="synopsis">{ matchedMovie.overview}</p>
      <p className="rating">{Math.round(matchedMovie.vote_average*10)/10}</p>
    </div>
  );
};

MovieDetails.propTypes = {
  data: PropTypes.object,
};

