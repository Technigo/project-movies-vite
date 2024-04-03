import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from './assets/components/MainPage.jsx'
import { Details } from './assets/components/details.jsx'


export const App = () => {
  return (
  <>
  <BrowserRouter>  
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
  </>
  )
};
