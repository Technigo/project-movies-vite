import { Movie } from "../components/Movie";
import { Link, useParams } from "react-router-dom";
import "./MovieGrid.css";
import PropTypes from "prop-types";

export const MovieGrid = ({ data, setAPI_END }) => {
  const { genre } = useParams();
  console.log("App slug:", genre);

  if (genre) {
    setAPI_END(genre);
  }
  else {
    setAPI_END("popular")
  }

  const fetchedData = data;
  console.log("Fetched data: ", fetchedData);

  return (
    <div className="movie-grid">
      {data.results.map((movie, index) => (
        <div className="movie-link" key={index}>
          <Link to={`/movie/${movie.title.toLowerCase().replace(/ /g, "-")}`}>
            <Movie movie={movie} />
          </Link>
        </div>
      ))}
    </div>
  );
};

MovieGrid.propTypes = {
  data: PropTypes.object,
  setAPI_END: PropTypes.any
};
