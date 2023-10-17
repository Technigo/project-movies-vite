import { useEffect, useState, useRef, useMemo } from "react";
import styles from "./HomePage.module.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";

import useSWR from "swr";

import { HeroCarousel } from "../../components/HeroCarousel";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_KEY, // eslint-disable-line
  },
};

const fetcher = async () => {
  const data = await Promise.all([
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options).then(
      (response) => response.json()
    ),
    fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options).then(
      (response) => response.json()
    ),
    fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", options).then(
      (response) => response.json()
    ),
  ]);
  return data;
};

function getWindowWidth() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}
function HomePage() {
  const [{ width: windowWidth }, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data, error, isLoading } = useSWR("getMovie", fetcher);
  if (isLoading) return <p>Loading</p>;
  const [{ results: popularMovies }, { results: trendingMovies }, { results: topRatedMovies }] =
    data !== undefined && data;
  const heroImages = popularMovies && popularMovies.slice(0, 5).map((movie) => movie.backdrop_path);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero_wrapper}>
          <HeroCarousel images={heroImages} windowWidth={windowWidth} />
        </div>
        <div className={styles.main_inner}>
          <Slider movies={popularMovies} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
