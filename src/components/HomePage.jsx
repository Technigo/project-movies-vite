import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import "../styling/HomePage.css"

export const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <div className="title-wrapper">
        <h1>Movies Galore</h1>
        <Link to="/movies" className="link-to-movies">
          Go to Movies
        </Link>
      </div>
    </div>
  );
};
