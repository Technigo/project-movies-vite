import { HomeButton } from "./HomeButton"
import { Link } from "react-router-dom"
import "./errorpage.css" 

export const ErrorPage = () => {
  return (
    <div className="error-page">
    <p className="error-text">Oops! Something went wrong!</p>
    <Link to="/" className="back-button">
        <HomeButton /> Back to movies
      </Link>
    </div>
  )
}
