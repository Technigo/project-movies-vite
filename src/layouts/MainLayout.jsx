import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import ScrollClasses from "../components/ui/ScrollClasses";

const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (query) => {
    const trimmedQuery = query.trim();
    setSearchQuery(trimmedQuery);

    if (trimmedQuery) {
      // Navigate to the home page with the search query as a query parameter
      navigate(`/?q=${encodeURIComponent(trimmedQuery)}`);
    } else {
      // If the search query is empty, navigate to the home page without query parameters
      navigate(`/`);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    navigate(`/`);
  };

  return (
    <>
      <ScrollClasses />
      <div className="flex min-h-screen flex-col gap-4 bg-gradient-to-r from-green-200 to-green-100 p-4 pt-16 lg:flex-row lg:gap-6 lg:pt-4 xl:gap-8 2xl:gap-10 2xl:p-10">
        <Sidebar
          onClick={clearSearch}
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          className="fixed left-2 top-2 w-[calc(100%-1rem)] flex-shrink-0 shadow-sm lg:sticky lg:left-0 lg:top-4 lg:h-sidebar-height-xl lg:w-80 2xl:top-10 2xl:h-sidebar-height-2xl"
        />

        <div className="flex flex-1 flex-col">
          <header className="justify-en hidden rounded-full bg-white has-[:focus]:shadow has-[:focus]:outline-none has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-green-950 lg:flex">
            <SearchBar onSearch={handleSearch} value={searchQuery} />
          </header>

          <main className="flex-grow pb-10 pt-3 lg:py-10">
            <Outlet context={{ searchQuery, clearSearch }} />
          </main>

          <footer className="rounded-lg bg-white p-4 text-center">
            &copy; {new Date().getFullYear()} MovieHut by{" "}
            <a
              aria-label="Helene Westrin on LinkedIn"
              href="https://www.linkedin.com/in/helenewestrin/"
            >
              Helene Westrin
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
