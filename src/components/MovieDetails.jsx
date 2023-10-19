import '../styling/moviedetails.css'
export const MovieDetails = ({ movie }) => {
    console.log(movie);

    const { title, poster_path, backdrop_path, overview, vote_average } = movie;
    const affischImage = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    const backgroundImage = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`

    return (
        <>
            <div className='single-movie-background'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}>
                <div className="single-movie-card">
                    <img src={affischImage} alt={overview} />
                    <div className="single-movie-info">
                        <h2 >{title}
                            <span > ⭐{vote_average.toFixed(1)} </span>
                        </h2>
                        <p>{overview}</p>
                    </div>
                </div>
            </div >
        </>
    )
}
