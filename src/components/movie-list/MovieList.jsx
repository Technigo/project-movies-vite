import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/MovieCard";
import { Hourglass } from "react-loader-spinner";

import "./movielist.css";

export const MovieList = () => {
  // A state that receives a list of movies from the API
  const [movieList, setMovieList] = useState([]);
  // A state that toggles loading so that the program can display without error
  const [loading, setLoading] = useState(true);

  //The API key saved in an env file so as to not be accessible by anyone else
  const envAPIKey = import.meta.env.VITE_API_KEY;

  const API = async () => {
    //Contacts the API and receives a list of movies that then gets set to the movieList state
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${envAPIKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response.results);
        //Loading is set to false when information has been received from the API
        setLoading(!loading);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    API();
  }, []);

  return (
    <div>
      <div className="movie-grid">
        {/* Checks loading state and displays a loading animation if true and a list of movies if false */}
        {loading ? (
          <div className="loader">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#306cce", "#72a1ed"]}
              className="hourglass"
            />
          </div>
        ) : (
          movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              release={movie.release_date}
              image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
              id={movie.id}
            />
          ))
        )}
      </div>
    </div>
  );
};
