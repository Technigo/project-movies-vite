import { Link } from "react-router-dom";
import "../pages/MovieDetails.css";
import Arrow from "../../public/arrow.svg";

export const BackArrow = () => {
  return (
    <Link to={`/`}>
      <div className="arrow">
        <img className="arrowIcon" src={Arrow} alt="arrow back to main site" />
        <h3 className="arrowTitle">Movies</h3>
      </div>
    </Link>
  );
};
