import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Popular } from "./Pages/Popular.jsx"; 
import { Detail } from "./Pages/Detail.jsx"; 
import { ErrorPage } from "./Pages/ErrorPage.jsx";

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

