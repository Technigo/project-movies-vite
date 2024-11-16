// src/api/tmdbApi.js
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGRmMzIwOTFiN2E2YjRkY2M1MzVhYWI0ZGQ1MGJjZiIsIm5iZiI6MTczMTc3OTU0NC4zMTcxODA0LCJzdWIiOiI2NzM2NDQ0OGRkMmM3MmE4YTkwMzk3OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OnjUp3PNMdWUH-MxROTKBUkvXccZx6-U4ndbhk9AyNA';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchFromAPI = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json;charset=utf-8',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const fetchPopularMovies = async () => {
    const data = await fetchFromAPI('/movie/popular?language=en-US&page=1');
    return data?.results || [];
};

export const fetchNowPlayingMovies = async () => {
    const data = await fetchFromAPI('/movie/now_playing?language=en-US&page=1');
    return data?.results || [];
};

export const fetchMovieDetails = async (id) => {
    return await fetchFromAPI(`/movie/${id}?language=en-US`);
};