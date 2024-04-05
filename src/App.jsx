import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { MoviePage } from "./MoviePage";

// https://reactrouter.com/
export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
    </Routes>
  </Router>
);
