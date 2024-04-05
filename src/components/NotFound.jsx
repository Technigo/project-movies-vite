import "../styling/NotFound.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react"
import animationData from "../../public/animation.json"

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <Lottie
        animationData={animationData}
        loopautoplay
        style={{ height: "50%" }}
        />
      <Link to="/movies" className="not-found-to-home">
        Back to Movies
      </Link>
    </div>
  );
};
