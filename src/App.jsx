import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList";
import { Movie } from "./components/Movie";
import "./app.css";
import { NotFound } from "./components/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
