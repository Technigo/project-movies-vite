import { Outlet, useLocation } from "react-router-dom";
import { MovieHeader } from "./MovieHeader";

export const Layout = () => {
  const location = useLocation(); // Retrieves the current route's location object
  const isHomePage = location.pathname === "/"; // Determine if the current page is the home page

  return (
    <>
      {/* Render the MovieHeader only if it's the home page */}
      {isHomePage && <MovieHeader />}
      <Outlet />
    </>
  );
};
