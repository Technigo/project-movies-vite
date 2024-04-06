import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styling/MovieList.module.css";
import Category from "./Category";
import Pagination from "./Pagination";
import Lottie from "lottie-react";
import loading from "../assets/loading.json";
import LoadImage from "./LoadImage";
// import placeholderImg from "../assets/film.jpg";

const Access_Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWIxM2M3MzY1ZTNlNTRmY2JjNWQ1NzE1MTE3NjdmOSIsInN1YiI6IjY1NTkzNzIyYjU0MDAyMTRkM2NhZTQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUP5w6KFCmMshYAaFwy15nfUVAcySBTGUGuOYxWo1M0";

const Base_URL = "https://api.themoviedb.org/3/movie/";

const MovieList = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({
    category: "now_playing",
    page: 1,
  });

  useEffect(() => {
    setMovies(null);
    setIsLoading(true);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${Access_Token}`,
      },
    };
    fetch(
      `${Base_URL}${searchParams.get(
        "category"
      )}?language=en-US&page=${searchParams.get("page")}`,
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMovies(response.results);
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const changePage = e => {
    const pageNum = Number(e.target.name);
    setSearchParams({ ...searchParams, page: pageNum });
    window.scrollTo(0, 0);
  };

  const changeListType = e => {
    const listType = e.target.name;
    setSearchParams({ ...searchParams, category: listType });
  };

  return (
    <div className={styles.container}>
      <Category
        category={searchParams.get("category")}
        onClick={changeListType}
      />
      {isLoading && (
        <div className={styles.loading}>
          <Lottie
            className={styles.animation}
            animationData={loading}
            loop={true}
          />
          <p className={styles.loadingText}>Movies on the way...</p>
        </div>
      )}
      {movies && (
        <div className={styles.movieList}>
          {movies.map(movie => (
            <div key={movie.id} className={styles.movieItem}>
              <LoadImage
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={`A poster of ${movie.title}`}
              />
              <div
                className={styles.overlay}
                onClick={() => {
                  navigate(`/movies/${movie.id}`);
                }}
              >
                <h2 className={styles.title}>{movie.title}</h2>
                <p className={styles.releaseDate}>
                  Released {movie.release_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {movies && (
        <Pagination
          type={searchParams.get("category")}
          page={searchParams.get("page")}
          onClick={changePage}
        />
      )}
    </div>
  );
};

export default MovieList;
