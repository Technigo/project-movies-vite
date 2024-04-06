import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetail } from "../pages/MovieDetail";

export const routes = () => {
  return (
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:movieTitle" element={<MovieDetail />}></Route>
    </>
  );
};
