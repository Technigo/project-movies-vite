Intermediate stretch goals

✅ Show a 'not found' page if you try to visit a movie detail page with an invalid movie ID (so the user has tried to enter an ID themselves, most likely).
  ✅In this case, when you send a movie detail request with a movie ID which doesn't exist in the API, the API returns with a 404 response. You can use .catch() on your promise to catch this exception and toggle some sort of 'error' state which can be used to show an error page.
- Handle loading states - The API responds quite quickly, but if you're on a slow network then you'd be faced with a black screen until the response comes back. During this time, you could show a loading message or spinner of some sort on the page.
  Use something like const [loading, setLoading] = useState(true) to make it so the page is loading by default, then call setLoading(false) once you get the response back from the API.
  You could also investigate how to handle the loading of images - or show plain text by default and then use CSS to place the image over the text (using absolute positioning). This way, if the images take a long time to load, the user still sees something relevant.

Advanced stretch goals

- On the homepage where you list popular movies, you could add a dropdown to change the list. For example, you could toggle between popular, upcoming, and new releases.
- When you load a movie, you get a lot of information in the API response, such as a collection it belongs to, genres it has, or the companies involved with producing the film. Each of these has an API endpoint that can be used to fetch more information about that entity. You could use this data to make links from your movie page to another page. Take a look through the documentation and be creative!
