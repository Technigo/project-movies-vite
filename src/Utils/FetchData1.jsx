const API_KEY = "84d51ec61f17921d3880ccaddc60a0c3"
const API_URL_TMDB = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

export const fetchData1 = async () => {
  try {
    const response = await fetch(API_URL_TMDB)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    console.log('Data fetched successfully:', data)
    return data
  } catch (error) {
    console.error('Error fetching data:😔', error)
    throw error
  }
}