/*This route expects a movie ID in the URL 
and is responsible for showing more details 
about a movie after you click on it. 

It uses useParams from react-router-dom 
to get the id from the URL and then passes 
that into an API call (within useEffect) to 
themoviedb.org to fetch details about a 
single movie, then puts the response into state 
using useState and finally renders it onto the page.

rating
name
description
image*/

//Take Id from Url, make API call to 
//Fetch info about that movie
//Response in useState
//render to page

import { useParams } from "react-router-dom"

export const MovieDetails = () => {
  const params = useParams()
  console.log(params)
  return <div>Show movie details</div>
}
