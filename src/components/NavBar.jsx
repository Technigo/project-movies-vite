import { Link } from "react-router-dom"
import "./Navbar.css"

export const NavBar = () => {
    return(
        <div className="nav-bar-container">
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Movies
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}