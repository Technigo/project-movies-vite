import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList";
import { Detail } from "./components/Detail";

const routes = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default routes;
