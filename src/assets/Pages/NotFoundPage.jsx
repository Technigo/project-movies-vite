import { Link } from "react-router-dom";
import "./NotFoundPage.css"; 

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>Oops! It seems you've wandered off the path. Let's get you back on track.</h1>
        <Link to="/" className="link-styles">Return to the Movie zone</Link>
    </div>
  );
};
