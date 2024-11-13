import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import MoviePages from "./pages/MoviePages.jsx";
import "./index.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:movieID" element={<MoviePages />}></Route>
            </Routes>
          </div>{" "}
        </main>
      </BrowserRouter>
    </>
  );
};
