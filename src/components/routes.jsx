import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { NotFoundPage } from "./NotFoundPage";
//import { MyInfo } from "../components/MyInfo";
//import {  } from "../components/songs/SongInfo";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
);

export default routes;
