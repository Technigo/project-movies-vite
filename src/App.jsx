import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./component/MovieList";
import MovieDetail from "./component/MovieDetail";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/MovieDetail/:id" element={<MovieDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
