import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
        <h1>Oh, no! Seems like the page you are trying to access does not exist.</h1>
        <Link to="/">Go home</Link>
    </div>
  )
}
