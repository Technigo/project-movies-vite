import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoviesPage } from "./pages/MoviesPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      <Route path="/movie" element={<MovieDetailsPage />} />
    </Routes>
  );
};

export default App;
