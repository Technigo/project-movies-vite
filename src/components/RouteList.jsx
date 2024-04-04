import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { MovieDetails } from "./MovieDetails";
import { MovieLibrary } from "./MovieLibrary";

export const RouteList = ({ movies }) => {
  return (
    <>
      {/*route*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieLibrary movies={movies} />} />
        {/*dynamic routes*/}
        {/*Viktoria: had to move the dynamic route inside the Routes wrapper, got an error otherwise.*/}
        <Route
          path="/movies/:movieTitle"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </>
  );
};
