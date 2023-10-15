import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styling/popularlist.css";
import RatingStars from "react-rating-stars-component";
import Footer from "./Footer";
const PopularList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listChoice, setListChoice] = useState("movie/popular");

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${listChoice}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        // console.log(results);
        setMovieList(results);
      })
      .catch((error) => console.error("Error fetching: ", error))
      .finally(() => {
        setLoading(false);
      });
  }, [listChoice]);

  const ratingStarConfig = {
    size: 30,
    activeColor: "#c00e0e",
    color: "#ffffff",
    edit: false,
  };
  return (
    <div>
      <h1>Welcome to Movie World</h1>

      <section className="home-page">
        {movieList.map((movie, index) => {
          return (
            <Link key={index} to={`/movies/${movie.id}`}>
              <div className="movie-card">
                <img
                  src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt="movie image"
                  className="movie-poster"
                />

                <h1>{movie.title}</h1>
                <div className="description">
                  <p>Release {movie.release_date}</p>
                  <RatingStars
                    value={movie.vote_average / 2}
                    {...ratingStarConfig}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default PopularList;
