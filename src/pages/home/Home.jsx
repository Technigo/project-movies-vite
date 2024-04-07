/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { TopMenu } from "../../components/top-menu/TopMenu";
import "./Home.css";

export const Home = () => {
  const apiKey = "195790d926bf4d38c02251685a7c5f5e";
  const [movieHomeData, setMovieHomeData] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  //   const [searchError, setSearchError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
      );
      if (response.ok) {
        const data = await response.json();
        setMovieHomeData(data);
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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}&include_adult=false&language=en-US&page=1`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.results.length > 0) {
          const movieId = data.results[0].id;
          return `/movie/${movieId}`;
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchEnter = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const movieLink = await searchMovie();
      if (movieLink) {
        console.log(movieLink);
        window.location.href = movieLink;
      }
    }
  };
  return (
    <>
      <TopMenu />
      <section className="home-section">
        <div className="search-movie-container">
          <form className="search-bar">
            <label htmlFor="movie-search">
              Which movie do you want to see?
            </label>
            <input
              type="text"
              id="movie-search"
              name="movie-search"
              value={searchQuery}
              onChange={handleSearch}
              onKeyDown={handleSearchEnter}
              placeholder="Search for a movie by name..."
            />
          </form>
        </div>
        {isLoading ? (
          <p className="loading-text">Loading...</p>
        ) : (
          <ul className="home-carousel-list">
            {movieHomeData.results.map((movie) => (
              <li key={movie.id}>
                <img
                  src={`http://image.tmdb.org/t/p//w154${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};
