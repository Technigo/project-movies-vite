import "./Nav.css";
import popcornImage from "../assets/pop-corn.png";

export const Nav = () => {
  return (
    <nav className="navbar">
      <header>
        <div className="header">
          <img src={popcornImage} alt="Popcorn"></img>
          <span className="popcorn">POPCORN</span>
        </div>
          <span className="subheader"> Top 20 popular movies</span>
      </header>
    </nav>
  );
};
