import { useState, useEffect } from "react";
import Button from "./ui/Button";
import FormInput from "./ui/FormInput";

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
      <FormInput
        type="search"
        name="search"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
