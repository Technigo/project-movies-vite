import { useState } from "react";
import { MovieList } from "../pages/MovieList";
import { SeriesList } from "../pages/SeriesList";

export const Header = () => {
  const [active, setActive] = useState("movies");
  const handleChange = (change) => {
    setActive(change);
  };

  return (
    <div>
      <button
        onClick={() => handleChange("movies")}
        disabled={active === "movies"}
      >
        Movies
      </button>
      <button
        onClick={() => handleChange("tvSeries")}
        disabled={active === "tvSeries"}
      >
        TV Series
      </button>
      {active === "movies" ? <MovieList /> : <SeriesList />}
    </div>
  );
};
