import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import BackHome from "../components/BackHome";
import styles from "../styling/Movie.module.css";

const Access_Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWIxM2M3MzY1ZTNlNTRmY2JjNWQ1NzE1MTE3NjdmOSIsInN1YiI6IjY1NTkzNzIyYjU0MDAyMTRkM2NhZTQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUP5w6KFCmMshYAaFwy15nfUVAcySBTGUGuOYxWo1M0";

const Base_URL = "https://api.themoviedb.org/3/movie/";

const Movie = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${Access_Token}`,
      },
    };
    fetch(`${Base_URL}${movieID}?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMovie(response);
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, [movieID]);

  return (
    <article className={styles.moviePage}>
      {isLoading && <p style={{ color: "white", font: "45px" }}>Loading</p>}
      <BackHome />
      {movie && (
        <MovieDetail
          bgImage={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          rate={movie.vote_average}
          name={movie.title}
          descr={movie.overview}
          poster={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        />
      )}
    </article>
  );
};

export default Movie;
