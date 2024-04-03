export const api = () => {
  {
    const fetchGenres = () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer 581a97ea9ebd9cf581e85b49251999f8",
        },
      }

      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        options
      )
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }
  }
}
