import { Link } from "react-router-dom";
import "../../src/index.css";

export const BackToMainButton = () => {
  return (
    <Link to={"/"} className="back-btn">
      ↩️ Back to Main
    </Link>
  );
};
