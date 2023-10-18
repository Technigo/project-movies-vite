export const MovieDetails = ({ movie }) => {
    console.log(movie);

    const { title, backdrop_path, overview } = movie;
    const affischImage = `https://image.tmdb.org/t/p/w342/${backdrop_path}`;

    return (
        <div>
            <img src={affischImage} alt={overview} />

            <h1>{title}</h1>
            <p>{overview}</p>
        </div>
    )
}
