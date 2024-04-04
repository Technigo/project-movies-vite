import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>The page you are trying to access does not exist. </h1>
      <Link to="/">Go back</Link>
    </div>
  );
};
