import { useState, useEffect } from "react"
import '../styling/PopularList.css'
import { MovieCard } from "./MovieCard.jsx"
import { Loader } from './Loader.jsx'

//global scope

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '23ace2b0c27910f5cec13f5bdb014044'
const urlMovies = `${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`



//functional component  
export const PopularList = () => {
  const [movies, setMovies] = useState (null)

//function to fetch movies from API with async/await
  const getMovies = async () => {
    try{
      const response = await fetch (urlMovies)

//if something is wrong with the fetch
      if (!response.ok) {
        throw new Error ('data not found')
      }
//parse json response
  const jsonMovies = await response.json()
  setMovies(jsonMovies)
  console.log('show data from json', jsonMovies)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect (() => {
    getMovies()
  }, [])
  

  return (
    <section className="popular-list">
      {movies ? <MovieCard movieData={movies.result} /> : <Loader /> }
    </section>
  )
}

