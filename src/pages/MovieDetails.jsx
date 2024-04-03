import { useParams } from "react-router-dom";
import { Backbutton } from "../components/Backbutton";
import PropTypes from "prop-types";
import "./MovieDetails.css";

export const MovieDetails = ({ data, setAPI_END }) => {
  const { slug } = useParams();
  /* const { genre } = useParams();

  console.log("GenreParam", genre);
  if (genre) {
    setAPI_END(genre);
  } else {
    setAPI_END("popular");
  }*/

  console.log("Slug:", slug);
  console.log("MovieDetails:", data);

  const matchedMovie = data.results.find(
    (movie) => movie.title.toLowerCase().replace(/ /g, "-") === slug
  );

  const backdrop_url = `https://media.themoviedb.org/t/p/w1280_and_h720_multi_faces/${matchedMovie.backdrop_path}`;
  const poster_url = `https://image.tmdb.org/t/p/w342/${matchedMovie.poster_path}`;

  console.log("MovieDetails matchedMovie:", matchedMovie);

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `url(${backdrop_url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Backbutton />
      <img
        className="details-img"
        src={poster_url}
        alt={matchedMovie.title}
      ></img>
      <div className="details">
        <div className="title-box">
          <div>
            <h2 className="details-title">{matchedMovie.title}</h2>
            <h3 className="details-org-title">{matchedMovie.original_title}</h3>
          </div>
          <p className="details-rating">
            <span className="rating-star">⭐</span>
            {Math.round(matchedMovie.vote_average * 10) / 10}
          </p>
        </div>
        <p className="details-synopsis">{matchedMovie.overview}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  data: PropTypes.object,
};
