import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState("w780");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1499) {
      setImageSize("original");
    } else if (windowWidth > 1023) {
      setImageSize("w1280");
    } else {
      setImageSize("w780");
    }
  }, [windowWidth]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/${imageSize}${movie.backdrop_path}`}
        alt={movie.title}
      />
    </div>
  );
};
