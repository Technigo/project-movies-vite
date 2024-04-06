import { Link } from "react-router-dom";
import backButton from "../assets/backButton.png";
import "./ErrorPage.css";

export const ErrorPage = () => {
  const errorImage =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3JqeDNrNmFmemVhazlsYWFsemlzZms3ZWh3dnZ1Y2swOWRxNGN5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8L0Pky6C83SzkzU55a/giphy.gif";

  return (
    <div className="error-container">
      <Link to="/">
        <img src={backButton} alt="Go back button" className="back-button" />
      </Link>
      <div className="error-content">
        <h1 className="error-title">
          The page you are trying to access does not exist.{" "}
        </h1>
        <img src={errorImage} alt="Error GIF" />
      </div>
    </div>
  );
};
