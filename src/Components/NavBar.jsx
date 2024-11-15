import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/movielogo.png';
import searchIcon from '../assets/search-icon.png';
import bellIcon from '../assets/bell.png';
import profileIcon from '../assets/profile.png';
import './NavBar.css';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); //this is for when a user scrolls, the navbar needs to become visible
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="MoovieNest Logo" className="navbar-logo" />
        </Link>
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/movies" className="navbar-link">Movies</Link>
        <Link to="/series" className="navbar-link">Series</Link>
        <Link to="/kids" className="navbar-link">Kids</Link>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="Search" className="navbar-icon" />
        <img src={bellIcon} alt="Notifications" className="navbar-icon bell" />
        <img src={profileIcon} alt="Profile" className="navbar-icon profile" />
      </div>
    </nav>
  );
};
