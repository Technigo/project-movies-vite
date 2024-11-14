// import { useState, useEffect } from 'react';
// import { fetchMovies } from './api';

// export const useMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadMovies = async () => {
//       try {
//         const data = await fetchMovies();
//         setMovies(data.results);
//       } catch (err) {
//         setError("Error to load the movie");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadMovies();
//   }, [])
//   return { movies, isLoading, error };
// }
import { useState, useEffect } from 'react';
import { fetchMoviesByGenre } from './api'; // Sicherstellen, dass die richtige Funktion importiert wird

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = await fetchMoviesByGenre(); // Hier den richtigen Funktionsaufruf verwenden
                setMovies(data.results);
            } catch (err) {
                setError("Error to load the movie");
            } finally {
                setIsLoading(false);
            }
        };
        loadMovies();
    }, []); // Beim ersten Laden der Komponente ausführen

    return { movies, isLoading, error };
};



