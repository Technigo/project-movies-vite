import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import MoviePages from "../pages/MoviePages.jsx";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the movie details page */}
          <Route path="/movie/:movieID" element={<MoviePages />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
