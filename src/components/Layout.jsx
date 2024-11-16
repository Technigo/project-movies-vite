import { Outlet, useLocation } from "react-router-dom";
import { MovieHeader } from "./MovieHeader";

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <MovieHeader />}
      <Outlet />
    </>
  );
};
