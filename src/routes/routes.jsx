import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetail } from "../components/movies/MovieDetail";
import { NotFoundPage } from "../pages/NotFoundPage";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/movies/:id" element={<MovieDetail />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
);

export default routes;
