import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h2>Sorry, this page does not exist ... </h2>
      <p>Try going to a different page</p>
      <Link to="/">Go back to the homepage </Link>
    </div>
  );
};
