import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export const NotFoundPage = () => {
  return (
    <div className="not-found-wrapper">
      <h1>
        {/* Display a message indicating that the requested page does not exist. */}
        Oh no! <br /> It seems like the page you are trying to access does not
        exist.
      </h1>

      {/* Provide a link to navigate back to the home page. */}
      <Link to="/">Go home</Link>
    </div>
  );
};
