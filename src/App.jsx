import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { PopularMovieList } from "./components/PopularMovieList";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PopularMovieList />} />
      </Routes>
    </BrowserRouter>
  );
};
