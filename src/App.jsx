import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Popular } from "./pages/Popular";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
