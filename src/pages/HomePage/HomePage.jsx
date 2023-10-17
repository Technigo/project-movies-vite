import { useEffect, useState, useRef, useMemo } from "react";
import styles from "./HomePage.module.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";
import { Button } from "../../components/Button";
import useSWR from "swr";

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
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(1);
  const [{ width: windowWidth }, setWindowWidth] = useState(getWindowWidth());
  const currentHeroImageWidth = useMemo(() => {
    return windowWidth * 0.84 + 50;
  }, [windowWidth]);

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

  function handleClickToRight() {
    currentHeroImageIndex * currentHeroImageWidth;
  }

  function handleClickToLeft() {
    if (currentHeroImageIndex >= 0) setCurrentHeroImageIndex((c) => c - 1);
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero_wrapper}>
          <Button type="right-click" handleClick={handleClickToRight}>
            <img src="/arrow.png" />
          </Button>
          <Button type="left-click" handleClick={handleClickToLeft}>
            <img src="/arrow.png" />
          </Button>
          <div className={styles.carousel_inner}>
            <ul className={styles.carousel}>
              {popularMovies &&
                heroImages.map((image) => (
                  <>
                    <li
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
                      }}
                      className={styles.hero_image}
                    />
                  </>
                ))}
            </ul>
          </div>
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
