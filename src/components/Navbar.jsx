import { NavLink } from "react-router-dom";
import { SubPageTitle } from "../ui/Typography";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  background: #c92020;
  width: 100%;
  height: 4.5rem;
  flex-shrink: 0;

  /* Media query for mobile */
  @media (max-width: 480px) {
    height: 3.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none; /* Remove underline */
  color: white; /* Set link color */
  margin: 1rem 1rem; /* Add spacing between links */

  &.active {
    font-weight: bold; /* Highlight active link */
    border-bottom: 2px solid #fff; /* Add custom active state styling */
  }
`;

const NavList = styled.ul`
  display: flex; /* Align items in a row */
  list-style: none; /* Remove default list styles */
  padding: 0;
  margin: 0;
  gap: 10px;
`;

const NavListItem = styled.li`
  display: flex; 
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
`;

const StyledSubPageTitle = styled(SubPageTitle)`
  font-size: 1.5rem; 

  /* Media query for mobile */
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <NavList aria-label="Main Navigation">
        {/* Add <li> elements for accessibility */}
        <NavListItem>
          <StyledNavLink to="/" end aria-label="Go to Home page">
            <StyledSubPageTitle>Home</StyledSubPageTitle>
          </StyledNavLink>
        </NavListItem>

        <NavListItem>
          <StyledNavLink to="/about" aria-label="Go to About page">
            <StyledSubPageTitle>About</StyledSubPageTitle>
          </StyledNavLink>
        </NavListItem>

        <NavListItem>
          <StyledNavLink to="/upcoming" aria-label="Go to Upcoming Movies page">
            <StyledSubPageTitle>Upcoming movies</StyledSubPageTitle>
          </StyledNavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
};



