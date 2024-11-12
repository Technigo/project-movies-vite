// src/components/SearchBar.jsx
import { useState, useEffect } from "react";

const SearchBar = ({ onSearch, value }) => {
  const [query, setQuery] = useState(value || "");

  useEffect(() => {
    setQuery(value || "");
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center pr-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="form-input w-full rounded-full border border-none pb-4 pl-8 pr-8 pt-4"
      />
      <button type="submit" className="btn ml-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
