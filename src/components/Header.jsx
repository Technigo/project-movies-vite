import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaFilm } from "react-icons/fa";
import "./Header.css";

export const Header = () => {
  const navRef = useRef();
  const btnRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-navbar");
    btnRef.current.classList.toggle("hide-button");
  };

  return (
    <header className="nav-bar">
      <h3 className="film-logo">
        <FaFilm />
        CineCheck
      </h3>
      <div className="controls" ref={navRef}>
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
        <button className="nav-button nav-close-button" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>
      <button
        ref={btnRef}
        aria-label="Menu button"
        className="nav-button nav-burger-button"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
};
