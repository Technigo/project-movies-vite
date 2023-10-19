import { useEffect ,useState } from "react"
import { Link, useParams } from "react-router-dom"

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [data , setData] = useState("")
    const apiKey = '40207c52cf04bd3620d9a88d81077c93'

   useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => alert("Error fetching Movie data:", error));
   }, [movieId])

   if (!data) return <h4>Loading...</h4>;


   console.log(data)
  return (
    <div className="background-img" style={{backgroundImage:`url("https://image.tmdb.org/t/p/w1280${data.backdrop_path}")`}}>
       
        <Link className="link" to="/"><i className="fa-solid fa-circle-arrow-left"></i> Movies</Link>
        <div className="summary">
            <img className="poster-img" src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} alt={data.title} />
            <div className="details">
                <h1><span className="title">{data.original_title}</span> <span className="rate"><i className="fa-solid fa-star"></i> {Number(data.vote_average).toFixed(1)} </span></h1>
                <p className="desc">{data.overview}</p>
            </div>
        </div>
        
        </div>
  )
}
