import { useEffect, useState } from "react";
import { MovieHero } from "../components/MovieHero/MovieHero";
import { MovieCard } from "../components/MovieCard/MovieCard";

export const MovieList = () => {
  const apiKey = "d14980dd8df22d55a4bf4592f082a8c6";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  

  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const fetchMovieList = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMovies(data);
          setIsLoading(false);
        } else {
          throw new Error("Couldn't contact the API");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  if (movies) console.log(movies);

  return (
    <>
      <main>
        <header>
          <MovieHero />
        </header>
        {isLoading ? (
          <p>Loading movies...</p>
        ) : (
          <section className="movieListContainer">
            {movies?.results.map((movie) => {
              return <MovieCard movie={movie} />;
            })}
          </section>
        )}
      </main>
    </>
  );
};

//   const fetchMovieList = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         setMovies((moviesData) => data);
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.log("Error API", error);
//     } finally {
//       setIsLoading(false);
//       console.log(movies);
//     }
//   };
