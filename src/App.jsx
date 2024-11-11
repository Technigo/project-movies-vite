import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PopularList } from "./components/PopularList"
import { Movie } from "./components/Movie"


export function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<PopularList />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}