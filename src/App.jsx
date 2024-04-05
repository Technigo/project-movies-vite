import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList"
import { MovieDetail } from "./components/MovieDetail"

export const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
  </BrowserRouter>
}