import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList/MovieList";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
