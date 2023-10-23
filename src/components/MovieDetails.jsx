import "./MovieDetails.css";

export const MovieDetails = ({ movie }) => {
  console.log(movie);
  const { title, poster_path, backdrop_path, overview, vote_average } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  const posterImage = `https://image.tmdb.org/t/p/w780${poster_path}`;

  return (
    <div className="detail-page">
      <div className="background-poster">
        <img src={backgroundImage} alt={overview} />
      </div>
      <div className="summary">
        <img src={posterImage} alt={title} />
        <div className="details">
          <h1>
            <span className="movie-title">{title}</span>
            <span className="rating">{vote_average.toFixed(1)}</span>
          </h1>
          <p>{overview}</p>
        </div>
      </div>
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
