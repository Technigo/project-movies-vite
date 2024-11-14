import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="app-ul">
        {/* Home page link */}
        <li className="app-li">
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        {/* Now Playing movies link */}
        {/* <li className="app-li">
          <NavLink to="/now-playing">
            Now Playing
          </NavLink>
        </li> */}

        {/* Upcoming movies link */}
        <li className="app-li">
          <NavLink to="/upcoming">
            Upcoming
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
