import { Home } from "./pages/Home";
// import { MovieInfo } from "./pages/MovieInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movie/:id" element={<MovieInfo />} /> */}
      </Routes>
    </BrowserRouter>
  )
};
