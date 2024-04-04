import { Link } from "react-router-dom"
import "./NavBar.css"
import BackIcon from "/back.svg";

export const NavBar = () => {
    return(
        <div className="nav-bar-container">
            <nav>
                <ul>
                    <li>
                        <Link className="back-to-movies" to="/">
                            <img className="back-arrow" src={BackIcon} alt="navigation to go bakc" />
                            Movies
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}