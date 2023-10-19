import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Popular } from "./Pages/Popular.jsx"; 
import { Detail } from "./pages/Detail.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";

//Sets up routing. The path with '/movies/:id' displays the 'Detail' page with a dynamic movie ID. ErrorPage displays for any other paths.
export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/movies/:id" element={<Detail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

