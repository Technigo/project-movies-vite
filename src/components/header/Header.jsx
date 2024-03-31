import "./Header.css"
import { Link, NavLink } from "react-router-dom"
import { Listing } from "../listing/Listing.jsx"

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Movies</NavLink>
      </nav>
    </header>
  )
}
