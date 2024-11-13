import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";

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
    <div className="d:mp-6 flex min-h-screen flex-col gap-4 bg-gradient-to-r from-green-200 to-green-100 p-4 lg:flex-row lg:gap-8 2xl:gap-10 2xl:p-10">
      <Sidebar
        onClick={clearSearch}
        className="lg:h-sidebar-height-lg 2xl:h-sidebar-height-2xl top-10 w-full flex-shrink-0 lg:sticky lg:w-80"
      />

      <div className="flex flex-1 flex-col">
        <header className="justify-en flex rounded-full bg-white has-[:focus]:shadow has-[:focus]:outline-none has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-0 has-[:focus-visible]:outline-green-950">
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
