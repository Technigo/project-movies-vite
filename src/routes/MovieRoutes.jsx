import { Route, Routes } from "react-router-dom";
import { MovieGrid } from "../pages/MovieGrid";
import { MovieDetails } from "../pages/MovieDetails";
import { NotFound } from "../pages/NotFound";

export const MovieRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieGrid />} />
      <Route path="/:genre/:id" element={<MovieDetails />} />
      <Route path="/:genre" element={<MovieGrid />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
