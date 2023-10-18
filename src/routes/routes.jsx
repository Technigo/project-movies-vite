import { Route } from "react-router-dom";
import { Popular } from "../pages/Popular";
import { Detail } from "../pages/Detail";
import { NotFoundPage } from "../pages/NotFoundPage";

const routes = (
  <>
    <Route path="/" element={<Popular />}></Route>
    <Route path="/detail/:id" element={<Detail />}></Route>
    <Route path="/not-found" element={<NotFoundPage />}></Route>
  </>
);

export default routes;
