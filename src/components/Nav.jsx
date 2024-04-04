import "./Nav.css";
import popcornImage from "../assets/pop-corn.png";

export const Nav = () => {
  return (
    <nav className="navbar">
      <header>
        <div className="popcorn-icon">
          <img src={popcornImage} alt="Popcorn"></img>
        </div>
        <span className="header">Popcorn</span>
        <span className="subheader">: Top 20 popular movies</span>
      </header>
    </nav>
  );
};
