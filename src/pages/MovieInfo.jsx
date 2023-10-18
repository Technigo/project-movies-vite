import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviePreview } from "../components/movie-card/MoviePreview";

export const MovieInfo = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const movieData = async () => {
    const envAPIKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${envAPIKey}&language=en-US`;
    try {
      const fetchMovieData = fetch(url);
      if (!fetchMovieData.ok) {
        throw new Error("Network response error");
      }

      const json = await fetchMovieData.json();
      setMovie(json);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data: " + error);
    }
  };

  useEffect(() => {
    movieData();
  }, []);

  return (
    <div>
      {loading && <h1>Page is loading...</h1>}
      {!loading && movie && <MoviePreview movie={movie} />}
    </div>
  );
};
