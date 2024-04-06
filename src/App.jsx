import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { MovieList } from "./pages/MovieList";
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
              <MovieList />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieCard />} />
      </Routes>
    </BrowserRouter>
  );
};
