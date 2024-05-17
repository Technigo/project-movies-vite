import { Link } from "react-router-dom";
import "./css/Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <h1>Popular movies</h1>
    <div className="button-container">
      <button className="options-button">
        <Link to="/classics">Classics</Link>
      </button>

      <button className="options-button">
        <Link to="/upcoming">Coming soon</Link>
      </button>
    </div>
  </div>
  );
};
