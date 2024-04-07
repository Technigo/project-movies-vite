import { Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { MovieDetail } from "../pages/MovieDetail";
import { Genre } from "../pages/genre/Genre";
import { SimilarMovie } from "../pages/SimilarMovie";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/movie/now_playing" element={<Genre genre="now_playing" />} />
    <Route path="/movie/popular" element={<Genre genre="popular" />} />
    <Route path="/movie/top_rated" element={<Genre genre="top_rated" />} />
    <Route path="/movie/:id" element={<MovieDetail />}></Route>
    <Route path="/movie/:id/similar" element={<SimilarMovie />}></Route>
  </>
);

export default routes;
