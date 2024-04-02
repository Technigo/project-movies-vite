export const App = () => {
  const API_KEY = "2bd2e4cabf6e3176951e947b95e23dd9"
  const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

  const fetchMovies = () => {
    fetch(BASE_URL)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Movie not found")
          } else {
            throw new Error("Failed fetching movies")
          }
        }
        return response.json()
      })
      .then((json) => {
        console.log(json)
      })
  }

  fetchMovies()

  return <div>Find me in src/app.jsx!</div>
}
