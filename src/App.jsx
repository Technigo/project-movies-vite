import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Detail } from './pages/Detail';
import { Popular } from './pages/Popular';

export const App = () => {
    <BrowserRouter>
    <Routes>
    <Route path="/" exact>
      <Popular />
    </Route>
    {/* <Route path="/details/:detailsId" element={<Detail />}></Route>/ */}
    </Routes>
    </BrowserRouter>
  
};
