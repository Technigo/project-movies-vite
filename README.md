# MovieHut by Helene Westrin

## The Project

In this project I was tasked with creating a multi-page website using React Router. The site had to use The Movie Database (TMDB) API to fetch movies or series and each link to a separate page for each movie.

_I started with planning how I wanted the URL structure to be:_

- / (Home page)
- /movies/:category (For whatever categories I wanted to display)
- /movie/:movie-name (For each individual movie)
- /not-found (For all invalid url´s)

Fetching the data was easy enough, but I quickly realized it wasn't so straight forward with getting the movie name as the slug for each movie. Since the data didn't provide a slug I had to construct it out of the movie name; make it all lowercase, replace spaces and underscore with dashes, etc. I also realized some movies may have the same name - so in order to keep all slugs unique I also had to have the movie ID in the slug.

_Some other features include:_

- Search bar
- Updating the page title accordingly
- Skeleton loaders
- Pagination for movie lists

## View it live

[https://moviehut-by-helene.netlify.app](https://moviehut-by-helene.netlify.app/)
