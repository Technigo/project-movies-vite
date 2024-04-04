import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movies } from "./Movies";
// import { MovieCard } from "./components/MovieCard";
import { MovieDetails } from "./components/MovieDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      {/* <MovieCard /> */}
      <Route path="/movie" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
