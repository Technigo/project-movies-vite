import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
  return (
    <div className="nav-bar">
      <Link to="/"> Home </Link>
      <div className="controls">
        <select className="custom-select">
          <option>Now Playing</option>
          <option>Popular</option>
          <option>Upcoming</option>
          <option>Top Rated</option>
        </select>
      </div>
    </div>
  );
};
