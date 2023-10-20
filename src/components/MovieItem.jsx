export const MovieItem = ({name, photo, releaseDate}) => {
return (

<div className="movie-item">
  <div className="movie-image">
    <img src={photo} alt={name} />
    <div className="image-overlay">
      <h2>{name}</h2>
      <p>Release Date: {releaseDate}</p>
    </div>
  </div>
</div>
);

}