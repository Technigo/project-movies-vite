import "./MovieDetails.css";

export const MovieDetails = ({ movie }) => {
  console.log(movie);
  const { title, poster_path, backdrop_path, overview, vote_average } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  const posterImage = `https://image.tmdb.org/t/p/w780${poster_path}`;

  return (
    <div>
      <div className="background-poster">
        <img src={backgroundImage} alt={overview} />
      </div>

      <img src={posterImage} alt={title} />

      <h1>{title}</h1>
      <p>{vote_average.toFixed(1)}</p>
      {/* I add toFixed(1) for to round it to one decimal place */}
      <p>{overview}</p>
    </div>
  );
};


// export const MovieDetails = ({ movie }) => {
//     const { title, backdrop_path, overview } = movie;
//     const backgroundImage = `https://image.tmdb.org/t/p/w342/${backdrop_path}`;
  
//     return (
//       <div>
//         <img src={backgroundImage} alt={overview} />
//         <h1>{title}</h1>
//         <p>{overview}</p>
//       </div>
//     );
//   }




