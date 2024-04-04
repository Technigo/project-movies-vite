import { Link } from "react-router-dom";
import arrow from "/arrow.svg";

export const NotFound = () => {
  return (
    <div className="movie-component">
      <div className="button">
        <Link to="/">
          <img src={arrow} id="go-back" />
        </Link>
        <Link to="/">
          <h4>Movies</h4>
        </Link>
      </div>
    </div>
  );
};
