/**
 * This is the Home component, representing the main page of the application.
 *
 * It displays a heading, a list of popular Christmas movies, 
 * and a footer section.
 *
 * The movie list is fetched dynamically using the `ApiFetcherKey` component, which retrieves the movies from an external API. The `render` prop of `ApiFetcherKey` is used to pass the fetched  movies to the `MovieList` component for display.
 *
 * Components:
 * - ApiFetcherKey: Fetches movie data and passes it to `MovieList`.
 * - MovieList: Renders the list of movies passed as a prop.
 * - Footer: Displays additional information or links in the footer.
 */

import ApiFetcherKey from "../data/ApiFetcherKey"; // Import ApiFetcherKey component
import Footer from "../components/Footer";
import MovieList from "../pages/MovieList"; // Import MovieList component

function Home() {
  return (
    <div className="homepage">
      <h1>Popular Christmas Movies</h1>
      <ApiFetcherKey
        render={(movies) => <MovieList movies={movies} />}
      />
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Home;
