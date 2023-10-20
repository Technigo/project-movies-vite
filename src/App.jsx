import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { MovieInfo } from "./pages/MovieInfo"
import { ErrorPage } from "./pages/ErrorPage";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info/:movieId" element={<MovieInfo />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      
    </>
  )
};
