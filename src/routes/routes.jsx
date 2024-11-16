// routes.jsx

import { Route } from "react-router-dom";
import { Movies } from "../pages/Movies";
import { MovieInfo } from "../pages/MovieInfo";
import { PageNotFound } from "../pages/PageNotFound";

export const routes = (
  <>
    <Route path="/" element={<Movies />} />
    <Route path="/movie/:movieId" element={<MovieInfo />} />
    <Route path="*" element={<PageNotFound />} />
  </>
);