import { Route } from "react-router-dom";
import { Popular } from "../pages/Popular/Popular";
import { Detail } from "../pages/Detail/Detail";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

// Define the routes for the application.
const routes = (
  <>
    {/* 
      Route for the homepage, rendering the Popular component. 
      It matches the root URL path ('/') and displays the 'Popular' component.
    */}
    <Route path="/" element={<Popular />}></Route>

    {/* 
      Route for displaying the detail page with a dynamic parameter 'id'. 
      It matches paths like '/detail/1', '/detail/2', etc., and displays the 'Detail' component.
    */}
    <Route path="/detail/:id" element={<Detail />}></Route>

    {/* 
      Route for handling 404 (Not Found) pages. 
      It's a catch-all route that matches any other paths and displays the 'NotFoundPage' component.
    */}
    <Route path="*" element={<NotFoundPage />}></Route>
  </>
);

export default routes;
