import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PopularMoviesList } from "./components/PopularMoviesList";

export const App = () => {
  return (
    <BrowserRouter>
      <PopularMoviesList />
    </BrowserRouter>
  );
};
