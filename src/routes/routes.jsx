import { Route } from "react-router-dom";
import { Popular } from "../pages/Popular";
import { Detail } from "../pages/Detail";
import { NotFoundPage } from "../pages/NotFoundPage";

const routes = (
     <>
     <Route path="/" element={<Popular />}></Route>
     <Route path="/detail" element={<Detail />}></Route>
     <Route path="*" element={<NotFoundPage />}></Route>

     </>
)

export default routes;