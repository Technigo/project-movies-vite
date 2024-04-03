import { Link, NavLink } from "react-router-dom";
import "./Header.css"

export const Header = () => {
  return (
    <div className="nav-bar">
      <Link to="/"> Home </Link>
      <div className="controls">
        <NavLink to="/now_playing">Now Playing</NavLink>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
        <NavLink to="/top_rated">Top Rated</NavLink>
      </div>
    </div>
  );
};
