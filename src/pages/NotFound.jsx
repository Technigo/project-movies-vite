import { Link } from "react-router-dom";

import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="errorPage">
      <h4>ERROR 404</h4>
      <p id="errorP">Ooops, you got lost in data space</p>

      <Link className="backLink" to={`/`}>
        <p>
          {" "}
          ➡️ <span className="backText">Beam me back to main page</span> ⬅️
        </p>
      </Link>
    </div>
  );
};
