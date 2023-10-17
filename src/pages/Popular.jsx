import "./Popular.css";

export const Popular = () => {
    const [movies, setMovies] = useState([]);

    const api_key = "7c19dcf9d97858f9497be69f656c349b";
    const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=6420add5c0a9b0e0b9462a92916c3187&language=en-US&page=1')
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
          })
      }, [])

  return (
    <div>Popular</div>
  )
}
