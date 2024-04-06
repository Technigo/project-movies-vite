import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="navigation-box">
        <div className="header-text-box">
          <h1>The Movie Paradise</h1>
          <h2>Get inspiration, pop some popcorn and get ready for a movie night</h2>
        </div>
        <div className="dropdown-menu">
          <button>Menu</button>
          <nav className="dropdown-menu-content">
            <NavLink to="/top-rated" className="mobile-menu-link">
              Top rated
            </NavLink>
            <NavLink to="/popular" className="mobile-menu-link">
              Popular
            </NavLink>
            <NavLink to="/" className="mobile-menu-link">
              Home
            </NavLink>
          </nav>
        </div>

        <div className="desktop-menu">
          <nav>
            <NavLink to="/top-rated" className="menu-link">
              Top rated
            </NavLink>
            <NavLink to="/popular" className="menu-link">
              Popular{" "}
            </NavLink>
            <NavLink to="/" className="menu-link">
              Home
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
