import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MovieDetails } from "../components/MovieDetails";
import { ColorRing } from "react-loader-spinner";
import { Navbar } from "../components/Navbar";

export const MovieInfo = () => {
  const [movie, setMovie] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const apiEnv = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`;

    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setMovie(json);
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const delay = setTimeout(() => {
      fetchMovies();
    }, 0);

    return () => clearTimeout(delay);
  }, [id]);

  return (
    <>
      <Navbar />

      {isLoading ? (
        <div className="loader-container">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="circle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed", "#77e2ec", "#abc4ef", "#723096"]}
          />
        </div>
      ) : (
        <MovieDetails movie={movie} />
      )}
    </>
  );
};
