import "./MovieDetails.css";

export const MovieDetails = ({ movieDetails }) => {
  console.log("Movie Details showing", movieDetails);

  // Destructure specific properties from the movieDetails-object
  const {
    title,
    overview,
    release_date,
    vote_average,
    backdrop_path,
    poster_path,
  } = movieDetails;

  const backgroundImage = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;

  return <article className="movie-details">MovieDetails</article>;
};

//You need to construct a URL using the secure_base_url + size + path from the API response.

//https://image.tmdb.org/t/p/w300/`${poster_path}`

/*
Inne på ett kort är det följande: 
div class=background, w1280:
För summary-div:en är det image size 342 https://image.tmdb.org/t/p/w1280${movie.backdrop_path}, för summary-bilden: w342*/
