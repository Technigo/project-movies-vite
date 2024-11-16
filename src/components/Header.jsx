import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => { 
  return (
    <header>
      <div className="navbar">
        <div className="header-text-box">
          <h1>Movie Collection</h1>
          <h2>Welcome to Xings Movie Site</h2>
        </div>

        <div className="dropdown-menu">
          <button>Menu</button>
          <nav className="dropdown-menu-content">
            <NavLink to="/" className="mobile-menu-link">
              Now Playing
            </NavLink>
            <NavLink to="/popular" className="mobile-menu-link">
              Popular
            </NavLink>
            <NavLink to="/top-rated" className="mobile-menu-link">
              Top Rated
            </NavLink>
            <NavLink to="/upcomning" className="mobile-menu-link">
              Upcomning
            </NavLink>
          </nav>
        </div>

        <div className="desktop-menu">
          <nav>
            <NavLink to="/" className="menu-link">
              Now Playing
            </NavLink>
            <NavLink to="/popular" className="menu-link">
              Popular
            </NavLink>
            <NavLink to="/top-rated" className="menu-link">
              Top Rated
            </NavLink>
            <NavLink to="/upcomning" className="menu-link">
              Upcomning
            </NavLink>            
          </nav>

        </div>
      </div>
    </header>
  )
 }
