import { Movie } from "./assets/components/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};
