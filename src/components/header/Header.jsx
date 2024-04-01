import "./Header.css"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Movies</NavLink>
      </nav>
    </header>
  )
}
