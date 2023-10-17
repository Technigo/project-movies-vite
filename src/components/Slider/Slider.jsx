import { MovieCard } from "../MovieCard";
function Slider({ movies }) {
  return (
    <div>
      {" "}
      {movies ? (
        movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Slider;
