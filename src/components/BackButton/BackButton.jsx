import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export const BackButton = () => {
  return (
    /* Link that navigates back to home */
    <Link to="/" className="back-button">
      {/* Imported back arrow-icon using react icons */}
      <IoChevronBackCircleOutline
        className="back-icon"
        aria-label="Go back to popular movies"
      />
      Movies
    </Link>
  );
};
