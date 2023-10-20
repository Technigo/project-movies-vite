import { Route } from "react-router-dom";
import { Popular } from "../pages/Popular";
import { Detail } from "../pages/Detail";
import { NotFoundPage } from "../pages/NotFoundPage";

// Define the routes for the application.
const routes = (
  <>
    {/* Route for the homepage, rendering the Popular component. */}
    <Route path="/" element={<Popular />}></Route>

    {/* Route for displaying the detail page with a dynamic parameter 'id'. */}
    <Route path="/detail/:id" element={<Detail />}></Route>

    {/* Route for handling 404 (Not Found) pages. */}
    <Route path="*" element={<NotFoundPage />}></Route>
  </>
);

export default routes;
