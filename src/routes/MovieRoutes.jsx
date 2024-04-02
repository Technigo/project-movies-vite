import { Route } from "react-router-dom";
import { MovieGrid } from "../pages/MovieGrid";
import { NotFound } from "../pages/NotFound";

export const MovieRoutes = (
  <>
        <Route path="/" element={<MovieGrid />} />
        <Route path="*" element={<NotFound/>} />
  </>
);
