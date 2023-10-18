import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <h1>Oops, that page doesn't exist.</h1>
      <Link to="/">Go back</Link>
    </div>
  );
};
