import { Movie } from "../components/Movie";
import { Header } from "../components/Header";
import { Link, useParams } from "react-router-dom";
import "./MovieGrid.css";
import PropTypes from "prop-types";
import { NotFound } from "./NotFound";

export const MovieGrid = ({ data, setAPI_END, loading, setLoading }) => {
  const { genre } = useParams();
  console.log("App slug:", genre);

  if (
    genre === "popular" ||
    genre === "top_rated" ||
    genre === "upcoming" ||
    genre === "now_playing"
  ) {
    setAPI_END(genre);
  } else {
    <NotFound />;
  }

  // let fetchedData = false;

  // if (data.success === false) {
  //   fetchedData = false;
  //   console.log("This sucks");
  // } else {
  //   fetchedData = true;
  //   console.log("Fetched ifstatement: ", fetchedData);
  // }

 /* if (loading) {
    return (
      <div>
        <Header />
        <div className="movie-grid">
          <p>Loading...</p>;
        </div>
      </div>
    );
  }*/

  return loading ? (
    <div>
      <Header />
      <div className="movie-grid fetching">
        <p>Fetching Movies...</p>;
      </div>
    </div>
  ) : (
    <div>
      <Header />
      <div className="movie-grid">
        {data.results.map((movie, index) => (
          <div className="movie-link" key={index}>
            <Link
              to={`/${genre}/${movie.title.toLowerCase().replace(/ /g, "-")}`}
            >
              <Movie movie={movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

MovieGrid.propTypes = {
  data: PropTypes.object,
  setAPI_END: PropTypes.any,
};
