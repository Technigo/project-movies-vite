import { Link } from "react-router-dom";

export const ButtonsMenu = () => {
  return (
    <div className="button-container">
      <button className="options-button">
        <Link to="/classics">Classics</Link>
      </button>

      <button className="options-button">
        <Link to="/upcoming">Coming soon</Link>
      </button>
    </div>
  );
};
