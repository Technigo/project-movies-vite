import React from "react";
import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from "./assets/components/routeToPopularList";
import { MainPage } from "./assets/components/popularList";


//BrowserRouter  needs to wrap it all
export const App = () => {
  return (
    <>
  <BrowserRouter>  

  <MainPage />
  <MyRoutes />
  
  </BrowserRouter>
</>
)
};
