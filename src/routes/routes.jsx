import { Route } from "react-router-dom";
import { PopularList } from "../pages/popularList/PopularList.jsx";
// import { Detail } from "../pages/detail/Detail.jsx";
import { PageNotFound } from "../pages/404-error/PageNotFound.jsx";

export const routes = (
    <>
        {/* Page Routes */}
        <Route path="/" element={<PopularList />} />
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
    </>
);
