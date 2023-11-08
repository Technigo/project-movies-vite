
export const MoviesList = (movies) => {
    const moviesListData = movies.data;
    const title = "Complete List";
    console.log(moviesListData);

    return(
        <div>
            <h1>{title}</h1>
            <div>
                {moviesListData.map((movie) => (
                    <div className="movie-list-container" key={movie.id}>
                        <div>
                            <img src=""/>
                            <p>{movie.title}</p>
                            <p>{movie.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
