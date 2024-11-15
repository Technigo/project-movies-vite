import { BrowserRouter, Routes } from "react-router-dom";
// import { MovieProfile } from "./pages/MovieProfile";
import { routes } from "./routePaths"; 

// import { MovieGallery } from "./pages/MovieGallery";

export const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  </>
  )
};


