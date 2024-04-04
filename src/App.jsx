import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList";
import { Movie } from "./components/Movie";
import "./app.css";
import { NotFound } from "./components/NotFound";
import { MovieUpcoming } from "./components/MovieUpcoming";
import { MovieClassics } from "./components/MovieClassics";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/upcoming" element={<MovieUpcoming />} />
          <Route path="/classics" element={<MovieClassics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
