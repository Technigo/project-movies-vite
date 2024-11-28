import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieView } from "../components/movie-card/MovieView";
import { Hourglass } from "react-loader-spinner";

export const MovieInfo = () => {
  // A state that tracks whether something is loading or not
  const [loading, setLoading] = useState(true);
  //A state that takes in information about a particular movie
  const [movie, setMovie] = useState(null);
  //Takes information about a movie's id and uses it to send a request to the API about that movie
  const { id } = useParams();

  const movieData = async () => {
    //API key stored in an env for security
    const envAPIKey = import.meta.env.VITE_API_KEY;
    //The API connection link that takes the id of the movie and api-key as parameters when contacting the API
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${envAPIKey}&language=en-US`;

    try {
      const fetchMovieData = await fetch(url);
      //Checks if the response from the API is ok and sends an error message if it isn't
      if (!fetchMovieData.ok) {
        throw new Error("Network response error");
      }

      //Turns the response into json-format
      const json = await fetchMovieData.json();
      //Sets the state with the response about the movie
      setMovie(json);
      //Sets loading to false as the information has been received and can therefore be displayed
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data: " + error);
    }
  };

  useEffect(() => {
    movieData();
  }, []);

  return (
    <div>
      {/* Displays Page is loading if loading state is true */}
      {loading && (
        <div className="loader">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      )}
      {/* Displays movie info if loading is false and movie is not empty/null/undefined */}
      {!loading && movie && <MovieView movie={movie} />}
    </div>
  );
};
