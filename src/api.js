const apiEnv = import.meta.env.VITE_API_KEY;

export const fetchMoviesByGenre = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiEnv}&language=en-US&page1`
    );
    if (!response.ok) {
        throw new Error('error fetching movies');
    }
    return await response.json();
};

export const fetchGenres = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiEnv}&language=en-US`
    );
    if (!response.ok) {
        throw new Error('Error fetching genres');
    }
    return await response.json();
};