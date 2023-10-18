import { Route } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
import { SingleMovie } from "../pages/SingleMovie";





export const routes = (
    <>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
    </>
);


