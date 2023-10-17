// Route: /, component: PopularList

//NOTE: THIS IS THE HOME PAGE

// This route is responsible for the home page. It uses useEffect to run an API request to themoviedb.org and fetch popular films in the US, puts them into state using useState, and then renders them wrapped in a Link from react-router-dom to link to the detail page.

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  //Our movie API key: 003a2d9ebc845f57f76c3c02dbd08f13
  //movie API URL for popular movies in the US:'https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1'

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
        setMovies(json.results);
        console.log(json.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMoviesList();
  }, []);

  return (
    <div>
      <h1>Home Page: Home</h1>
    </div>
  );
};
