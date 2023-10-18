import { Route } from "react-router-dom";
import { PopularList } from "../pages/popularList/PopularList.jsx";
import { PageNotFound } from "../pages/404-error/PageNotFound.jsx";
import { Details } from "../pages/details/Details.jsx";

export const routes = (
  <>
    {/* Page Routes */}
    <Route path="/" element={<PopularList />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/details/:id" element={<Details />} />
  </>
);
