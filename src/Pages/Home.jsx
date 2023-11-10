import { useState, useEffect } from "react";
import { MoviesList } from "../components/MoviesLists/MoviesList";

export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false); //add loading here;
  const API_Key = 'b9d9222d037c3b04f41cfe59a1e05d89' ;
  const API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`  ;

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    const data = await response.json();
    // console.log(JSON.stringify(data, null, 2));
    setMoviesList(data.results);
    } catch (error) {
      console.log("error", error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
      <div className="all-movies-list-container">
      <MoviesList data={moviesList} />
      </div>
      )}
    </>
  );
};

// export default Home;

// ### Fetching popular movies for the list page

// https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1 <br />
// !!! Don't forget to replace {api_key} with your API key if you copy and paste this.

// ### Fetching a movie's details

// https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US <br />
// Don't forget to replace {api_key} with your API key and {movie_id} with the id you get from the url via react-router if you copy and paste this.