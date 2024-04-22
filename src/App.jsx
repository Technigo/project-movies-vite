import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { MovieList } from "./pages/MovieList";
import { MovieCard } from "./pages/MovieCard";
import { PageNotFound } from "./pages/PageNotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MovieList movieCategory="upcoming" />
            </>
          }
        />
        <Route
          path="/top-rated"
          element={
            <>
              <Header />
              <MovieList movieCategory="top_rated" />
            </>
          }
        />
        <Route
          path="/popular"
          element={
            <>
              <Header />
              <MovieList movieCategory="popular" />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieCard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
