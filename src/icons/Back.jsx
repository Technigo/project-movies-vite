import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export const Back = () => (
  <>
    <Link to="/">
      <IoIosArrowDropleftCircle className="back-icon" />
    </Link>
    <span>Movies</span>
  </>
);
