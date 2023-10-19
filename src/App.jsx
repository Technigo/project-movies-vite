import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList";
import { Movie } from "./components/Movie";

export function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList movie={Movie} />} />
          {/* <Route path="movie/:movie" element={<Movie movie={movie.id} />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
