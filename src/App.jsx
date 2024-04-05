import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./pages/MovieList";
import { MovieDetails } from "./pages/MovieDetails";
import { NotFound } from "./pages/NotFound";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:movie_id" element={<MovieDetails />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
