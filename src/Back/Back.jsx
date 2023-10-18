import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export const Back = () => (
  <>
    <Link to="/" className="back-link">
      <IoIosArrowDropleftCircle className="back-icon" />
      Movies
    </Link>
  </>
);
