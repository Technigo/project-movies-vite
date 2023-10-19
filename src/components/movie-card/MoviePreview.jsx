export const MoviePreview = ({ movie }) => {
  console.log(movie);
  const { title, backdrop_path, overview, poster_path, vote_average } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  const posterImage = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  return (
    <div
      className="movie-container"
      style={{ backgroundImage: `url(${backgroundImage}) center center` }}
    >
      <div className="movie-summary">
        <img src={posterImage} alt={title} />
        <div className="movie-info">
          <div className="title-and-score">
            <h1 className="movie-title">{title}</h1>
            <h2 className="movie-score"> ⭐{vote_average}</h2>
          </div>
          <p className="movie-overview">{overview}</p>
        </div>
      </div>
    </div>
  );
};
