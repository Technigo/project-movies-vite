import "./Header.css"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <div>
        <p className="heading">Nathalie&apos;s and Sofia&apos;s <span>Project Movies</span></p>
      </div>
      <nav>
        <NavLink to="/">Movies</NavLink>
      </nav>
    </header>
  )
}
