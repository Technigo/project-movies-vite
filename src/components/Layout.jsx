import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage && <Navbar />}
      <Outlet />
    </>
  );
}; 