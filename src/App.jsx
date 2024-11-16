import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routePaths"; 

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>{routes}</Routes>
      </BrowserRouter>
  </>
  )
};



