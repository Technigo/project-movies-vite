import { Route } from "react-router-dom";
import { MovieList } from "../components/movie-list/MovieList";
import { PageNotFound } from "../pages/PageNotFound";
import { MovieInfo } from "../pages/MovieInfo";

export const routes = (
  <>
    {/* The different routes in the project  */}
    {/* This route leads to the main page where the movie list are displayed */}
    <Route path="/" element={<MovieList />} />
    {/* This route leads to the  element that displays when a user has entered an incorrect link/address */}
    <Route path="*" element={<PageNotFound />} />
    {/* This route leads to the display of information about a movie that the user has selected */}
    <Route path="/movies/:id" element={<MovieInfo />} />
  </>
);
