import { Link } from "react-router-dom";
import "./PageNotFound.css";

export const PageNotFound = () => {
  return (
    <div className="error-message">
      <h1>
        Oops! Looks like you took a wrong turn. This page doesn’t exist.
      </h1>
      <Link to="/" className="go-back-link">Go back to movies</Link>
    </div>
  );
};