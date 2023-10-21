import { Route } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
import { SingleMovie } from "../pages/SingleMovie";
import { NotFoundPage } from "../pages/NotFoundPage"





export const routes = (
    <>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="*" element={<NotFoundPage />} />
    </>
);


