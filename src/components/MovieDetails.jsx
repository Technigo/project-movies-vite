

export const MovieDetails = ({ title, poster_path, overview }) => {
//   console.log(movie)
// const { title, poster_path, overview } = movie;

  return (
    <div className="wrapper for entire page">
      <div className="container-for-details">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={`Movie poster for ${title}`}
        />
        <div className="text-container">
          <h1>{title}</h1>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  )
}
