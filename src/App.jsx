import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import ShowMovie from "./components/ShowMovie";

//export
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id " element={<ShowMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
