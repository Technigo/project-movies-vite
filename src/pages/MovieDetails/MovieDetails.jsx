import { MovieCard } from "../MovieCard/MovieCard.jsx";
import styles from "./MovieDetails.module.css";

import { NavLink } from "react-router-dom";

// Route: /movies/:id, component: Detail- what did you mean by this?

// This route expects a movie ID in the URL and is responsible for showing more details about a movie after you click on it. It uses useParams from react-router-dom to get the id from the URL and then passes that into an API call (within useEffect) to themoviedb.org to fetch details about a single movie, then puts the response into state using useState and finally renders it onto the page.

//MAYBE MAKE SOME COMPONENTS FOR the Movie display (like the card)?????

/*Update: I made a MovieCard componant. I also moved home into a folder and movie details into folders. I haven't made separate module.css files yet. 
-I added the release date to the Home page like technigos example displays it. 
-should we do a button component for the "back button" with an arrow icon in the navbar for "back to home"?
-Perhaps we could do a backgroundPoster comonent for the images/posters displayed on homepage and inside the MovieDetails?. 
-The styling I did is just to separate things a bit. feel free to change anything and everything :) 
*Elba */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//combined useeffect and usestate *Elba

export const MovieDetails = () => {
  const { id } = useParams(null);

  //*******API call to fetch details about a single movie */

  // Fetching a movie's details
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
  // Don't forget to replace {api_key} with your API key and {movie_id} with the id you get from the url via react-router if you copy and paste this.

  //Fetching movie details API: https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US

  //******************************/

  //const OurMovieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=003a2d9ebc845f57f76c3c02dbd08f13&language=en-US&page=1`;
  //we have this in home so i removed it from here and changed OurMovieAPI with OurMovieDetailAPI *Elba

  console.log("Movie ID from params:", id);
  const OurMovieDetailAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=003a2d9ebc845f57f76c3c02dbd08f13&language=en-US`;
  //changed {movie_id} with ${id} as id is displayed in the api. *Elba

  const [movie, setMovie] = useState();
  //I changed the name fetchMoviesList as i think is a little more descriptive. hope its ok? You can change it back if you dont agree *Elba
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(OurMovieDetailAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setMovie(json);
        console.log("Updated movie state:", movie);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className={styles.loading}>Loading...</div>;
  }

  //****************************************** */
  /*const { movieDetail } = useParams();
  console.log("movieDetail value:", movieDetail);
  const movieMatched = movie.find((p) => p.id === parseInt(movieDetail));
  console.log("movieMatched:", movieMatched);*/
  //I dont think we need this part, i get errors? But I dont know why. *Elba

  return (
    <div
      className={styles.movieContainer}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <h1 className={styles.movieHeader}>Movie Details</h1>
      {/* Show the "Back" button */}
      <p className={styles.homelink}>
        <NavLink to="/">Home</NavLink>
      </p>

      <MovieCard movie={movie} />
    </div>
  );
};
