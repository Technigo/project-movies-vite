export const MovieDetailSection = ({ movieDetails }) => {
  return (
    <div className="movie-details">
      <img
        src={`http://image.tmdb.org/t/p//w342${movieDetails.poster_path}`}
        alt=""
      />
      <div className="detail-text">
        <h3>{movieDetails.title}</h3>

        <div className="rating">
          <p className="rating-score">
            <img src="/star.svg" alt="star-icon" />
            {movieDetails.vote_average.toFixed(1)}
          </p>
        </div>

        <p className="movie-overview">{movieDetails.overview}</p>
      </div>
    </div>
  );
};
