/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TopMenu } from "../components/top-menu/TopMenu";

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
    <>
      <TopMenu />
      {isLoading ? (
        <p className="loading-text">Loading...</p>
      ) : similarMovie ? ( // Check if similarMovie is not null
        <div>
          {similarMovie.results.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
          ))}
        </div>
      ) : (
        <p>No similar movies found.</p>
      )}
    </>
  );
};
