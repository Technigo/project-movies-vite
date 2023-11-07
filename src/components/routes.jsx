import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
//import { MyInfo } from "../components/MyInfo";
//import { NotFoundPage } from "../components/NotFoundPage";
//import {  } from "../components/songs/SongInfo";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
   
  </Routes>
);

export default routes;
