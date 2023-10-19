import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { MovieInfo } from "./pages/MovieInfo"
import { NavBar } from "./components/NavBar"
import { ErrorPage } from "./pages/ErrorPage";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<MovieInfo />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      
    </>
  )
};
