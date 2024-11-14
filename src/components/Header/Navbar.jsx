import { NavLink } from "react-router-dom";
import { PageTitle } from "../../ui/Typography";
import styled from "styled-components";

const Nav = styled.nav`

background: #c92020; 
width: 100%;
height: 4rem;
flex-shrink: 0;
`

export const Navbar = () => {
  return (
    <Nav>
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
        <li className="app-li">
          <NavLink to="/about">
            <PageTitle>About</PageTitle>
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};
