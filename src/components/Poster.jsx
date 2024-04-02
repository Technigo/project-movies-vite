/* eslint-disable react/prop-types */

export const Poster = ({ poster_path, title, imageClass }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w342${poster_path}`}
      alt={title}
      className={`${imageClass}`}
    />
  );
};
