import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetail } from "../pages/MovieDetail";
import { Genre } from "../pages/Genre";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/movie/popular" element={<Genre genre="popular" />} />
    <Route path="/movie/top_rated" element={<Genre genre="top_rated" />} />
    <Route path="/movie/:id" element={<MovieDetail />}></Route>
  </>
);

export default routes;
