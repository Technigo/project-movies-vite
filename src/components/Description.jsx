/* eslint-disable react/prop-types */
//heading, star, description
export const Description = ({ movieName, vote, overview }) => {
  return (
    <>
      <h3>{movieName}</h3>
      <p>{vote}</p>
      <p>{overview}</p>
    </>
  );
};
