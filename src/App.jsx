import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { MovieInfo } from "./pages/MovieInfo";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
