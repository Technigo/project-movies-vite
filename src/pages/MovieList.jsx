/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unreachable */
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import "./MovieList.css";

export const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState("nowplaying"); //set default endpoint

  const endpoints = {
    nowplaying: "https://api.themoviedb.org/3/movie/now_playing",
    popular: "https://api.themoviedb.org/3/movie/popular",
    toprated: "https://api.themoviedb.org/3/movie/top_rated",
    upcoming: "https://api.themoviedb.org/3/movie/upcoming",
  };

  const apiEnv = import.meta.env.VITE_OPENDB_KEY;
  const API_LANG = "en-US";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${endpoints[active]}?api_key=${apiEnv}&language=${API_LANG}page=1`
        );
        if (!response.ok) {
          throw new Error("Couldn't fetch data!");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [active]);

  const handleEndpointChange = (endpoint) => {
    setActive(endpoint);
  };

  return (
    <div>
      <Header onEndpointChange={handleEndpointChange} />
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
