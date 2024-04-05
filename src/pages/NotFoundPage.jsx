import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">Go home</Link>
      <h1>
        Oh Uh, it seems that the page you are trying to access does nto exist.{" "}
      </h1>
    </div>
  );
};
