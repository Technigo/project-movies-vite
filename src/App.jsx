import { Movie } from "./assets/components/Movie";
import { MovieDetails } from "./assets/components/MovieDetails";
import { NotFound } from "./assets/Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Movie />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
