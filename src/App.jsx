import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList";
import { Movie } from "./components/Movie";
import "./app.css";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
