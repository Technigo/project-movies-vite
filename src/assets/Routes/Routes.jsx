import { Route } from "react-router-dom";
import { MovieList } from "../Pages/MovieList";
import { SingleMovie } from "../Pages/SingleMovie";
import { NotFoundPage } from "../Pages/NotFoundPage"





export const routes = (
    <>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="*" element={<NotFoundPage />} />
    </>
);