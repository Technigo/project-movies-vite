import { Link } from "react-router-dom";
import "./NotFoundPage.css";
export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h2>Sorry, this page does not exist ... </h2>
      <p>Try going to a different page</p>
      <Link to="/">Go home </Link>
    </div>
  );
};
