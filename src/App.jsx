import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { PopularMovieList } from "./pages/PopularMovieList";
import { MovieCard } from "./pages/MovieCard";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <PopularMovieList />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieCard />} />
      </Routes>
    </BrowserRouter>
  );
};
