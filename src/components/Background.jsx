/* eslint-disable react/prop-types */
export const Background = ({ backdrop_path, title }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
      alt={title}
      className="backgroundImage"
    />
  );
};
