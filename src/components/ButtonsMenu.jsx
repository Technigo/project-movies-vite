import { Link } from "react-router-dom";

export const ButtonsMenu = () => {
  return (
    <div className="button-container">
      <Link className="button-classics" to="/classics">
        Classics
      </Link>

      <Link className="button-upcoming" to="/upcoming">
        Coming soon
      </Link>
    </div>
  );
};
