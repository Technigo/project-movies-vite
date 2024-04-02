import { Link } from "react-router-dom";

export const BackArrow = () => {
  return (
    <Link to={`/`}>
      <div>
        <p>Movies</p>
      </div>
    </Link>
  );
};
