import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/MovieHut-logo.svg?react";
import HamburgerMenuButton from "./HamburgerMenuButton";
import MainNav from "./MainNav";

const Sidebar = ({ onClick, className, handleSearch, searchQuery }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsSidebarOpen(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside
      className={`z-10 overflow-y-auto rounded-md bg-white bg-opacity-85 px-3 py-1 backdrop-blur-lg md:py-2 lg:rounded-lg lg:p-6 ${className}`}
    >
      <div className="flex items-center justify-between pl-3 lg:justify-center lg:p-6">
        <Link to="/" onClick={onClick}>
          <Logo className="h-4 w-auto md:h-5 lg:h-6" />
          <span className="sr-only">MovieHut</span>
        </Link>
        <HamburgerMenuButton
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      <MainNav
        onClick={onClick}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        handleSearch={handleSearch}
        searchQuery={searchQuery}
      />
    </aside>
  );
};

export default Sidebar;
