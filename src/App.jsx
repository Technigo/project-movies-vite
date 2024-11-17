import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movies } from "./pages/Movies";
import { MovieInfo } from "./pages/MovieInfo";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Movies />} />

            <Route path="/movie/:id" element={<MovieInfo />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
