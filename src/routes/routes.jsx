import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviesList } from "../pages/MoviesList/MoviesList";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { MovieInfo } from "../pages/MovieInfo/MovieInfo";

export const routes = () => {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieInfo />} />
      <Route path="/movies" element={<MoviesList />} />
      {/* Any time a user clicks on a page that is not  found */}
      <Route path="*" element={<NotFoundPage />} />
    </>
  );
};
