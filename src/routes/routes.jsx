import { Route } from "react-router-dom";
import { MovieCard } from "../components/movie-card/MovieCard";
import { MovieList } from "../components/movie-list/MovieList";

export const routes = (
  <>
    <Route path="/" element={<MovieList />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/movies/:id" element={<MovieCard />} />
  </>
);
