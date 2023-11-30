import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./Components/MainPage.jsx";
import { FilmDetails } from "./Components/FilmDetails.jsx";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/details/:id" element={<FilmDetails />} />
            {/* <Route path="/" element=//den component du vill ska vara först dvs startsidan tex <Welcome />} />
    <Route path="/About" element=//nästa sida} />
    <Route path="/Contact" element=//annan sida} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
