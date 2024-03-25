import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import MovieDetail from "./components/MovieDetail"

export const App = () => {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}
