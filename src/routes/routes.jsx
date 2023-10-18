import { Route } from "react-router-dom";
import { MovieList } from "../components/movie-list/MovieList";
import { PageNotFound } from "../pages/PageNotFound";
import { MovieInfo } from "../pages/MovieInfo";

export const routes = (
  <>
    <Route path="/" element={<MovieList />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/movies/:id" element={<MovieInfo />} />
  </>
);
