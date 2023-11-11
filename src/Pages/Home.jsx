import { useState, useEffect } from "react";
import { MoviesList } from "../components/MoviesLists/MoviesList";
import "../components/MoviesLists/moviesList.css";
import "../index.css"

export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false); //add loading here;
  const [listType, setListType] = useState("popular");
  const [listTypeTitle, setListTypeTitle] = useState("Popular Releases");
  const API_Key = 'b9d9222d037c3b04f41cfe59a1e05d89' ;
  const apiPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`;
  const apiUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}&language=en-US&page=1`;
  const apiNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`; //in theaters

  const handleFetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
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

  //handle first fetch and execution of the dropdown menu,when state is changed
  useEffect(() => {
    let url;
    switch(listType){
      case "popular":
        url = apiPopular;
        setListTypeTitle("Popular Releases");
        break;
      case "now-playing":
        url = apiNowPlaying;
        setListTypeTitle("In Theaters");
        break;
      case "upcoming":
        url = apiUpcoming;
        setListTypeTitle("Upcoming Movies");
        break;
    }
    handleFetchData(url);
  },[, listType]);

  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
      <div className="main-home-container">
        <div>
            {/* <div>
              <img/>vitrine
            </div> */}
            <div className="movie-list-title-select">
                <h1>{listTypeTitle}</h1>
                <label>
                    <select value={listType} onChange={(e) => {setListType(e.target.value)}} className="select-movie-list-btn">
                        <option value="popular">Popular</option>
                        <option value="now-playing">In Theaters</option>
                        <option value="upcoming">Upcoming</option>
                    </select>
                </label>
            </div>
        </div>
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