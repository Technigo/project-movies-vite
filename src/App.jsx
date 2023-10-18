import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./pages/MovieList";
import { SingleMovie } from "./pages/SingleMovie";



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<SingleMovie  />} />
      </Routes>

    </BrowserRouter>
  )
}
