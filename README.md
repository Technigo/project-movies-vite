<img src="/src/assets/finished-version.png" alt="Project thumbnail">

# Movie Site Project

This project is built around React Router and get utlise the useParams hook, Link and NavLink components. The website has 3 pages:

- Homepage: including movie list and each movie links to movie detail page;
- Not Found Page;
- Movie Detail Page

Moreover I used query parameters to display clearly which list category and page the movie list is about. And then use the useSearchParams in other components.

# The Problem

- API call: Access Token is used in the header section instead of the query params to make API call more secure.
- Nested Routes: By implementing nested routes and using outlet component to insert route, it makes the route relationship clearer.
- Query Params and params: This project uses both query params and params for components/pages detecting URL changes and using the params in the component building.
- NavLink, Link and useNavigate: This takes some time to differentiate in terms of when to use and what properties they have. NavLink is used in the category bar and pagination where the active class is needed for styling. Whereas Link is used in normal situation. Lastly, useNavigate hook is implemented on some onClick functions or divs.
- Lazy Loading: LoadImage component does all the lazy loading for images. It observes the part of the viewport the user is on and render the images accordingly. It saves the loading work under the hood and enhances the performance.

# View it live

[![Netlify Status](https://api.netlify.com/api/v1/badges/0de75402-1a29-48c8-988d-93e98f843d46/deploy-status)](https://app.netlify.com/sites/popcorn-movie-hub/deploys)
