import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviesList } from "../pages/MoviesList";
import { NotFoundPage } from "../pages/NotFoundPage";
import { MovieInfo } from "../pages/MovieInfo";

export const routes = () => {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      {/* Any time a user clicks on a page that is not  found */}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/movies" element={<MoviesList />} />
      <Route path="/movieinfo/:id" element={<MovieInfo />} />
    </>
  );
};
