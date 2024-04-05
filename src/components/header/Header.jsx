import "./Header.css"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className="home">
          HOME ›
        </NavLink>
      </nav>
    </header>
  )
}
