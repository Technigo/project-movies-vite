import { Link } from "react-router-dom";
import arrow from "/arrow.svg";
import "./css/notFound.css"

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="back-button">
        <Link to="/">
          <img src={arrow} id="go-back" />
        </Link>
        <Link to="/">
          <h4>Movies</h4>
        </Link>
      </div>
      <div className="gif">
        <h1>Ooopss..</h1>
          <h2>Page not found</h2>
        <img src="/gif-not-found1.gif" alt="page not found John Travolta" />
      </div>
    </div>
  )}