import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import { MovieInfo } from "./MovieInfo";
import { NewAccount } from "./CreateAccount/NewAccount";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFoundPage/>}/>
    <Route path="/movie/:movieTitle" element={<MovieInfo/>}/>
    <Route path="/new-account" element={<NewAccount/>}/>
  </Routes>
);

export default routes;
