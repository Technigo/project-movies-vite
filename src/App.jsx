import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MovieList from "./components/MovieList";
import Movie from "./pages/Movie";
import PageNotFound from "./pages/PageNotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate replace to="browser" />} />
          <Route path="browser" element={<MovieList />} />
        </Route>
        <Route path="/movies/:movieID" element={<Movie />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
