import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Logo from "../assets/MovieHut-logo.svg?react";
import SidebarNavLink from "../components/ui/SidebarNavLink";

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
    <div className="flex min-h-screen gap-10 bg-gradient-to-r from-green-200 to-green-100 p-10">
      <aside className="h-sidebar-height sticky top-10 w-80 flex-shrink-0 rounded-lg bg-white p-6">
        <div className="flex justify-center p-6">
          <Link to="/">
            <Logo />
            <span className="sr-only">MovieHut</span>
          </Link>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <SidebarNavLink slug="/category/popular" onClick={clearSearch}>Popular movies</SidebarNavLink>
            </li>
            <li>
              <SidebarNavLink slug="/category/upcoming" onClick={clearSearch}>Upcoming movies</SidebarNavLink>
            </li>
            <li>
              <SidebarNavLink slug="/category/now_playing" onClick={clearSearch}>Now playing</SidebarNavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="justify-en flex rounded-full bg-white has-[:focus]:shadow has-[:focus]:outline-none has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-0 has-[:focus-visible]:outline-green-950 has-[:focus-visible]:outline">
          <SearchBar onSearch={handleSearch} value={searchQuery} />
        </header>

        <main className="flex-grow pb-10 pt-10">
          <Outlet context={{ searchQuery, clearSearch }} />
        </main>

        <footer className="rounded-lg bg-white p-4 text-center">
          &copy; {new Date().getFullYear()} MovieHut
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
