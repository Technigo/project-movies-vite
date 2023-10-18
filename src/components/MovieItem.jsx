// This component represents an individual movie item in the list. It's a reusable component.
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from '/src/api'; // Import IMAGE_BASE_URL from your API module

export function MovieItem({ movie }) {
  const imageUrl = `${IMAGE_BASE_URL}/w185${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-item">
        <img src={imageUrl} alt={movie.title} />
        <p>{movie.title}</p>
        <p>Released: {movie.release_date}</p>
      </div>
    </Link>
  );
}
