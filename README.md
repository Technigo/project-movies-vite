# Movie Site Project

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

This week's task involves fetching a list of movies from the themoviedb.org API and displaying them on a webpage. This is my improved version of the project.


### The Problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next? 

I honestly thought this weeks project design looked exactly like the music library we did a few weeks ago. My improvements was to do something different, modern and fun the user! At the same time learn how to structure the website using new methods/functions.

I used useEffect to fetch data from an external API (fetchMovies function in MovieList and fetchMovieDetails function in MovieDetails).

Both components handle user interactions/events. MovieList handles mouse movement and keyboard navigation, while MovieDetails handles fetching movie details and rendering them. Was struggling a bit with the smoothness of the mouse movement and it's still a bitch glitchy but atleast it works! This is something I would want to improve.

The "go back-button" is link components from React Router which are used for navigation between different routes (MovieList to MovieDetails and vice versa), that's how you can go back to the main site (MovieList). 

Responsiveness design was a pain in my ass. Had to remove the movie description from phone views because everything was going outside the screen view. Would have wanted to add a "view more" button to resolve the issue but had no time for this.

### View it live

https://inquisitive-capybara-aede80.netlify.app/
