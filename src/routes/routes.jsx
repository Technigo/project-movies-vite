import { Route } from "react-router-dom";
import { PopularMovies } from "../pages/PopularMovies";
import { DetailPage } from "../pages/DetailPage";

export const routes = (
  <>
    <Route path="/" element={<PopularMovies />} />
    <Route path="/movie/:id" element={<DetailPage />} />
  </>
);
