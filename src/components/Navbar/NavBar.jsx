import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

export const NavBar = () => (
  <nav>
    <div className="navbar-container">
      <div className="navbar-logo"><img src="/public/tmdb-logo.png" /></div>
      <ul className="navbar-list">
        <li className="listItem">
          <NavLink to="/" className="link">Home</NavLink>
        </li>
        <li className="listItem">
          <NavLink to="/about" className="link">About</NavLink>
        </li>
        <li className="listItem">
          <NavLink to="/contact" className="link">Contact</NavLink>
        </li>
        <li className="listItem">
          <NavLink to="/new-account" className="signup">Sign Up</NavLink>
        </li>
        <li className="listItem">
          <NavLink to="/login" className="login">Log In</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
