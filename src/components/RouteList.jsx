import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { MovieDetails } from "./MovieDetails";
import { MovieLibrary } from "./MovieLibrary";

export const RouteList = ({ movies }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieLibrary movies={movies} />} />
        <Route
          path="/movies/:movieTitle"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </>
  );
};
