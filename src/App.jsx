import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList";

export function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
