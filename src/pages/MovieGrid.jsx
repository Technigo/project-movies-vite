
import { Movie } from "../components/Movie"
import { Link } from "react-router-dom";
import "./MovieGrid.css"
import PropTypes from "prop-types";

export const MovieGrid = ({data} ) => {
    

    const fetchedData  = data;
    console.log("Fetched data: ", fetchedData)

  return (
    <div className="movie-grid">
      {data.results.map((movie, index) => (
        <div className="movie-link" key={index}>
          <Link
                  to={ `/movie/${movie.title.toLowerCase().replace(/ /g, "-")}`}
          >
                  <Movie movie={movie} />
          </Link>
        </div>
      ))}
    </div>
  );
}

MovieGrid.propTypes = {
  data: PropTypes.object,
};