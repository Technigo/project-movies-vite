import "./moviesList.css";

export const MoviesList = (movies) => {
    const vApiKey = "3bb019d4b7aeaf767a2f2d36e7c42067";
    const imgBaseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "w185";
    const moviesListData = movies.data;
    const title = "Movies List";
    console.log(moviesListData);

    return(
        <div className="movie-list-main-container">
            <h1>{title}</h1>
            <div className="movie-list-container">
                {moviesListData.map((movie) => (
                    <div className="movie-list-card" key={movie.id}>
                        <img src={`${imgBaseUrl}${posterSize}${movie.poster_path}`}/>
                        <div className="movie-list-card-texts">
                            <p className="movie-list-title">{movie.title}</p>
                            <p>{movie.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
