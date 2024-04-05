import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Link to={"/"} className="back-btn">
      ← Back to Movies
    </Link>
  );
};
