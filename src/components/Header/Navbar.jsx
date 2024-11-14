import { NavLink } from "react-router-dom";
import { PageTitle } from "../../ui/Typography";

export const Navbar = () => {
  return (
    <nav>
      <ul className="app-ul">
        {/* Home page link */}
        <li className="app-li">
          <NavLink to="/" end>
            <PageTitle>Home</PageTitle>
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
            <PageTitle>Upcoming</PageTitle>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
