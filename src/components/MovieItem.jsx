

export const MovieItem = ({name, photo, releaseDate}) => {
  return (
    
        <li>
          <h2>{name}</h2>
          <img src={photo} alt={name} />
          <p>Release Date: {releaseDate}</p>
        </li>
      );
  
}
