import { Route } from "react-router-dom";
import { MovieGrid } from "../pages/MovieGrid";
import { MovieDetails } from "../pages/MovieDetails";
import { NotFound } from "../pages/NotFound";

export const MovieRoutes = (
  <>
        <Route path="/" element={<MovieGrid />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/movie/:slug" element={<MovieDetails/>}/>
  </>
);
