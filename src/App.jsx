import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import SingleMovie from "./components/SingleMovie";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
