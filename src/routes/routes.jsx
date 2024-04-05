import React from "react";
import { Routes, Route } from "react-router-dom";
import { MoviesPage } from "../pages/MoviesPage";
import { MovieDetailsPage } from "../pages/MovieDetailsPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route path="/movie/" element={<MoviesPage />} />
    </Routes>
  );
};

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { MoviesPage } from "../pages/MoviesPage";
// import { MovieDetailsPage } from "../pages/MovieDetailsPage";

// export const routes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<MoviesPage />} />
//       <Route path="/movie" element={<MovieDetailsPage />} />
//     </Routes>
//   );
// };
