import { Link, useLocation } from "react-router-dom"
import "./navigation.css"
import leftArrow from "/src/assets/left-arrow.png"

const Navigation = () => {
  const location = useLocation()

  if (location.pathname.includes("/movies/")) {
    return (
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">
              <img src={leftArrow} alt="Left Arrow" className="left-arrow" />
            </Link>
            <Link to="/" className="nav-link">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    return null
  }
}

export default Navigation
