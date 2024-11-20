import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MovieListPage from "./pages/MovieListPage";
import ErrorPage from "./pages/ErrorPage";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MovieListPage />} />
          <Route path="page/:pageNumber" element={<MovieListPage />} />
          <Route
            path="movies/:categoryName/:pageNumber"
            element={<MovieListPage />}
          />
          <Route path="movies/:categoryName" element={<MovieListPage />} />
          <Route path="movie/:idSlug" element={<MovieDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
