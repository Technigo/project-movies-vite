

const apiEnv = import.meta.env.VITE_API_KEY;
const BASE_URL_API_KEY = `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`;

    

export const PopularMoviesData = async () => {

    try {
        // Hämta data från API:et
        const response = await fetch(BASE_URL_API_KEY);
    
        // Kontrollera om anropet lyckades
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Konvertera svaret till JSON
        const data = await response.json();
    
        // Logga datan till konsolen
        console.log(data);
    
        // Returnera datan
        return data;
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      };
};



export const fetchMovieById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_API_KEY}/movie/${id}?api_key=${apiEnv}&language=en-US`);
    if (!response.ok) throw new Error("Failed to fetch movie");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie by id:", error);
    return null;
  }
};