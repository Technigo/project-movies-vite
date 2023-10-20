import { Link } from "react-router-dom"
import "./Navbar.css"
import "/back.svg"

export const NavBar = () => {
    return(
        <div className="nav-bar-container">
            <nav>
                <ul>
                    <li>
                        <Link className="back-to-movies" to="/">
                            <img className="back-arrow" src="/back.svg" alt="navigation to go bakc" />
                            Movies
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}