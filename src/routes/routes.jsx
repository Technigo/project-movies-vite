import { Route } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
import { ShowMeMovie } from "../pages/ShowMeMovie";

export const routes = (
    <>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<MovieList />} />
        <Route path="/movie:id" element={<ShowMeMovie />} />

    </>
);