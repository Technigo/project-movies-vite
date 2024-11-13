

const PopularMoviesData = async () => {


    try {
        const BASE_URL_API_KEY = "https://api.themoviedb.org/3/movie/popular?api_key=c35a16f7f47222bb1a2ab73b407b312a&language=en-US&page=1";
        
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

export default PopularMoviesData;