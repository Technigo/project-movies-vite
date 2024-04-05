/* eslint-disable no-unreachable */
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import "./MovieList.css";

export const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const API_KEY = "f34e76ca0c4c61e8906dd3e22b0fe2af";
  const API_LANG = "en-US";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${API_LANG}page=1`
        );
        if (!response.ok) {
          throw new Error("Couldn't fetch data!");
        }
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <p> loading...</p>
      ) : (
        <section className="cardWrapper">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </section>
      )}
    </div>
  );
};
