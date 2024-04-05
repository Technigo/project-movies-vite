import "./NotFound.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <p>Page is not found :D</p>
      <Link to="/movies" className="not-found-to-home">
        Back to Movies
      </Link>
    </div>
  );
};
