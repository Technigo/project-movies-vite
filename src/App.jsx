import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MovieCard } from "./components/MovieCard";
import { MovieDetails } from "./components/MovieDetails";
import { MoviesPage } from "./pages/MoviesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      {/* <MovieCard /> */}
      <Route path="/movie" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
