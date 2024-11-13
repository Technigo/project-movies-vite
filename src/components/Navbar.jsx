import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        🎬 MOVIE DATABASE
      </Link>
    </nav>
  );
};
