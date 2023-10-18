import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import routes from "./routes/routes"

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="wrapper">
        <Routes>{ routes }</Routes>
      </div>
    </BrowserRouter>
    </>
  );
};
