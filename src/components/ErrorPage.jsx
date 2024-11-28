import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

// In case the wrong url is typed, this page will show
export const ErrorPage = () => {
  return (
    <div className="error">
      <p>Whopsie, the page does not exist!</p>
      <button className="error-button">
        <Link to="/">Back to movies</Link>
      </button>
      <p>🎬 🎥</p>
    </div>
  );
};
