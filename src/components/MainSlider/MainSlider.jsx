import { useMemo } from "react";
import useSWR from "swr";
import styles from "./MainSlider.module.css";
import { Slider } from "../Slider";
import { MovieCard } from "../MovieCard";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import { Loading } from "../Loading";
import { Error } from "../Error";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_KEY, // eslint-disable-line
  },
};

const fetcher = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  ).then((response) => response.json());
  return data;
};

function MainSlider({ windowWidth, movies, title, horizontal = true }) {
  const currentSliderImageWidth = useMemo(() => {
    return (windowWidth * 0.84) / 2;
  }, [windowWidth]);
  const { data, error, isLoading } = useSWR("getGenre", fetcher);

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  const genres = data.genres;
  return (
    <>
      <div className={styles.slider_wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <Slider currentImageWidth={currentSliderImageWidth}>
          {movies.map((movie) => (
            <li className={styles.scroll_item} key={movie.id}>
              {horizontal ? (
                <HorizontalCard movie={movie} genres={genres} />
              ) : (
                <MovieCard movie={movie} />
              )}
            </li>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default MainSlider;
