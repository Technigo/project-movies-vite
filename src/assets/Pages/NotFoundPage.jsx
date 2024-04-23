import { Link } from "react-router-dom";
import ".../NotFoundPage.css"; // Importing CSS file

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>Oh oh, you are leaving The Movie Zone! Hold on for a second.</h1>
      <Link to="/" className="link-styles">Go back to the zone</Link>
    </div>
  );
};
