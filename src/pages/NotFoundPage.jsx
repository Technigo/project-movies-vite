import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>It looks like the page your are trying to reach doesn't exist. </h1>
    </div>
  );
};
