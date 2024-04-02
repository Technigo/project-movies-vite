import React from "react";
import { MovieCardImage } from "./MovieCardImage";
import { MovieCardTitle } from "./MovieCardTitle";
import { MovieCardDetails } from "./MovieCardDetails";

export const MovieCard = () => {
  return (
    <div>
      <MovieCardImage />
      <MovieCardTitle />
      <MovieCardDetails />
    </div>
  );
};
