import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Company } from "../Pages/Company";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import { MovieInfo } from "../Pages/MovieInfo";
import { NewAccount } from "./CreateAccount/NewAccount";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFoundPage/>}/>
    <Route path="/movie/:movieId" element={<MovieInfo/>}/>
    <Route path="/company/:companyId" element={<Company/>}/>
    <Route path="/new-account" element={<NewAccount/>}/>
  </Routes>
);

export default routes;
