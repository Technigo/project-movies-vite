import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
  return (
    <div className="nav-bar">
      <Link to="/"> Home </Link>
    </div>
  );
};
