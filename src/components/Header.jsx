/* eslint-disable react/prop-types */
import "../pages/MovieList.css";

export const Header = ({ onEndpointChange }) => {
  const handleClick = (endpoint) => {
    onEndpointChange(endpoint);
  };

  return (
    <section className="headerSection">
      <div className="headerTitle">
        <h1>Movie Space</h1>
      </div>

      <div className="headerButtons">
        <button onClick={() => handleClick("nowplaying")}>Now Playing</button>
        <button onClick={() => handleClick("popular")}>Popular</button>
        <button onClick={() => handleClick("toprated")}>Top Rated</button>
        <button onClick={() => handleClick("upcoming")}>Upcoming</button>
      </div>
    </section>
  );
};
