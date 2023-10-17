import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Popular } from "./Pages/Popular.jsx"; 
import { Detail } from "./Pages/Detail.jsx"; 
// import { routes } from "./routes.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/movies/:id" element={<Detail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

//const song = songsData.songs.find(
  //(s) => s.title.toLowerCase().replace(/ /g, "-") === songTitle
//);
