Intermediate stretch goals

✅ Show a 'not found' page if you try to visit a movie detail page with an invalid movie ID (so the user has tried to enter an ID themselves, most likely).
✅In this case, when you send a movie detail request with a movie ID which doesn't exist in the API, the API returns with a 404 response. You can use .catch() on your promise to catch this exception and toggle some sort of 'error' state which can be used to show an error page.
✅ Handle loading states - The API responds quite quickly, but if you're on a slow network then you'd be faced with a black screen until the response comes back. During this time, you could show a loading message or spinner of some sort on the page.
Use something like const [loading, setLoading] = useState(true) to make it so the page is loading by default, then call setLoading(false) once you get the response back from the API.
You could also investigate how to handle the loading of images - or show plain text by default and then use CSS to place the image over the text (using absolute positioning). This way, if the images take a long time to load, the user still sees something relevant.

Advanced stretch goals

- On the homepage where you list popular movies, you could add a dropdown to change the list. For example, you could toggle between popular, upcoming, and new releases.


- When you load a movie, you get a lot of information in the API response, such as a collection it belongs to, genres it has, or the companies involved with producing the film. Each of these has an API endpoint that can be used to fetch more information about that entity. You could use this data to make links from your movie page to another page. Take a look through the documentation and be creative!

{
"page": 1,
"results": [
{
"adult": false,
"backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
"genre_ids": [
18,
80
],
"id": 278,
"original_language": "en",
"original_title": "The Shawshank Redemption",
"overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
"popularity": 139.838,
"poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
"release_date": "1994-09-23",
"title": "The Shawshank Redemption",
"video": false,
"vote_average": 8.704,
"vote_count": 25919
}]}
