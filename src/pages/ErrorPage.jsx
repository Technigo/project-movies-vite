import { HomeButton } from "./HomeButton"
import { Link } from "react-router-dom"
import "./errorpage.css" 

export const ErrorPage = () => {
  return (
    <>
    <p className="error-text">Oops! Something went wrong!</p>
    <Link to="/" className="error-back-button">
        <HomeButton />
    </Link>
    </>
  )
}
