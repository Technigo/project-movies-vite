import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="nav-bar">
      <div className="controls">
        <NavLink className="nav-link" to="/now_playing">
          Now Playing
        </NavLink>
        <NavLink className="nav-link" to="/popular">
          Popular
        </NavLink>
        <NavLink className="nav-link" to="/upcoming">
          Upcoming
        </NavLink>
        <NavLink className="nav-link" to="/top_rated">
          Top Rated
        </NavLink>
      </div>
    </div>
  );
};
