import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import useSWR from "swr";

import { HeroCarousel } from "../../components/HeroCarousel";
import { MainSlider } from "../../components/MainSlider";

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
    fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", options).then(
      (response) => response.json()
    ),
    fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", options).then((response) =>
      response.json()
    ),
    fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options).then(
      (response) => response.json()
    ),
    fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options).then(
      (response) => response.json()
    ),
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options).then((response) =>
      response.json()
    ),
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options).then((response) =>
      response.json()
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
  console.log(data);

  if (isLoading) return <p>Loading</p>;

  const [
    { results: popularMovies },
    { results: trendingMovies },
    { results: topRatedTVs },
    { results: popularTVs },
    { results: trendingTVs },
    { results: nowPlayingMovies },
    { results: upcomingMovies },
    { genres },
  ] = data !== undefined && data;
  console.log(genres);

  const heroImages = popularMovies && popularMovies.slice(0, 7).map((movie) => movie.backdrop_path);
  const tvScreenImages = topRatedTVs && topRatedTVs.slice(0, 7).map((tv) => tv.backdrop_path);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero_wrapper}>
          <HeroCarousel images={heroImages} windowWidth={windowWidth} />
        </div>

        <div className={styles.main_inner}>
          <div className={styles.movies_wrapper}>
            <MainSlider
              windowWidth={windowWidth}
              movies={popularMovies}
              title="Popular movies"
              horizontal={false}
            />
            <MainSlider
              windowWidth={windowWidth}
              movies={trendingMovies}
              title="Trending movies"
              horizontal={false}
            />
            <MainSlider
              windowWidth={windowWidth}
              movies={nowPlayingMovies}
              title="Now playing movies"
              horizontal={false}
            />
            <MainSlider
              windowWidth={windowWidth}
              movies={upcomingMovies}
              title="upcoming movies"
              genres={genres}
            />
          </div>
          <div className={styles.tvs_wrapper}>
            <div className={styles.hero_wrapper}>
              <HeroCarousel images={tvScreenImages} windowWidth={windowWidth} />
            </div>
            <MainSlider
              windowWidth={windowWidth}
              movies={topRatedTVs}
              title="Top rated TV shows"
              genres={genres}
            />
            <MainSlider
              windowWidth={windowWidth}
              movies={trendingTVs}
              title="Trending TV shows"
              genres={genres}
            />
            <MainSlider
              windowWidth={windowWidth}
              movies={popularTVs}
              title="Popular TV shows"
              genres={genres}
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
