/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TopMenu } from "../../components/top-menu/TopMenu";
import { MovieList } from "../../components/movie-list/MovieList";
import "./SimilarMovie.css";

export const SimilarMovie = () => {
  const movieId = useParams();
  const apiKey = "195790d926bf4d38c02251685a7c5f5e";
  const [similarMovie, setSimilarMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  console.log(movieId);
  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId.id}/similar?api_key=${apiKey}&language=en-US&page=1`
      );
      if (response.ok) {
        const data = await response.json();
        setSimilarMovie(data);
      } else {
        throw new Error("Failed at fetch the movie list");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <section className="similar-movie-section">
      <TopMenu />
      {isLoading ? (
        <p className="loading-text">Loading...</p>
      ) : similarMovie ? (
        <div>
          <h3 className="similar-movie-note">Similar Movies</h3>
          <ul className="similar-movie-list">
            {similarMovie.results.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`} className="each-movie">
                  <MovieList movie={movie} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No similar movies found.</p>
      )}
    </section>
  );
};
