import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MoviesList } from "./pages/MoviesList"
import { MovieDetail } from "./pages/MovieDetail"

export const App = () => {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}


