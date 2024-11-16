import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Movies } from "./pages/Movies";
import { MovieInfo } from "./pages/MovieInfo";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/movies" element={<Movies />} />

            <Route path="/movie/:id" element={<MovieInfo />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
