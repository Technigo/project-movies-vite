import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGRmMzIwOTFiN2E2YjRkY2M1MzVhYWI0ZGQ1MGJjZiIsIm5iZiI6MTczMTc3OTU0NC4zMTcxODA0LCJzdWIiOiI2NzM2NDQ0OGRkMmM3MmE4YTkwMzk3OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OnjUp3PNMdWUH-MxROTKBUkvXccZx6-U4ndbhk9AyNA';
const BASE_URL = 'https://api.themoviedb.org/3';

// Función para obtener películas populares o en cines
const fetchMovies = async (category) => {
    const endpoint =
        category === 'popular'
            ? 'movie/popular'
            : 'movie/now_playing';

    const response = await fetch(
        `${BASE_URL}/${endpoint}?language=en-US&page=1`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json;charset=utf-8',
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
};

// Componente PopularList
const PopularList = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('popular');

    // Fetch de películas según la categoría seleccionada
    useEffect(() => {
        const getMovies = async () => {
            try {
                const fetchedMovies = await fetchMovies(category);
                setMovies(fetchedMovies);
            } catch (error) {
                console.error('Error al obtener películas:', error);
            }
        };
        getMovies();
    }, [category]);

    return (
        <div>
            {/* Dropdown para seleccionar categoría */}
            <div className="category-selector">
                <label htmlFor="category">Select Movies: </label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="popular">Popular Movies</option>
                    <option value="now_playing">Now Playing</option>
                </select>
            </div>

            {/* Grid de películas */}
            <div className="movie-grid">
                {movies.map((movie) => (
                    <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-item">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularList;
