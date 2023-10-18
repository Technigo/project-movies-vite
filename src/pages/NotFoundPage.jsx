import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export const NotFoundPage = () => {
  return (
    <div className="not-found-wrapper">
      <h1>
        Oh no! <br /> It seems like the page you are trying to access does not
        exist.
      </h1>
      <Link to="/">Go home</Link>
    </div>
  );
};
