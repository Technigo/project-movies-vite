/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieList } from "../components/MovieList";

export const Home = () => {
  const apiKey = "195790d926bf4d38c02251685a7c5f5e";
  const [movieListData, setMovieListData] = useState("");

  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      );
      if (response.ok) {
        const data = await response.json();
        setMovieListData(data);
      } else {
        throw new Error("Failed at fetch the movie list");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <section className="movie-section">
        <ul className="movie-list">
          {movieListData &&
            movieListData.results.map((movie) => (
              <li key={movie.id} className="each-movie">
                <Link to={`/movie/${movie.id}`}>
                  <MovieList movie={movie} />
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
