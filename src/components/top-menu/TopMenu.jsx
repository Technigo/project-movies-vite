import { Link } from "react-router-dom";
import "./TopMenu.css";

export const TopMenu = () => {
  return (
    <nav className="top-menu">
      <ul className="top-menu-list">
        <li>
          <Link to="/" className="top-menu-link home-link">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19,3H5C3.897,3,3,3.897,3,5v2v2v2v2v2v2v2c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-2v-2v-2v-2V9V7V5 C21,3.897,20.103,3,19,3z M9,11V5h6v6H9z M15,13v6H9v-6H15z M5,5h2v2H5V5z M5,9h2v2H5V9z M5,13h2v2H5V13z M5,17h2v2H5V17z M19.002,19H17v-2h2.002V19z M19.001,15H17v-2h2.001V15z M19.001,11H17V9h2.001V11z M17,7V5h2v2H17z"></path>
            </svg>
            <span className="home-text">Moviecity</span>
          </Link>
        </li>
        <div className="top-menu-genre-list ">
          <Link to="/movie/now_playing" className="top-menu-link">
            <li>On srceen </li>
          </Link>

          <Link to="/movie/popular" className="top-menu-link">
            <li>Popular</li>
          </Link>

          <Link to="/movie/top_rated" className="top-menu-link">
            <li>Top rated</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};
