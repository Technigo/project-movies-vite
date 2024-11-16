import "./Header.css";
import { NavLink } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";
import { useState } from "react";

export const Header = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Navigation links data
  const navLinks = [
    { path: "/", label: "Now Playing" },
    { path: "/popular", label: "Popular" },
    { path: "/top-rated", label: "Top Rated" },
    { path: "/upcoming", label: "Upcoming" }
  ];
  
  // Render navigation links
  const renderNavLinks = (className) => (
    navLinks.map(({ path, label }) => (
      <NavLink
        key={path}
        to={path}
        className={className}
        onClick={() => setIsOpen(false)}
      >
        {label}
      </NavLink>
    ))
  );

  return (
    <header>
      <div className="navbar">
        {/* Logo and Title Section */}
        <div className="header-text-box">
          <div className="header-text">
            <BiSolidCameraMovie className="movie-icon" aria-hidden="true" />
            <h1>Movie Collection</h1>
          </div>
          <h2>Welcome to Xings Movie Site</h2>
        </div>

        {/* Mobile Menu */}        
        <div className="dropdown-menu">
          <button
            onClick={toggleDropdown}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu">
            Menu
          </button>
          <nav
            id="mobile-nav"
            className={`dropdown-menu-content ${isOpen ? "show" : ""}`}
            aria-hidden={!isOpen}
          >
            {renderNavLinks("mobile-menu-link")}
          </nav>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <nav aria-label="Main navigation">
            {renderNavLinks("menu-link")}            
          </nav>

        </div>
      </div>
    </header>
  )
 }
