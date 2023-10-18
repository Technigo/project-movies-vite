import "./moviecard.css";

export const MovieCard = ({ title, release, image, id }) => {
  return (
    <div
      className="movie-card"
      style={{
        background: `url(${image}) center center`,
      }}
    >
      <div className="movie-data">
        <h2>{title}</h2>
        <h3>{release}</h3>
        <h4>{id}</h4>
      </div>
    </div>
  );
};
