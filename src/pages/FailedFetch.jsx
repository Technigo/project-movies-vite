import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import arrowIcon from "../assets/arrow-icon.png";

export const FailedFetch = () => {
  return (
    <div className="not-found-page">
      <div className="camera-icon">🎥</div>
      <h1>Oops..</h1>
      <p>There seems to be something wrong. This movie could not be loaded.</p>
      <div className="error-back-button">
        <Link to={`/movie`}>
          <img src={arrowIcon} alt="Go back" />
        </Link>
      </div>
    </div>
  );
};
