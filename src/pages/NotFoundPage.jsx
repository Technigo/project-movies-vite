import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import arrowIcon from "../assets/arrow-icon.png";

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="camera-icon">🎥</div>
      <h1>Oops..</h1>
      <p>It looks like this page doesn't exist.</p>
      <div className="error-back-button">
        <Link to={`/movie`}>
          <img src={arrowIcon} alt="Go back" />
        </Link>
      </div>
    </div>
  );
};
