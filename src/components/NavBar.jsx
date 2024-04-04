import { NavLink } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/movies", text: "Movies" },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-ul">
        {links.map(({ to, text }) => (
          <li key={to} className="nav-li">
            <NavLink to={to}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
