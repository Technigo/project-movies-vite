import { Link } from "react-router-dom";

export const TopMenu = () => {
  return (
    <nav className="top-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movie/now_playing">Now in cinema</Link>
        </li>
        <li>
          <Link to="/movie/popular">Popular</Link>
        </li>
        <li>
          <Link to="/movie/top_rated">Top rated</Link>
        </li>
      </ul>
    </nav>
  );
};
