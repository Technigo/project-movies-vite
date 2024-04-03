import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { MovieDetails } from "./MovieDetails";

export const RouteList = () => {
  return (
    //route
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MovieLibrary />} />
    </Routes>

    //dynamic routes
    <Route path="/movies/:movieId" element={<MovieDetails />} />
  );
};
