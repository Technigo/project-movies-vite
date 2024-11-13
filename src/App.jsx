import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PopularMoviesList } from "./components/PopularMoviesList";
// import { MovieDetails } from "./components/MovieDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularMoviesList />} />
        {/* <MovieDetails path="/movie/:id" element={<MovieDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
