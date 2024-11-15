import { BrowserRouter, Routes } from "react-router-dom";
// import { routes } from "./routePaths"; 

import { MovieGallery } from "./pages/MovieGallery";

export const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <MovieGallery/>
      {/* <Routes>{routes}</Routes> */}
    </BrowserRouter>
  </>
  )
};


