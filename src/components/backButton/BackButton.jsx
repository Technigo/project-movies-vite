import { IoIosArrowDropleftCircle } from "react-icons/io";

import "./backButton.css";
import { Link } from "react-router-dom";

// Reusable component for all the buttons, takes in text as a prop
export const BackButton = ({ text }) => {
  return (
    <Link to={"/"} className="back-button">
      <IoIosArrowDropleftCircle className="arrow" />
      {text}
    </Link>
  );
};
