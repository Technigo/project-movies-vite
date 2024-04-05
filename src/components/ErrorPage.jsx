import { Link } from "react-router-dom";
import backButton from "../assets/backButton.png";

export const ErrorPage = () => {
  return (
    <div>
      <h1>The page you are trying to access does not exist. </h1>
      <Link to="/">
        <img src={backButton} alt="Link to go back" />
      </Link>
    </div>
  );
};
