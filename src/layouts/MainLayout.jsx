// src/layouts/MainLayout.jsx
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    navigate("/");
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-800 p-4 text-white">
        <nav className="container mx-auto flex flex-wrap items-center justify-between space-x-4">
          <Link to="/" className="text-xl font-bold">
            MovieApp
          </Link>

          <div className="flex space-x-4">
            <NavLink
              to="/category/popular"
              className={({ isActive }) =>
                isActive ? "text-blue-300" : "text-white"
              }
              onClick={clearSearch} // Clear search when navigating
            >
              Popular
            </NavLink>
            <NavLink
              to="/category/upcoming"
              className={({ isActive }) =>
                isActive ? "text-blue-300" : "text-white"
              }
              onClick={clearSearch}
            >
              Upcoming
            </NavLink>
            <NavLink
              to="/category/now_playing"
              className={({ isActive }) =>
                isActive ? "text-blue-300" : "text-white"
              }
              onClick={clearSearch}
            >
              Now Playing
            </NavLink>
          </div>

          <SearchBar onSearch={handleSearch} value={searchQuery} />
        </nav>
      </header>
      <main className="container mx-auto flex-grow p-4">
        <Outlet context={{ searchQuery, clearSearch }} />
      </main>
      <footer className="bg-gray-800 p-4 text-center text-white">
        &copy; {new Date().getFullYear()} MovieApp
      </footer>
    </div>
  );
};

export default MainLayout;
