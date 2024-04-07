import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Link to={"/"} className="back-btn" >
      <button alt="Back to Movies"></button>
    </Link>
  );
};
