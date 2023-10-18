// Route: /, component: PopularList

//NOTE: THIS IS THE HOME PAGE

// This route is responsible for the home page. It uses useEffect to run an API request to themoviedb.org and fetch popular films in the US, puts them into state using useState, and then renders them wrapped in a Link from react-router-dom to link to the detail page.

import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
  //Our movie API key: 003a2d9ebc845f57f76c3c02dbd08f13
  //movie API URL for popular movies in the US:'https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1'

  //NOTE we can change the country if we want Norway = NO, Australia = AU

  const [movies, setMovies] = useState([]);

  const OurMovieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=003a2d9ebc845f57f76c3c02dbd08f13&language=en-US&page=1`;

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        const response = await fetch(OurMovieAPI);
        if (!response.ok) {
          throw new Error("Network Reponse Error");
        }
        const json = await response.json();
        setMovies(json);
        //removed respnse *Elba
        console.log(json);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMoviesList();
  }, []);

  console.log(`this is now in the movies array:`, movies);
  //the following maps the movies array to get the title. display a list of titles and make them all links to their own moviedetails pages

  if (!movies || !movies.results) {
    return <div className={styles.loading}>Loading...</div>;
  } //This will whoe "Loading..." to the usrs while data is beeing fetched from the API. I added this because while we still had the red border I could see it when going back before the data was fetched, not sure if this will solve it. When going into the moviedetails I can see the "Loading..." I added in the top left corner before the data is fetched. Perhaps there are ways to show the loading only after x seconds. I dont know how this would look in the deployed version. *Elba 


  return (
    <div>
      {/*<h1 className={styles.moviesHeader}>Latest Movies</h1>*/}

      <div className={styles.movielistContainer}>
        {movies &&
          movies.results &&
          movies.results.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className={styles.movielistBox}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <div className={styles.movieText}>
                  <h1> {movie.title}</h1>
                  <p>Released: {movie.release_date}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

