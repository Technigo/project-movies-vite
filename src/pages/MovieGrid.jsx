import { Movie } from "../components/Movie";
import { Header } from "../components/Header";
import { Link, useParams } from "react-router-dom";
import "./MovieGrid.css";
import PropTypes from "prop-types";
import { NotFound } from "./NotFound";
import { Loading } from "./Loading";

export const MovieGrid = ({ data, setAPI_END, loading }) => {
  const { genre } = useParams();

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

   if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div>
      <Header />
      <div className="movie-grid">
        {data.results.map((movie, index) => (
          <div className="movie-link" key={index}>
            <Link to={`/${genre}/${movie.id}`}>
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
  loading: PropTypes.bool
};
