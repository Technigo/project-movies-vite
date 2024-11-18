// App.jsx

import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import "./App.css";

export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </main>
  );
};
