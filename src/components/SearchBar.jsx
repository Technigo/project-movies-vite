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
    <form onSubmit={handleSubmit} className="flex items-center text-black">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="w-full rounded border p-2"
      />
      <button type="submit" className="btn ml-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
