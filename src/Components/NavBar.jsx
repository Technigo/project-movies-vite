import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/movielogo.png';
import searchIcon from '../assets/search-icon.png';
import bellIcon from '../assets/bell.png';
import profileIcon from '../assets/profile.png';

export const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
        <img src={logo} alt="MoovieNest Logo" className="navbar-logo" />
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/movies" className="navbar-link">Movies</Link>
        <Link to="/series" className="navbar-link">Series</Link>
        <Link to="/kids" className="navbar-link">Kids</Link>
    </div>
    <div className="navbar-right">
        <img src={searchIcon} alt="Search" className="navbar-icon" />
        <img src={bellIcon} alt="Notifications" className="navbar-icon" />
        <img src={profileIcon} alt="Profile" className="navbar-icon profile" />
    </div>
    </nav>
  );
};
